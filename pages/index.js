import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const imageStyles = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  /* display: flex;
  justify-content: center; */
  /* margin-left: 200px;
  margin-right: 200px; */
`;

const spanStyles = css`
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const divStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const texStyles = css`
  display: flex;
  justify-content: space-between;
  margin-left: 75px;
  margin-right: 70px;
`;
const cursorStyles = css`
  cursor: pointer;
`;
const bottomDivStyles = css`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Yarn Dreams</title>
        <meta name="description" content="Home page" />
      </Head>
      <br />
      <br />
      <Link href="empty">
        <a>
          <div className="adImage" css={imageStyles}>
            <Image
              src="/ad.jpg"
              width="960"
              height="300"
              alt="advertisement"
              href="/empty"
            />
          </div>
        </a>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <div css={divStyles}>
        <Link href="/empty">
          <a>
            <Image
              css={spanStyles}
              src="/homeimg/woolhp.jpg"
              width="200"
              height="200"
              alt="wool page link"
            />
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <Image
              css={spanStyles}
              src="/homeimg/acrylichp.jpg"
              width="200"
              height="200"
              alt="acrylic page link"
            />
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <Image
              css={spanStyles}
              src="/homeimg/cottonhp.jpg"
              width="200"
              height="200"
              alt="cotton page link"
            />
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <Image
              css={spanStyles}
              src="/homeimg/mixedhp.jpg"
              width="200"
              height="200"
              alt="mixed yarn page link"
            />
          </a>
        </Link>
      </div>
      <div css={texStyles}>
        <Link href="/empty">
          <a>
            <h3 css={cursorStyles}>Wool</h3>
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <h3 css={cursorStyles}>Acrylic</h3>
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <h3 css={cursorStyles}>Cotton</h3>
          </a>
        </Link>
        <Link href="/empty">
          <a>
            <h3 css={cursorStyles}>Mixed</h3>
          </a>
        </Link>
      </div>
      <br />
      <br />
      <div css={bottomDivStyles}>
        <Link href="empty">
          <a>
            <Image
              css={spanStyles}
              src="/homeimg/tools.jpg"
              width="200"
              height="200"
              alt="tools page link"
            />
          </a>
        </Link>
      </div>
      <div css={bottomDivStyles}>
        <Link href="/product-pages/tools">
          <a>
            <h3 css={cursorStyles}>Tools</h3>
          </a>
        </Link>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
