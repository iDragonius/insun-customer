import NewsItem from '@/components/ui/shared/NewsItem'
import { NewsPreviewItem } from '@/interfaces/news.interface'
import { imageLoader } from '@/utils/loader'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

export interface NewsProps {
	data: NewsPreviewItem[]
}

const News: FC<NewsProps> = ({ data }) => {
	const [newsData, setNewsData] = useState<{
		main: NewsPreviewItem | null
		subs: NewsPreviewItem[]
	}>({
		main: null,
		subs: [],
	})

	useEffect(() => {
		if (data) {
			const temp = data.slice(1)
			temp.length = 3
			setNewsData({
				main: data[0],
				subs: temp,
			})
		}
	}, [data])
	const { width } = useWindowSize()
	console.log(newsData)
	return (
		<>
			{newsData.main && (
				<>
					{width > 1439 ? (
						<div className={'grid grid-cols-4 mb:grid-cols-5 gap-8'}>
							<div className={'cols-span-2 mb:col-span-3'}>
								<NewsItem
									type={'main'}
									data={newsData.main as NewsPreviewItem}
								/>
							</div>
							<div className={'col-span-2'}>
								{newsData.subs.map(sub => (
									<NewsItem type={'sub'} data={sub} key={sub.id} />
								))}
							</div>
						</div>
					) : (
						<div
							className={
								'grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16'
							}
						>
							{[newsData.main, ...newsData.subs].map(newsItem => {
								if (newsItem !== undefined) {
									return (
										<Link href={`/news/${newsItem.id}`}>
											<Image
												loader={imageLoader}
												src={newsItem.attributes.thumbnail.data.attributes.url}
												alt={newsItem.attributes.thumbnail.data.attributes.name}
												width={416}
												height={300}
												className={'mb-6 w-full'}
											/>
											<p
												className={
													'text-[13px] text-[#A1A1A1] font-semibold mb-2'
												}
											>
												{dayjs(newsItem.attributes.date).format('DD.MM.YYYY')}
											</p>
											<h3
												className={
													'line-clamp-2 font-bold text-24 text-bodyText '
												}
											>
												{newsItem.attributes.title}
											</h3>
										</Link>
									)
								}
							})}
						</div>
					)}
				</>
			)}
		</>
	)
}

export default News
