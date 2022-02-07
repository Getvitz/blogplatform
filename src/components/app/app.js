import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from './app.module.scss';
import Layout from "../layout";
import Articlelist from "../articlelist";
import Article from "../article";

function App() {
  console.log("Kuku")
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Articlelist />} />
          <Route path='articles/1' element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
