import { ArticleType, SetUserDataPayloadType } from "../typescript/types/types";

const apiBase = 'https://kata.academy:8021/api/';

export const getOneArticle = async (slug: string, token: string) => {
  const res = await fetch(`${apiBase}articles/${slug}`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
  }).then((res) => res.json())
    return res
};

export const getAllArticles = async (limit: number, offset: number, token: string) => {
  const res = fetch(`${apiBase}articles?limit=${limit}&offset=${offset}`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
  }).then((res) => res.json())
  return res
};

export const registerUser = async (data: Pick<SetUserDataPayloadType, 'email'> & {password: string}) => {
  const res = await fetch(`${apiBase}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
  return res;
};

export const signInUser = async (data: Pick<SetUserDataPayloadType, 'email'> & {password: string}) => {
  const res = await fetch(`${apiBase}users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
  return res;
};

export const getUser = async (token: string) => {
  const res = await fetch(`${apiBase}user`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
  }).then((res) => res.json());
  return res;
};

export const updateUser = async (data: SetUserDataPayloadType, token: string) => {
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

export const createArticle = async (data: ArticleType, token: string) => {
  const res = await fetch(`${apiBase}articles`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ article: data }),
  }).then((res) => res.json());
  return res;
};

export const updateArticle = async (data: ArticleType, slug: string, token: string) => {
  const res = await fetch(`${apiBase}articles/${slug}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ article: data }),
  }).then((res) => res.json());
  return res;
};

export const deleteArticle = async (slug: string, token: string) => {
  await fetch(`${apiBase}articles/${slug}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
    body: JSON.stringify(slug),
  })
};

export const favoriteArticle = async (slug: string, token: string) => {
  const res = await fetch(`${apiBase}articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
    body: JSON.stringify((slug)),
  }).then((res) => res.json());
  return res;
};

export const unFavoriteArticle = async (slug: string, token: string) => {
  const res = await fetch(`${apiBase}articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${token}`,
      'accept': 'application/json',
    },
    body: JSON.stringify({ slug }),
  }).then((res) => res.json());
  return res;
};
