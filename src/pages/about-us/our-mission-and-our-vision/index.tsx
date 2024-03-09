import Banner from '@/components/screens/about-us/our-mission-and-our-vision/Banner'
import MissionsAndVisions from '@/components/screens/about-us/our-mission-and-our-vision/MissionsAndVisions'
import Loader from '@/components/ui/shared/Loader'
import GET_OUR_MISSION_AND_OUR_VISION from '@/gql/queries/our-mission-and-our-vision'
import { OurMissionAndOurVisionResponse } from '@/interfaces/our-mission-and-our-vision.interface'
import { useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { FC } from 'react'

export interface OurMissionAndOurVisionPageProps {
	// data: OurMissionAndOurVisionResponse;
}

const OurMissionAndOurVisionPage: FC<OurMissionAndOurVisionPageProps> = () => {
	const { t } = useTranslation('common')
	const { data, loading } = useQuery<OurMissionAndOurVisionResponse>(
		GET_OUR_MISSION_AND_OUR_VISION,
		{
			variables: {
				locale: 'az',
			},
		}
	)
	if (loading) {
		return <Loader />
	}

	return (
		<>
			<Head>
				<title>Məqsəd və Dəyərlərimiz| İnsun Yaşam Mərkəzi</title>
				<meta
					name='description'
					content='Məqsədimiz cəmiyyətin daha da inkişaf etməsi üçün öz bacarıqlarını kəşf edəcək insanları aşkar edib, yeni bir mərhələyə qalxmalarına təkan vermək'
					key='desc'
				/>
			</Head>
			<main>
				<Banner />
				<MissionsAndVisions
					data={data!.ourMissionAndOurVision.data.attributes}
				/>
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()

// 	const { data } = await apolloClient.query({
// 		query: GET_OUR_MISSION_AND_OUR_VISION,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
export default OurMissionAndOurVisionPage
