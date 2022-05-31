import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = `Muhammed/contigen`;
export const siteTitle = `Next.js sample website`;

export default function Layout({ children, home }) {
  return (
    <section>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="building a cool thing" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=lighr&md=0&fontSize=75px&images`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card:" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <div className="m-7">
            <Image
              priority
              src="/images/PngItem_975909.png"
              alt={name}
              height={144}
              width={144}
            />
            <h3 className="mx-0 text-3xl md:text-4xl">{name}</h3>
          </div>
        ) : (
          <div className="m-7">
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/PngItem_975909.png"
                  alt={name}
                  height={108}
                  width={108}
                />
              </a>
            </Link>
            <h3 className="mx-0 text-3xl  md:text-4xl">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h3>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <section>
          <Link href="/">
            <a className="m-7">Back to home</a>
          </Link>
        </section>
      )}
    </section>
  );
}
