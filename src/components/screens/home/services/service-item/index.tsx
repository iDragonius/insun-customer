import { ServiceItemProps } from '@/interfaces/home.interface'
import { imageLoader } from '@/utils/loader'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface ServiceItemComponentProps {
	data: ServiceItemProps
}

const ServiceItem: FC<ServiceItemComponentProps> = ({ data }) => {
	return (
		<Link
			href={'/our-services'}
			className={clsx(
				'flex  flex-col  border-b min-[1300px]:border-b-white    min-[1300px]:border-l-0 w-full border-r border-r-[#DADADA] text-bodyText gap-3 pt-4 pb-3 px-16  trans cursor-pointer h-[288px]',
				`hover:border-b-4 w-[360px] hover:border-b-[${data.color}] hover:border-b-4`
			)}
		>
			<Image
				loader={imageLoader}
				src={data.icon.data.attributes.url}
				alt={data.icon.data.attributes.name}
				width={data.icon.data.attributes.width}
				height={data.icon.data.attributes.height}
			/>
			<h3 className={'font-bold text-24 text-bodyText'}>{data.title}</h3>
			<p className={'line-clamp-4 leading-7 text-bodyText'}>
				{data.description}
			</p>
		</Link>
	)
}

export default ServiceItem
