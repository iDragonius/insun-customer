import News from '@/components/screens/home/news'
import Loader from '@/components/ui/shared/Loader'
import GET_NEWS from '@/gql/queries/news'
import { NewsPreviewItem, NewsResponse } from '@/interfaces/news.interface'
import { imageLoader } from '@/utils/loader'
import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

export interface NewsPageProps {
	data: NewsResponse
}

const NewsPage: FC<NewsPageProps> = () => {
	const [news, setNews] = useState<NewsPreviewItem[]>([])
	const { data, loading } = useQuery<NewsResponse>(GET_NEWS, {
		variables: {
			locale: 'az',
		},
	})

	useEffect(() => {
		const temp = [...(data?.newsP.data || [])]
		temp.splice(0, 4)
		setNews(temp)
	}, [data])
	if (loading) {
		return <Loader />
	}
	return (
		<>
			<Head>
				<title>
					Psixologiya, dietologiya, yoqa, kouçinq, access bars, theta healing,
					qrup terpariyaları ilə bağlı xəbərlər | İnsun Yaşam Mərkəzi
				</title>
				<meta
					name='description'
					content='İnsun Yaşam Mərkəzinin inkişafı ilə bağlı Sizi maraqlandıran xəbərlərlə buradan tanış olun'
					key='desc'
				/>
			</Head>
			<main className={'box'}>
				<h3 className={'mt-16 mb-10 text-[#424242] text-[44px] font-bold'}>
					Insun Xəbər Mərkəzi
				</h3>
				<News data={data?.newsP.data || []} />
				<div
					className={
						'grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16 mt-10'
					}
				>
					{news.map(newsItem => (
						<Link href={`/news/${newsItem.id}`}>
							<Image
								loader={imageLoader}
								src={newsItem.attributes.thumbnail.data.attributes.url}
								alt={newsItem.attributes.thumbnail.data.attributes.name}
								width={416}
								height={300}
								className={'mb-6 w-full'}
							/>
							<p className={'text-[13px] text-[#A1A1A1] font-semibold mb-2'}>
								{dayjs(newsItem.attributes.date).format('DD.MM.YYYY')}
							</p>
							<h3 className={'line-clamp-2 font-bold text-24 text-bodyText '}>
								{newsItem.attributes.title}
							</h3>
						</Link>
					))}
				</div>
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()
// 	const { data } = await apolloClient.query({
// 		query: GET_NEWS,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})
// 	return {
// 		props: { data },
// 	}
// }
export default NewsPage
