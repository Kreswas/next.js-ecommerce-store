import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  border-top: 5px solid #ffab15;
  background-color: bisque;
`;

const copyright = css`
  margin-top: 15px;
  margin-bottom: 0;
  border-top: 1px solid #ddd;
  padding: 15px 20px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
`;

const divStyles = css`
  float: right;
  margin-top: 10px;
  margin-right: 25px;
`;

const ulStyles = css`
  display: inline-block;
  width: auto;
  margin-top: 0;
  margin-bottom: 0;
`;

const liStyles = css`
  display: block;
  text-decoration: none;
  width: auto;
  margin-right: 70px;
  opacity: 0.4;

  a {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    opacity: 1;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={divStyles}>
        <h3>Who We Are</h3>
        <ul className="bottom nav flex-column" css={ulStyles}>
          <li css={liStyles}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Affiliates</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Jobs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div css={divStyles}>
        <h3>Your Purchase</h3>
        <ul className="bottom nav flex-column" css={ulStyles}>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Delivery</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Refund & return</a>
            </Link>
          </li>
          <li css={liStyles}>
            <Link href="/empty">
              <a>Help & FAQs</a>
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Contact Me: &nbsp;
      {/* <li css={liStyles}> */}
      {/* Contact Me: &nbsp; */}
      <Link href="mailto:melihuraz@hotmail.com" target="_blank">
        <a>E-Mail</a>
      </Link>
      {/* </li> */}
      <div css={copyright}>© Yarn Dreams 2022. All Rights Reserved.</div>
    </footer>
  );
}
