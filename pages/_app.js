import { css, Global } from '@emotion/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            background-image: url('/background.jpg');
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
              serif;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
