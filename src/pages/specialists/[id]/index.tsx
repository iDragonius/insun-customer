import Hero from "@/components/screens/specialist-view/Hero";
import Info from "@/components/screens/specialist-view/Info";
import ApplicationForm from "@/components/ui/shared/ApplicationForm";
import Loader from "@/components/ui/shared/Loader";
import { Config } from "@/constants/config";
import GET_SPECIALIST from "@/gql/queries/specialist";
import { SpecialistResponse } from "@/interfaces/specialists.interface";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

export interface SpecialistPageProps {
  // data: SpecialistResponse;
}

const SpecialistPage: FC<SpecialistPageProps> = () => {
  const formRef = useRef<null | HTMLDivElement>(null);
  const { query, locale } = useRouter();
  const { data, loading } = useQuery<SpecialistResponse>(GET_SPECIALIST, {
    variables: {
      locale: Config.multiLanguage ? locale : "az",
      id: query.id,
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{data?.specialist.data.attributes.fullName}</title>
      </Head>
      <main>
        <Hero
          formRef={formRef}
          data={{
            field: data!.specialist.data.attributes.field,
            slogan: data!.specialist.data.attributes.slogan,
            fullName: data!.specialist.data.attributes.fullName,
            image: data!.specialist.data.attributes.image,
          }}
        />
        <Info
          data={{
            activityDirections:
              data!.specialist.data.attributes.activityDirections,

            education: data!.specialist.data.attributes.education,
          }}
        />
        <ApplicationForm
          formRef={formRef}
          specialist={data!.specialist.data.attributes.fullName}
          type={"specialist"}
        />
      </main>
    </>
  );
};
// export const getServerSideProps: GetServerSideProps = async context => {
// 	const { locale, query } = context
// 	const apolloClient = initializeApollo()

// 	const { data } = await apolloClient.query({
// 		query: GET_SPECIALIST,
// 		variables: {
// 			locale: Config.multiLanguage ? locale : 'az',
// 			id: query.id,
// 		},
// 	})

// 	return {
// 		props: { data },
// 	}
// }
export default SpecialistPage;
