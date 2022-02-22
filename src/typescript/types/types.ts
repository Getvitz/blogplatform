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

export type AuthorType = {
    username: string,
    image: string,
    following: boolean
  }
  
export type ArticleType = {
    author?: AuthorType,
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

export type GetArticlesSuccessPayloadType = {  
    articles: Array<ArticleType>,
    articlesCount: number
  }
  
export type GetArticlesSuccessType = {
    type: typeof GET_ARTICLES,
    payload: GetArticlesSuccessPayloadType
  }


export type GetOneArticlesSuccessType = {
    type: typeof GET_ONE_ARTICLE,
    payload: ArticleType
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
    payload: ArticleType
  }

 export  type SetSignedInType = {
    type: typeof SIGN_IN,
  }

export type LogOutUserType = {
    type: typeof LOG_OUT_USER
  }

export type SetUserDataPayloadType = {
    username: string,
    email: string,
    image: string,
    token?: string,
    password?: string
  }
  
export type SetUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataPayloadType
  }

export type FormDataType = {
    username?: string,
    email: string,
    image?: string,
    token?: string,
    password?: string
  }

export type OnDeleteModalType = () => void;