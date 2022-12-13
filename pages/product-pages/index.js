import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sql } from '../../database/database';

const h2Styles = css`
  text-align: center;
`;
const imageStyles = css`
  border-radius: 20%;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
const spanStyles = css`
  border-radius: 20px;
  box-shadow: inset 0 0 20px black;
  display: inline-block;
  text-align: center;
  position: relative;
  padding: 20px 50px;
  & + & {
    margin-top: 55px;
  }
`;
const linkStyles = css`
  a {
    color: black;
    text-decoration: none;
  }
`;
export default function Products(props) {
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Yarn products" />
      </Head>
      <h1 css={h2Styles}>All Products</h1>
      {props.products.map((product) => {
        return (
          <div key={`yarn-${product.id}`} css={spanStyles}>
            <h2 css={linkStyles}>
              {' '}
              <Link href={`/product-pages/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </h2>
            <Link href={`/product-pages/${product.id}`}>
              <a>
                <Image
                  src={`/productimg/${
                    product.id
                  }-${product.name.toLowerCase()}.jpg`}
                  width="260"
                  height="260"
                  alt=""
                  css={imageStyles}
                />
              </a>
            </Link>
            <div>
              <h4>Color: {product.color}</h4>
            </div>
            <div>
              <h4>Type: {product.type}</h4>
            </div>
            <div>
              <h3>Price: {`${product.price} EUR`}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

// anything inside this function will only be run on the server (in Node.js)
//
// this means you can access things like fs
export async function getServerSideProps() {
  const products = await sql`SELECT * FROM product`;
  // console.log('products', products);
  // const parsedCookies = context.req.cookies.amount
  //   ? JSON.parse(context.req.cookies.amount)
  //   : [];
  // const products = productsDatabase.map((product) => {
  //   return {
  //     ...product,
  //     amount:
  //       parsedCookies.find(
  //         (cookieProductObject) => product.id === cookieProductObject.id,
  //       )?.amount || 0,
  //   };
  // });
  return {
    props: {
      products,
    },
  };
}
