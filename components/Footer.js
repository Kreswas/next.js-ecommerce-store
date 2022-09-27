import { css } from '@emotion/react';

const footerStyles = css`
  margin-top: 20px;
  border-top: 2px solid #ddd;
  padding: 15px 20px;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>© Yarn Dreams 2022. All Rights Reserved.</footer>
  );
}
