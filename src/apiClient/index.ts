import { ArticleType, SetUserDataPayloadType } from "../typescript/types/types";

const apiBase = 'https://kata.academy:8021/api/';

export const getOneArticle = async (slug: string) => {
  const res = await fetch(`${apiBase}articles/${slug}`)
    .then((res) => res.json())
    return res
};

export const getAllArticles = async (limit: number, offset: number) => {
  const res = fetch(`${apiBase}articles?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
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
