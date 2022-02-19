import {
  GET_ARTICLES,
  GET_ONE_ARTICLE,
  DATA_LOADING,
  SET_USER_DATA,
  SIGN_IN,
  LOG_OUT_USER,
  SET_EDIT_MODE
} from './actionTypes'

import { 
  GetArticlesSuccessType, 
  GetArticlesSuccessPayloadType, 
  ArticleType, 
  GetOneArticlesSuccessType,
  DataLoadingType,
  SetSignedInType,
  LogOutUserType,
  SetUserDataPayloadType,
  SetUserDataType,
  SetEditModeType
} from '../../typescript/types/types';

export const getArticlesSuccess = (payload: GetArticlesSuccessPayloadType) : GetArticlesSuccessType => ({
  type: GET_ARTICLES,
  payload
});

export const getOneArticleSuccess = (payload: ArticleType) : GetOneArticlesSuccessType => ({
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


export const setUserData = (payload : SetUserDataPayloadType) : SetUserDataType => ({
  type: SET_USER_DATA,
  payload,
});

export const setEditMode = (boolean: boolean) : SetEditModeType => {
  return {
    type: SET_EDIT_MODE,
    boolean
  };
};
