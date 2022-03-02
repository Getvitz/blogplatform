import {
  GET_ARTICLES,
  GET_ONE_ARTICLE,
  DATA_LOADING,
  SET_USER_DATA,
  SIGN_IN,
  LOG_OUT_USER,
  SET_EDIT_MODE,
  TOGGLE_FAVORITE
} from './actionTypes'

import { 
  ArticlePayloadFeatures, 
  ArticleFeatures,
  UserPayloadFeatures, 
} from '../../typescript/models/models';

import {
  GetArticlesSuccessType, 
  GetOneArticlesSuccessType,
  DataLoadingType,
  SetSignedInType,
  LogOutUserType,
  SetUserDataType,
  SetEditModeType,
  ToggleFavoriteType
} from '../types/types'

export const getArticlesSuccess = (payload: ArticlePayloadFeatures) : GetArticlesSuccessType => ({
  type: GET_ARTICLES,
  payload
});

export const getOneArticleSuccess = (payload: ArticleFeatures) : GetOneArticlesSuccessType => ({
  type: GET_ONE_ARTICLE,
  payload,
});


export const dataLoading = () : DataLoadingType => {
  return {
    type: DATA_LOADING,
  };
};

export const setSignedIn = () : SetSignedInType => ({
  type: SIGN_IN,
});


export const logOutUser = () : LogOutUserType => ({
  type: LOG_OUT_USER,
});


export const setUserData = (payload : UserPayloadFeatures) : SetUserDataType => ({
  type: SET_USER_DATA,
  payload,
});

export const setEditMode = (boolean: boolean) : SetEditModeType => {
  return {
    type: SET_EDIT_MODE,
    boolean
  };
};

export const toggleFavorite = (payload: ArticleFeatures) : ToggleFavoriteType => {
  return {
    type: TOGGLE_FAVORITE,
    payload
  };
};
