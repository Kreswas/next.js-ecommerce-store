import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  background-color: #ddd;
  border-radius: 6px;
  margin: 20px 10px;
  padding: 10px;

  > a + a {
    margin-left: 35px;
  }
`;

export default function Headers() {
  return (
    <header>
      <main>
        <Link href="/">
          <h1>Yarn Dreams</h1>
        </Link>
      </main>
      <nav css={navStyles}>
        <Link href="/">Home</Link>
        <Link href="/products">All Products</Link>
        <Link href="/products/wool">Wool</Link>
        <Link href="/products/acrylic">Acrylic</Link>
        <Link href="/products/cotton">Cotton</Link>
        <Link href="/products/mixed">Mixed</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
