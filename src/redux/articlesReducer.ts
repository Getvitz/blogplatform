import { ArticleType, DataLoadingType, GetArticlesSuccessType, GetOneArticlesSuccessType } from "../typescript/types/types";

const defaultState = {
  loading: true,
  articlesCount: 0,
  articlesList: [] as Array<ArticleType>,
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
  } as ArticleType,
};

export type DefaultStateType = typeof defaultState;

type ArticleActionsType = DataLoadingType | GetArticlesSuccessType | GetOneArticlesSuccessType;

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
      };
    case 'GET_ONE_ARTICLE':
      return {
        ...state,
        article: { ...action.payload },
        loading: false,
      };
    default:
      return state;
  }
};

export default articlesReducer;
