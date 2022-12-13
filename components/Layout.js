import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Headers from './Header';

const mainStyles = css`
  padding: 10px 20px;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers cart={props.cart} setCart={props.setCart} />
      <main css={mainStyles}>{props.children}</main>
      {/* {console.log('children', props.children.props.item.color)} */}
      <Footer />
    </>
  );
}
