import Banner from '@/components/screens/home/Banner'
import Hero from '@/components/screens/home/Hero'
import Services from '@/components/screens/home/services'
import Specialists from '@/components/screens/home/specialists'
import Partners from "@/components/screens/home/partners";

import News from '@/components/screens/home/news'
import Loader from '@/components/ui/shared/Loader'
import GET_HOME_PAGE from '@/gql/queries/home'
import { HomeResponse } from '@/interfaces/home.interface'
import { useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	const { t } = useTranslation('common')
	const { data, loading } = useQuery<HomeResponse>(GET_HOME_PAGE, {
		variables: {
			locale: 'az',
		},
	})
	if (loading) {
		return <Loader />
	}
	console.log(data)
	return (
		<>
			<Head>
				<title>
					Azərbaycanda özünü inkişaf xidmətlərini özündə birləşdirən | İnsun
					Yaşam Mərkəzi
				</title>
				<meta
					name='description'
					content='Azərbaycanda özündə psixologiya, kouçinq, yoqa, dietologiya, access bars, theta healinq və qrup terapiyalarını xidmətləri'
					key='desc'
				/>
			</Head>
			<main>
				<Hero />
				<Services data={data!.homeService.data.attributes.services} />
				<Specialists data={data!.specialists.data} />
				<Banner />
				<div className={'bg-[#FEFEF7] pt-[72px]  pb-10'}>
					<div className={'box'}>
						<div className={'flex justify-between items-center pb-11'}>
							<h3
								className={
									'text-[#424242] font-bold text-32 min-[800px]:text-[44px]'
								}
							>
								Insun Xəbər Mərkəzi
							</h3>
							<Link
								href={'/news'}
								className={
									'text-[#F32735] text-20 w-[250px]  h-max font-bold flex items-center justify-center py-3 border border-[#DADADA] rounded-[8px] trans hover:bg-[#F32735] hover:text-[#FEFEF7] '
								}
							>
								Hamısı
							</Link>
						</div>
						<News data={data!.newsP.data} />
					</div>
				</div>
				<Partners data={data!.partners.data} />
			</main>
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale } = context
// 	const apolloClient = initializeApollo()
// 	const { data } = await apolloClient.query({
// 		query: GET_HOME_PAGE,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
