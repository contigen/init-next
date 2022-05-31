import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>My First Post in Next.js</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`so called has been loaded`)}
      />

      <h3 className="text-3xl text-blue-600 md:text-4xl">first-post</h3>
      <time dateTime="2022-05-29" className="m-7 text-gray-400 lg:text-xl">
        May, 29, 2022
      </time>
      <article className="m-7">
        <span className="lg:text-xl">
          I&apos;m Muhammed from Nigeria - A web developer. I&apos;ve picked up
          few technologies along the way [I started tech in <b>2020</b>] and
          it&apos;s been very interesting. Long story short, this is my first
          Next.js App built by myself while following the docs learning page. I
          like to read the docs, as it enables me to better write quality codes
          - I so much love quality! <br /> This is an intro about me, there will
          be much in my resume, have fun y&apos;all.
        </span>
      </article>
    </Layout>
  );
};
export default FirstPost;
