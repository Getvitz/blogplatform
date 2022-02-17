import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Spin } from "antd";
import remarkGfm from 'remark-gfm';
import styles from './article.module.scss';
import Articlepreview from "../articlepreview";
import {getOneArticle} from "../../apiClient"
import { getOneArticleSuccess, dataLoading } from "../../redux/actions/actions";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import { RootState } from "../../redux";


const Article: React.FC = () => {
  const dispatch = useAppDispatch();  
  const slug = useParams().id

  useEffect(() => {
    dispatch(dataLoading());
    getOneArticle(slug)
    .then((body) => dispatch(getOneArticleSuccess(body.article)))
  }, [slug, dispatch])

  const getArticle = (state: RootState) => state.articles.article;
  const getArticleText = (state: RootState) => state.articles.article.body;
  const getLoading = (state: RootState) => state.articles.loading;
  
  const article = useAppSelector(getArticle);
  const articleText = useAppSelector(getArticleText);
  const loading = useAppSelector(getLoading);

  const loader = loading ? <Spin tip="Loading..." className={styles.loader} size="large" />  : null;

  return (
    <>
    {loader}
    {!loading ? <div className={styles.article}>
        <Articlepreview {...article} />
        <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.text}>{articleText}</ReactMarkdown>
    </div> : null}
    </>
  );
}

export default Article;