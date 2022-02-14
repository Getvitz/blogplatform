import { dataLoading, getArticlesSuccess, getOneArticleSuccess, receiveError } from '../store/actions';

const apiBase = 'https://kata.academy:8021/api/';

export const getOneArticle = (slug) => (dispatch) => {
  dispatch(dataLoading());
  fetch(`${apiBase}articles/${slug}`)
    .then((res) => res.json())
    .then((body) => dispatch(getOneArticleSuccess(body.article)))
    .catch(() => dispatch(receiveError()));
};

export const getAllArticles = (limit, offset) => (dispatch) => {
  dispatch(dataLoading());
  fetch(`${apiBase}articles?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .then((body) => dispatch(getArticlesSuccess(body)))
    .catch(() => dispatch(receiveError()));
};

export const registerUser = async (data) => {
  const res = await fetch(`${apiBase}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
  return res;
};

export const signInUser = async (data) => {
  const res = await fetch(`${apiBase}users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
  return res;
};

export const updateUser = async (data, token) => {
  const res = await fetch(`${apiBase}user`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
  return res;
};
