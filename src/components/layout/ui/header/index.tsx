import { BurgerMenu, Cross, Logo } from '@/components/icons'
import Navigation from '@/components/layout/ui/header/navigation'
import ResponsiveNavbar from '@/components/layout/ui/responvise-navbar'
import { NavigationProps } from '@/interfaces/layout.interface'
import Link from 'next/link'
import { FC, useState } from 'react'

export interface HeaderProps {
	data: NavigationProps
	loading: boolean
}

const Header: FC<HeaderProps> = ({ data, loading }) => {
	const [isOpen, setOpen] = useState<boolean>(false)

	return (
		<>
			<div
				className={
					'sticky top-0 w-full bg-white border-b border-[#DADADA] z-[100]  '
				}
			>
				<div className={'box flex items-center justify-between  h-24 '}>
					<Link href={'/'} onClick={() => setOpen(false)}>
						<Logo />
					</Link>
					<div
						onClick={() => setOpen(prevState => !prevState)}
						className={
							'  flex min-[1050px]:hidden items-center justify-center rounded-[4px] trans h-8 w-8 hover:bg-gray-100 cursor-pointer'
						}
					>
						{isOpen ? <Cross /> : <BurgerMenu />}
					</div>

					{!loading && <Navigation data={data} />}
				</div>
			</div>
			{isOpen && !loading && (
				<ResponsiveNavbar data={data} close={() => setOpen(false)} />
			)}
		</>
	)
}

export default Header
