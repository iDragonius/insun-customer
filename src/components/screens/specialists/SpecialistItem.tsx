import { SpecialistItemProps } from '@/interfaces/home.interface'
import { imageLoader } from '@/utils/loader'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
export interface SpecialistComponentItemProps {
	data: SpecialistItemProps
}

const SpecialistItem: FC<SpecialistComponentItemProps> = ({ data }) => {
	return (
		<Link
			href={`/specialists/${data.id}`}
			className={
				'mb:max-w-[400px] border border-main w-full group bg-white rounded-[12px] trans hover:border-primary-hover hover:border-2'
			}
		>
			{data.attributes.image.data && (
				<Image
					loader={imageLoader}
					src={data.attributes.image.data.attributes.url}
					alt={'specialist'}
					className={
						'rounded-t-[12px] mb:w-[400px] h-[400px]  w-full object-cover'
					}
					width={400}
					height={400}
				/>
			)}

			<div
				className={'py-8 px-4 flex flex-col gap-4 justify-between h-[150px]'}
			>
				<div>
					<h3
						className={
							'text-28 font-bold leading-10 group-hover:text-primary-hover break-words '
						}
					>
						{data.attributes.fullName}
					</h3>
					<p className={'text-[#505050] group-hover:text-primary-hover mt-3'}>
						{data.attributes.field}
					</p>
				</div>

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
