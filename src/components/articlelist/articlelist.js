import React, { useCallback, useEffect } from "react";
import {Pagination, Spin} from "antd"
import {v4 as uuid} from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import styles from './articlelist.module.scss';
import Articlepreview from "../articlepreview";
import { getAllArticles } from "../../apiClient";

function Articlelist() {

  const dispatch = useDispatch();

  const getArticles = useCallback ((limit, offset) => {
    dispatch(getAllArticles(limit, offset))
  }, [dispatch])

  const articlesCount = useSelector(state => state.articles.articlesCount);
  const articlesList = useSelector(state => state.articles.articlesList);
  const loading = useSelector(state => state.articles.loading);

  useEffect(() => {
    getArticles(5, 0)
    }, [getArticles])

  const articlePreviews = !loading ? articlesList
      .map((article) => {
        return (<li key={uuid()} className={styles.preview}><Articlepreview {...article} /></li>)})
      .slice(0, 5) : null;

  const loader = loading ? <Spin tip="Loading..." size="large" />  : null;

  return (
    <ul className={styles.list}>
    {loader}
    {articlePreviews}
    <Pagination 
      className={styles.pagination} 
      defaultCurrent={1} 
      defaultPageSize={5} 
      onChange={(page) => getArticles(5, (page - 1) * 5)}
      total={articlesCount} 
      showSizeChanger={false} 
      hideOnSinglePage='true' />
    </ul>
  );
}

export default Articlelist;