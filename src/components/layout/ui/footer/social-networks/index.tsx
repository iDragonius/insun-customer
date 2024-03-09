import { SocialLinkProps } from '@/interfaces/layout.interface'
import { imageLoader } from '@/utils/loader'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface SocialNetworksProps {
	data: SocialLinkProps
}

const SocialNetworks: FC<SocialNetworksProps> = ({ data }) => {
	return (
		<div className={'flex items-center gap-8'}>
			{data?.data.attributes.links.map(social => (
				<Link
					key={social.id}
					href={social.link}
					className={
						'sm:h-11 sm:w-11 w-8 h-8 bg-white flex items-center justify-center rounded-full'
					}
				>
					<Image
						loader={imageLoader}
						src={social.logo.data.attributes.url}
						alt={social.logo.data.attributes.name}
						width={social.logo.data.attributes.width}
						height={social.logo.data.attributes.height}
					/>
				</Link>
			))}
		</div>
	)
}

export default SocialNetworks
