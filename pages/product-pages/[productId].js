import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getItemById } from '../../database/productdb';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const divStyles = css`
  box-shadow: 0 4px 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: default;
  /* border-radius: 20px;
  box-shadow: inset 0 0 20px black;
  text-align: center;
  padding: 20px;
  & + & {
    margin-top: 25px;
  } */
`;
const hrStyles = css`
  border-top: 5px dotted black;
  border-bottom: 0px;
`;
const buttonStyles = css`
  border: none;
  outline: 0;
  padding: 12px;
  color: #dbd9d9;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  position: relative;
  background-color: black;
  font-size: 16px;
  color: white;
  padding: 0.8em 1.8em;
  user-select: none;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */

  :hover {
    transition-duration: 0.1s;
    background-color: #3a3a3a;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }

  :active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;

    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }

  :active {
    top: 1px;
  }
`;
const errorMessageStyles = css`
  text-align: center;
`;
const priceStyles = css`
  opacity: 0.7;
  font-size: 22px;
`;
const addButton = css`
  margin-right: 7px;
  margin-left: 7px;
  margin-bottom: 7px;
  background-color: grey;
  color: white;
  opacity: 1;
  border-radius: 50%;
  font-size: medium;
  :hover {
    background-color: grey;
    transition: 0.4s;
  }
  :active {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
`;

export default function Product(props) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState('cart');
  const productId = props.item.id;
  const price = props.item.price;
  useEffect(() => {
    const initialCart =
      getParsedCookie('cart')?.find(
        (cookieProductObject) => cookieProductObject.id === productId,
      )?.cart || 1;
    setCart(initialCart);
  }, [productId]);

  function addToCart() {
    const cookie = getParsedCookie('cart') || [];
    const product =
      cookie.find(({ id }) => id === productId) ??
      cookie[
        cookie.push({
          id: productId,
        }) - 1
      ];
    product.cart = product.cart ? product.cart + count : count;
    setStringifiedCookie('cart', cookie);
  }
  // console.log('count', cart);

  if (props.error) {
    return (
      <div css={errorMessageStyles}>
        <h1>Ooops. Something went wrong.</h1>
        <br />
        <h2>
          The product/page you're looking for does not exist,
          <br />
          Try the{' '}
          <Link href="/product-pages">
            <a>all products page.</a>
          </Link>
        </h2>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
  return (
    <div css={divStyles}>
      <Head>
        <title>Yarn Dreams</title>
        <meta
          name="description"
          content={`${props.item.name}${props.item.type}`}
        />
      </Head>
      <Image
        src={`/productimg/${
          props.item.id
        }-${props.item.name.toLowerCase()}.jpg`}
        width="420"
        height="420"
        alt=""
      />
      <h1>{props.item.name}</h1>

      <hr css={hrStyles} />
      <div>
        <h3>Color: {props.item.color}</h3>
      </div>
      <div>
        <h3>Type: {props.item.type}</h3>
      </div>
      <div>{props.item.description}</div>
      <div>
        <h3 css={priceStyles}>Price: {`${price} EUR`}</h3>
      </div>
      <div>
        <button
          onClick={() => setCount(count - 1)}
          css={addButton}
          disabled={count <= 1}
        >
          -1
        </button>

        {count}

        <button onClick={() => setCount(count + 1)} css={addButton}>
          +1
        </button>
      </div>
      <button css={buttonStyles} onClick={() => addToCart()}>
        Add to Cart
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Retrieving the product ID from the URL
  const productId = parseInt(context.query.productId);
  // const [item] = await sql`SELECT*FROM product WHERE id=${productId}`;
  // console.log(item.id);
  // console.log(item.type);
  // console.log('item', item);
  // Finding the product
  // const matchingProduct = productsDatabase.find((product) => {
  //   return product.id === productId;
  // });
  const foundItem = await getItemById(productId);
  if (typeof foundItem === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Page not found',
      },
    };
  }

  return {
    props: {
      item: foundItem,
    },
  };
}
