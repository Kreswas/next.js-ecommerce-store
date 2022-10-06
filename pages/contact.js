import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const contactStyles = css`
  text-align: center;
  font-family: 'Courier New', monospace;
`;
const liStyles = css`
  display: block;
  text-decoration: none;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Contact page" />
      </Head>
      <h2 css={contactStyles}>Contact Information:</h2>
      <li css={liStyles}>
        E-Mail:_
        <Link href="mailto:melihuraz@hotmail.com" target="_blank">
          <a>melihuraz@hotmail</a>
        </Link>
      </li>
      <br />
      <li css={liStyles}>Phone: +43 660 672 9626</li>
      <br />
      <Link href="https://github.com/Kreswas" target="_blank">
        <a>GitHub</a>
      </Link>
      <br />
      <br />
      <Link href="https://twitter.com/Kreswas" target="_blank">
        <a>Twitter</a>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
