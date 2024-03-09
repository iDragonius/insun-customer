import About from '@/components/screens/about-us/info/About'
import Banner from '@/components/screens/about-us/info/Banner'
import Loader from '@/components/ui/shared/Loader'
import GET_ABOUT_INFO from '@/gql/queries/about-info'
import { AboutInfoResponse } from '@/interfaces/about-info.interface'
import { useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { FC } from 'react'

export interface AboutUsInfoPageProps {
	// data: AboutInfoResponse;
}

const AboutUsInfoPage: FC<AboutUsInfoPageProps> = () => {
	const { t } = useTranslation('common')
	const { data, loading } = useQuery<AboutInfoResponse>(GET_ABOUT_INFO, {
		variables: {
			locale: 'az',
		},
	})
	if (loading) {
		return <Loader />
	}

	return (
		<>
			<Head>
				<title>Haqqımızda| İnsun Yaşam Mərkəzi</title>
				<meta
					name='description'
					content='Şəxsi inkişafınızla bağlı əldə edəcəyiniz bütün xidmətləri bir mərkəzdə birləşdirdik'
					key='desc'
				/>
			</Head>
			<main>
				<Banner
					data={{
						title: data!.aboutInfo.data?.attributes.mainTitle,
						description: data!.aboutInfo.data?.attributes.mainDescription,
					}}
				/>
				<About data={data!.aboutInfo.data?.attributes.subInfos} />
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()

// 	const { data } = await apolloClient.query({
// 		query: GET_ABOUT_INFO,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
export default AboutUsInfoPage
