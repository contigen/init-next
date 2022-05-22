import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
const FirstPost = () => {
  return (
    <Layout home>
      <Head>
        <title>My First Post in Next.js</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`so called has been loaded`)}
      />

      <h2 className="text-4xl md:text-5xl">first-post</h2>
      <h4 className="text-2xl md:text-3xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </Layout>
  );
};
export default FirstPost;
