import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="m-7">
        <h2 className="text-4xl">{postData.title}</h2>
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <section
          dangerouslySetInnerHTML={{ __html: postData.htmlContent }}
          className="m-7 "
        />
      </article>
    </Layout>
  );
}
