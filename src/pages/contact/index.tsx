import Banner from '@/components/screens/contact/Banner'
import Info from '@/components/screens/contact/info'
import ApplicationForm from '@/components/ui/shared/ApplicationForm'
import Loader from '@/components/ui/shared/Loader'
import GET_CONTACT_PAGE from '@/gql/queries/contact'
import { ContactResponse } from '@/interfaces/contact.interface'
import { useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React, { FC, useRef } from 'react'

export interface ContactPageProps {
	// data: ContactResponse;
}

const ContactPage: FC<ContactPageProps> = () => {
	const ref = useRef<null | HTMLDivElement>()
	const { t } = useTranslation('common')
	const { data, loading } = useQuery<ContactResponse>(GET_CONTACT_PAGE, {
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
				<title>Əlaqə | İnsun Yaşam Mərkəzi</title>
				<meta
					name='description'
					content='Psixologiya, kouçinq, yoqa, dietologiya, access bars, theta healinq və qrup terapiyaları ilə bağlı əlaqə saxlayın'
					key='desc'
				/>
			</Head>
			<main>
				<Banner />
				<Info data={data as ContactResponse} />
				<ApplicationForm
					type={'contact'}
					formRef={ref as React.MutableRefObject<HTMLDivElement | null>}
				/>
			</main>
		</>
	)
}
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const apolloClient = initializeApollo()
// 	const { data } = await apolloClient.query({
// 		query: GET_CONTACT_PAGE,
// 	})

// 	return {
// 		props: { data },
// 	}
// }

export default ContactPage
