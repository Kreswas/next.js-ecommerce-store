import Head from 'next/head';
import Link from 'next/link';

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Mixed yarn products" />
        <Link rel="icon" href="/yarn-dreams.ico" />
      </Head>
      Mixed yarn
    </>
  );
}
