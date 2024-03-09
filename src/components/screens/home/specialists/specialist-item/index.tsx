import { SpecialistItemProps } from '@/interfaces/home.interface'
import { imageLoader } from '@/utils/loader'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
export type SpecialistProps = {
	id: number
	image: StaticImageData
	fullName: string
	field: string
	experience: number
	tags: string[]
}
export interface SpecialistComponentItemProps {
	data: SpecialistItemProps
}

const SpecialistItem: FC<SpecialistComponentItemProps> = ({ data }) => {
	return (
		<Link
			href={`/specialists/${data.id}`}
			className={
				'mx-auto mb:max-w-[400px] w-full group bg-white rounded-[12px] trans hover:ring-8 hover:ring-white hover:ring-opacity-100'
			}
		>
			{data.attributes.image.data && (
				<Image
					loader={imageLoader}
					src={data.attributes.image.data.attributes.url}
					alt={'specialist'}
					className={'rounded-t-[12px]  h-[390px] w-[400px] object-cover'}
					width={400}
					height={390}
				/>
			)}

			<div className={'py-8 px-4 flex flex-col gap-4'}>
				<h3
					className={
						'text-28 font-bold leading-10 group-hover:text-primary-hover'
					}
				>
					{data.attributes.fullName}
				</h3>
				<p className={'text-[#505050] group-hover:text-primary-hover'}>
					{data.attributes.field}
				</p>
				<div className={'overflow-x-auto flex gap-2'}>
					{data.attributes.tags.map(tag => (
						<p
							className={
								'border-main border py-2 px-4 min-w-max text-[12px] rounded-[50px]'
							}
							key={tag.id}
						>
							{tag.label}
						</p>
					))}
				</div>
			</div>
		</Link>
	)
}

export default SpecialistItem
