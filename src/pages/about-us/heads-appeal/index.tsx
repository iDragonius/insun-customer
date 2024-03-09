import Appeal from '@/components/screens/heads-appeal/Appeal'
import Hero from '@/components/screens/heads-appeal/Hero'
import ApplicationForm from '@/components/ui/shared/ApplicationForm'
import Loader from '@/components/ui/shared/Loader'
import GET_HEADS_APPEAL from '@/gql/queries/heads-appeal'
import { HeadsAppealResponse } from '@/interfaces/heads-appeal.interface'
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { FC } from 'react'

export interface HeadsAppealPageProps {
	// data: HeadsAppealResponse;
}

const HeadsAppealPage: FC<HeadsAppealPageProps> = () => {
	const { data, loading } = useQuery<HeadsAppealResponse>(GET_HEADS_APPEAL, {
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
				<title>Rəhbərin Müraciəti| İnsun Yaşam Mərkəzi</title>
				<meta
					name='description'
					content='İnsun Yaşam Mərkəzi olaraq Azərbaycanda şəxsi inkişafına yatırım etmək istəyən insanlar üçün xidmətlər təklif edirik.'
					key='desc'
				/>
			</Head>
			<main>
				<Hero
					data={{
						image: data!.headsAppeal.data.attributes.image,
						fullName: data!.headsAppeal.data.attributes.fullName,
						position: data!.headsAppeal.data.attributes.position,
					}}
				/>
				<Appeal
					data={{
						title: data!.headsAppeal.data.attributes.contentTitle,
						content: data!.headsAppeal.data.attributes.content,
					}}
				/>
				<ApplicationForm type={'contact'} />
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()

// 	const { data } = await apolloClient.query({
// 		query: GET_HEADS_APPEAL,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
export default HeadsAppealPage
