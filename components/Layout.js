import { css } from '@emotion/react';
import Footer from './Footer';
import Headers from './Header';

const mainStyles = css`
  padding: 10px 20px;
`;

export default function Layout(props) {
  return (
    <>
      <Headers />
      <main css={mainStyles}>{props.children}</main>
      <Footer />
    </>
  );
}
