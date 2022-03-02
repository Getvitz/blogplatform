import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from './app.module.scss';
import 'antd/dist/antd.min.css';
import Layout from "../layout";
import Articlelist from "../article-list";
import Article from "../article";
import SignInForm from "../forms/sign-in/sign-in";
import SignUpForm from "../forms/sign-up";
import EditProfileForm from "../forms/edit-profile/edit-profile";
import { setSignedIn, setUserData } from "../../redux/actions/actions";
import { getUser } from "../../apiClient";
import { useAppDispatch, useAppSelector } from '../../typescript/hooks'
import ArticleForm from "../forms/article/article-form";
import { isSignedIn } from "../../redux/selectors/selectors";


const App: React.FC = () => {
  
  const dispatch = useAppDispatch();

  const isUserSignedIn = useAppSelector(isSignedIn);

  const content = isUserSignedIn ? <ArticleForm /> : <Navigate to='/articles' />;

  useEffect(() => {
    if (Cookies.get('token')) {
      getUser(Cookies.get('token'))
      .then((body) => {
        dispatch(setSignedIn())
        dispatch(setUserData(body.user));
  })}}, [dispatch]);

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
          <Route path="/new-article" element={content} />
          <Route path="/articles/:slug/edit" element={content}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
