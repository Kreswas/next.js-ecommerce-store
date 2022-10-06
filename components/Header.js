import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  background-color: #41b3a3;
  margin: 20px 10px;
  margin-top: 40px;
  padding: 20px;
  border-width: 5px;
  opacity: 0.8;
  box-shadow: 0 0 10px 5px #000;
  a {
    text-decoration: none;
    color: #000;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-size: larger;
  }
  a:hover {
    opacity: 0.6;
  }

  > a + a {
    margin-left: 35px;
  }
`;
const cartStyle = css`
  float: right;
  display: block;
`;
const sharedTitleStyles = css`
  margin-left: 10px;
  font-family: 'Brush Script MT', cursive;
`;
const cursorStyles = css`
  cursor: default;
`;

const accountStyles = css`
  float: right;
  margin-top: 0;
  margin-right: 20px;
  padding: 0.6em 2em;
  background-color: #3dd1e7;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  line-height: 1rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 50%;
  max-width: 260px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :focus {
    outline: 0;
  }
  ::after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }
  :hover:after {
    bottom: 2px;
    left: 2px;
    /* transition: 0.3s; */
  }
  @media (min-width: 768px) {
    .button-53 {
      padding: 0.75rem 3rem;
      font-size: 1.25rem;
    }
  }
`;
const svgStyles = css`
  height: 20px;
  width: 20px;
`;
const hrStyles = css`
  border-top: 3px dotted black;
  border-bottom: 0px;
`;

export default function Headers() {
  return (
    <header>
      <main>
        <div css={cursorStyles}>
          <Link href="/empty">
            <a>
              <button css={accountStyles}>
                <img src="/user.svg" alt="use icon" css={svgStyles} />
                Account
              </button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1 css={sharedTitleStyles}>-Yarn Dreams-</h1>
            </a>
          </Link>
        </div>
      </main>
      <nav css={navStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/product-pages">
          <a>All Products</a>
        </Link>
        <Link href="/empty">
          <a>Wool</a>
        </Link>
        <Link href="/empty">
          <a>Acrylic</a>
        </Link>
        <Link href="/empty">
          <a>Cotton</a>
        </Link>
        <Link href="/empty">
          <a>Mixed</a>
        </Link>
        <Link href="/empty">
          <a>Tools</a>
        </Link>
        <li css={cartStyle}>
          <Link className="active" href="/cart">
            <a>Cart</a>
          </Link>
        </li>
      </nav>
      <hr css={hrStyles} />
    </header>
  );
}
