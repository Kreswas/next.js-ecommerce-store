import Head from 'next/head';
import Link from 'next/link';

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Acrylic yarn products" />
        <Link rel="icon" href="/yarn-dreams.ico" />
      </Head>
      Acrylic Yarn
    </>
  );
}
