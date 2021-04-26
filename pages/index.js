import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';

export default function Home({ dataViz }) {
  return (
    <div>
      <Head>
        <title>Intelisense Data Visualisation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main dataProps={dataViz} />
    </div>
  );
}

// after the yarn build it will fetch data in the build phase and do server side render
export const getStaticProps = async () => {
  const res = await fetch('https://reference.intellisense.io/thickenernn/v1/referencia');
  const dataViz = await res.json();
  return { props: { dataViz } };
};
