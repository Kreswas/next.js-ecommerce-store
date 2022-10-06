import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

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

  /* border-style: inset; */
  /* border: 2px solid black; */
  padding: 20px 50px;
  & + & {
    margin-top: 55px;
    /* margin-left: 10px; */
    /* margin-right: 10px; */
  }
`;
const linkStyles = css`
  a {
    color: black;
    text-decoration: none;
  }
`;
export default function Products(props) {
  console.log('props', props);
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Yarn products" />
      </Head>
      <h1 css={h2Styles}>All Products</h1>
      {props.products.map((product) => {
        return (
          <div key={`cotton-${product.id}`} css={spanStyles}>
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
            <div>
              {' '}
              Image Name: {product.id}-{product.name.toLowerCase()}.jpg
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
export function getServerSideProps() {
  return {
    props: {
      products,
    },
  };
}
