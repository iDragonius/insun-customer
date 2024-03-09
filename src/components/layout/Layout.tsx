import { Insun } from '@/components/font'
import Footer from '@/components/layout/ui/footer'
import Header from '@/components/layout/ui/header'
import GET_LAYOUT from '@/gql/queries/layout'
import {
	LayoutResponse,
	NavigationProps,
	SocialLinkProps,
} from '@/interfaces/layout.interface'
import { imageLoader } from '@/utils/loader'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	// const { locale, isReady } = useRouter();
	const { data, loading } = useQuery<LayoutResponse>(GET_LAYOUT, {
		variables: {
			locale: 'az',
		},
	})

	return (
		<div className={Insun.className}>
			<div className={'min-h-[calc(100vh-100px)]'}>
				<Header data={data?.navigation as NavigationProps} loading={loading} />
				{children}
				<div
					className={'flex items-center gap-2 fixed right-5 bottom-5 z-[500] '}
				>
					{data?.socialLink.data.attributes.links.map(social => (
						<Link
							key={social.id}
							href={social.link}
							className={
								'sm:h-11 sm:w-11 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-2xl cursor-pointer'
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
			</div>
			<Footer data={data?.socialLink as SocialLinkProps} />
		</div>
	)
}

export default Layout
