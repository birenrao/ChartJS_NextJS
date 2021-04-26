import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header>
      <h1>Welcome to Data Visualisation</h1>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer>
      <p>This is intellisense.io</p>
    </footer>
  </div>
);

export default Layout;
