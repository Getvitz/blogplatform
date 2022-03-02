import {
    GET_ARTICLES,
    GET_ONE_ARTICLE,
    DATA_LOADING,
    SET_USER_DATA,
    SIGN_IN,
    LOG_OUT_USER,
    SET_EDIT_MODE,
    TOGGLE_FAVORITE
  } from '../actions/actionTypes';
  import { 
    ArticlePayloadFeatures, 
    ArticleFeatures, 
    UserPayloadFeatures } from '../../typescript/models/models';
  
export type GetArticlesSuccessType = {
    type: typeof GET_ARTICLES,
    payload: ArticlePayloadFeatures
  }

export type GetOneArticlesSuccessType = {
    type: typeof GET_ONE_ARTICLE,
    payload: ArticleFeatures
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
    payload: ArticleFeatures
  }

export  type SetSignedInType = {
    type: typeof SIGN_IN,
  }

export type LogOutUserType = {
    type: typeof LOG_OUT_USER
  }

export type SetUserDataType = {
    type: typeof SET_USER_DATA,
    payload: UserPayloadFeatures
  }

export type OnDeleteModalType = () => void;