import Banner from '@/components/screens/specialists/Banner'
import SpecialistsContainer from '@/components/screens/specialists/SpecialistsContainer'
import Loader from '@/components/ui/shared/Loader'
import GET_SPECIALISTS from '@/gql/queries/specialists'
import { SpecialistsResponse } from '@/interfaces/specialists.interface'
import { useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { FC } from 'react'

export interface SpecialistsPageProps {
	// data: SpecialistsResponse;
}

const SpecialistsPage: FC<SpecialistsPageProps> = () => {
	const { t } = useTranslation('common')
	const { data, loading } = useQuery<SpecialistsResponse>(GET_SPECIALISTS, {
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
				<title>
					Doğru inkişafınız üçün cəlb etdiyimiz mütəxəsislərlə tanış olun |
					İnsun Yaşam Mərkəzi
				</title>
				<meta
					name='description'
					content='Faliyyəti tənzimlənməyən deyil, işini bilən mütəxəssislərdən dəstək alın'
					key='desc'
				/>
			</Head>
			<main>
				<Banner />
				<SpecialistsContainer data={data!.specialists.data} />
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()

// 	const { data } = await apolloClient.query({
// 		query: GET_SPECIALISTS,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
export default SpecialistsPage
