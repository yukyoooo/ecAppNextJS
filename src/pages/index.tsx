import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../Home.module.css';

const H1 = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        ...
        <H1>welcome</H1>
      </main>
    </div>
  );
};

export default Home;
