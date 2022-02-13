import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from './app.module.scss';
import 'antd/dist/antd.min.css';
import Layout from "../layout";
import Articlelist from "../articlelist";
import Article from "../article";
import SignInForm from "../forms/signin/signin";
import SignUpForm from "../forms/signup";
import EditProfileForm from "../forms/editprofile/editprofile";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Articlelist />} />
          <Route path="articles" element={<Articlelist />} />
          <Route path='articles/:id' element={<Article />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/profile" element={<EditProfileForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
