import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

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
  /* border: 4px solid black; */
  padding: 20px;
  & + & {
    margin-top: 25px;
  }
`;
const hrStyles = css`
  border-top: 5px dotted black;
  border-bottom: 0px;
`;
const buttonDivStyles = css`
  display: flex;
  justify-content: right;
  margin-right: 100px;
  margin-bottom: 50px;
`;
const buttonStyles = css`
  padding: 13px 70px;
  font-size: 15px;
`;

export default function Product(props) {
  if (props.error) {
    return (
      <div>
        <h2>
          The product you're looking for does not exist,
          <br />
          Try the{' '}
          <Link href="/product-pages">
            <a>all products page.</a>
          </Link>
        </h2>
      </div>
    );
  }
  return (
    <div css={spanStyles}>
      <Head>
        <title>Yarn Dreams</title>
        <meta
          name="description"
          content={`${props.product.name}${props.product.type}`}
        />
      </Head>
      <h1>{props.product.name}</h1>
      <Image
        src={`/productimg/${
          props.product.id
        }-${props.product.name.toLowerCase()}.jpg`}
        width="420"
        height="420"
        alt=""
        css={imageStyles}
      />
      <div css={buttonDivStyles}>
        <button css={buttonStyles}>Add</button>
      </div>
      <hr css={hrStyles} />
      <div>
        <h2>Color: {props.product.color}</h2>
      </div>
      <div>
        <h2>Type: {props.product.type}</h2>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  // Retrieving the product ID from the URL
  const productId = parseInt(context.query.productId);
  // Finding the product
  const matchingProduct = products.find((product) => {
    return product.id === productId;
  });

  if (typeof matchingProduct === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  return {
    props: {
      product: matchingProduct,
    },
  };
}
