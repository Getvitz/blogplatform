
import { dataLoading, getArticlesSuccess, getOneArticleSuccess, receiveError } from "../store/actions";

const apiBase = 'https://kata.academy:8021/api/';

export const getOneArticle = (slug) => (dispatch) => {
    dispatch(dataLoading());
    fetch(`${apiBase}articles/${slug}`)
    .then((res) => res.json())
    .then((body) => dispatch(getOneArticleSuccess(body.article)))
    .catch(() => dispatch(receiveError()))};


export const getAllArticles = (limit, offset) => ((dispatch) => {
    dispatch(dataLoading())
    fetch(`${apiBase}articles?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .then((body) => dispatch(getArticlesSuccess(body)))
    .catch(() => dispatch(receiveError()))});