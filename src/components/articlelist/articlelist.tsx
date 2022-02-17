import React, { useEffect, useCallback } from "react";
import {Pagination, Spin} from "antd"
import {v4 as uuid} from 'uuid';
import styles from './articlelist.module.scss';
import Articlepreview from "../articlepreview";
import { getAllArticles } from "../../apiClient";
import { getArticlesSuccess, dataLoading } from "../../redux/actions/actions";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import { RootState } from "../../redux";

const Articlelist: React.FC = () => {

  const dispatch = useAppDispatch();

  const getArticlesCount = (state: RootState) => state.articles.articlesCount;
  const getArticlesList = (state: RootState) => state.articles.articlesList;
  const getLoadingState = (state: RootState) => state.articles.loading;

  const articlesList = useAppSelector(getArticlesList);
  const articlesCount = useAppSelector(getArticlesCount);
  const loading = useAppSelector(getLoadingState);

  const getArticles = useCallback((limit, offset) => {
    dispatch(dataLoading());
    getAllArticles(limit, offset)
    .then((body) => dispatch(getArticlesSuccess(body)))}, [dispatch])

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
      hideOnSinglePage
      />
    </ul>
  );
}

export default Articlelist;