import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss'
import Header from '../header';

function Layout() {
  return (
    <>
        <Header />
        <div className={styles.layout}>
            <Outlet />
        </div>
    </>
  )
};

export default Layout;
