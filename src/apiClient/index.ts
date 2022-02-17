import { SetUserDataPayloadType } from "../typescript/types/types";

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
