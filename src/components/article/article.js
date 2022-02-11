import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Spin } from "antd";
import remarkGfm from 'remark-gfm';
import styles from './article.module.scss';
import Articlepreview from "../articlepreview";
import {getOneArticle} from "../../apiClient"

function Article() {
  const dispatch = useDispatch();  
  const slug = useParams().id

  const getArticle = useCallback((slug) => {
    dispatch(getOneArticle(slug))
  }, [dispatch])

  useEffect(() => {
    getArticle(slug)
  }, [getArticle, slug])


  const article = useSelector(state => state.articles.article);
  const articleText = useSelector(state => state.articles.article.body);
  const loading = useSelector(state => state.articles.loading);

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