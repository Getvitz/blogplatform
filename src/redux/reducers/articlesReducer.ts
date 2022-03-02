import { ArticleFeatures } from "../../typescript/models/models";
import {
  DataLoadingType, 
  GetArticlesSuccessType, 
  GetOneArticlesSuccessType, 
  SetEditModeType, 
  ToggleFavoriteType } from "../types/types"

const defaultState = {
  loading: true,
  articlesCount: 0,
  articlesList: [] as Array<ArticleFeatures>,
  article: {
    author: {
      username: '',
      image: '',
      following: false
    },
    body: '',
    createdAt: '',
    description: '',
    favorited: false,
    favoritesCount: 0,
    slug: '',
    tagList:[] as Array<string>,
    title: '',
    updatedAt: ''
  } as ArticleFeatures,
  editmode: false
};

export type DefaultStateType = typeof defaultState;

type ArticleActionsType = DataLoadingType | GetArticlesSuccessType | GetOneArticlesSuccessType | SetEditModeType | ToggleFavoriteType;

const articlesReducer = (state = defaultState, action: ArticleActionsType) : DefaultStateType => {
  switch (action.type) {
    case 'DATA_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ARTICLES':
      return {
        ...state,
        articlesList: [...action.payload.articles],
        articlesCount: action.payload.articlesCount,
        loading: false,
        article: defaultState.article,
        editmode: false,
      };
    case 'GET_ONE_ARTICLE':
      return {
        ...state,
        article: { ...action.payload },
        loading: false,
        editmode: false
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editmode: action.boolean
      };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        articlesList: state.articlesList.map((article) => article.slug === action.payload.slug ? {
          ...article, favorited: action.payload.favorited, favoritesCount: action.payload.favoritesCount} : article),
        article: { ...action.payload, author: state.article.author }
      };
    default:
      return state;
  }
};

export default articlesReducer;
