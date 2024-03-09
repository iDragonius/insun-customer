import { CaretDownIcon } from '@/components/icons'
import { useOnHoverOutside } from '@/hooks/useOnHoverOutside'
import clsx from 'clsx'
import { getCookie, hasCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
export interface LanguagesProps {}

const Languages: FC<LanguagesProps> = () => {
	const { locale, locales, push, basePath, query, asPath, pathname } =
		useRouter()
	const [isShown, setShown] = useState<boolean>(false)
	const toggle = () => setShown(prevState => !prevState)
	const dropdownRef = useRef<null | HTMLDivElement>(null)
	useOnHoverOutside(dropdownRef, () => setShown(false))

	const languages = [
		{ label: 'En', value: '/auto/en' },
		{ label: `Ru`, value: '/auto/ru' },
		{ label: 'Az', value: '/auto/az' },
	]
	const [selected, setSelected] = useState<string | null>(null)
	useEffect(() => {
		var addScript = document.createElement('script')
		addScript.setAttribute(
			'src',
			'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
		)
		document.body.appendChild(addScript)
		if (hasCookie('googtrans')) {
			setSelected(getCookie('googtrans') as string)
		} else {
			setSelected('/auto/en')
		}
		//@ts-ignore
		window.googleTranslateElementInit = googleTranslateElementInit
	}, [])

	const googleTranslateElementInit = () => {
		//@ts-ignore
		new window.google.translate.TranslateElement(
			{
				pageLanguage: 'auto',
				autoDisplay: false,
				includedLanguages: 'ru,en,az', // If you remove it, by default all google supported language will be included
				//@ts-ignore
				layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
			},
			'google_translate_element'
		)
	}
	const langChange = (e: string) => {
		if (hasCookie('googtrans')) {
			setCookie('googtrans', decodeURI(e))
			setSelected(e)
		} else {
			setCookie('googtrans', e)
			setSelected(e)
		}
		window.location.reload()
	}
	return (
		<div
			className={'relative'}
			onMouseOver={() => setShown(true)}
			ref={dropdownRef}
		>
			<div
				className={clsx(
					'flex gap-3 text-navText font-medium items-center py-3 px-2 trans hover:bg-gray-100 hover:rounded-[5px] cursor-pointer  ',
					isShown && 'bg-gray-100'
				)}
				translate={'no'}
				onClick={toggle}
			>
				{languages.find(el => el.value === selected)?.label}
				<CaretDownIcon
					className={clsx(isShown ? 'rotate-180' : '', 'fill-navText')}
				/>
			</div>
			{isShown && (
				<div className={'absolute bg-white w-full border '}>
					{languages?.map(lc => (
						<div
							translate={'no'}
							className={clsx(
								lc.value === selected
									? 'bg-primary text-white'
									: 'hover:text-primary',
								'py-1 px-2 trans  cursor-pointer'
							)}
							key={lc.value}
							onClick={() => {
								langChange(lc.value)
							}}
						>
							{lc.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Languages
