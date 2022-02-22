import {
    GET_ARTICLES,
    GET_ONE_ARTICLE,
    DATA_LOADING,
    SET_USER_DATA,
    SIGN_IN,
    LOG_OUT_USER,
    SET_EDIT_MODE,
    TOGGLE_FAVORITE
  } from '../../redux/actions/actionTypes'

interface IAuthor {
    username: string,
    image: string,
    following: boolean
  }
  
export interface IArticle {
    author?: IAuthor,
    body: string,
    createdAt?: string,
    description: string,
    favorited?: boolean,
    favoritesCount?: number,
    slug?: string,
    tagList: Array<string>,
    title: string,
    updatedAt?: string,
    editmode?: boolean
  }

export interface IArticlePayload {  
    articles: Array<IArticle>,
    articlesCount: number
  }
  
export type GetArticlesSuccessType = {
    type: typeof GET_ARTICLES,
    payload: IArticlePayload
  }


export type GetOneArticlesSuccessType = {
    type: typeof GET_ONE_ARTICLE,
    payload: IArticle
  }

export type DataLoadingType = {
    type: typeof DATA_LOADING
  }

export type SetEditModeType = {
    type: typeof SET_EDIT_MODE,
    boolean: boolean
  }

export type ToggleFavoriteType = {
    type: typeof TOGGLE_FAVORITE,
    payload: IArticle
  }

export  type SetSignedInType = {
    type: typeof SIGN_IN,
  }

export type LogOutUserType = {
    type: typeof LOG_OUT_USER
  }

export interface IUserPayload {
    username: string,
    email: string,
    image: string,
    token?: string,
    password?: string
  }
  
export type SetUserDataType = {
    type: typeof SET_USER_DATA,
    payload: IUserPayload
  }

export interface IFormData {
    username?: string,
    email: string,
    image?: string,
    token?: string,
    password?: string
  }

export type OnDeleteModalType = () => void;