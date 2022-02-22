import { RootState } from "../index";

export const getArticleAuthor = (state: RootState) => state.articles.article.author.username;
export const getCurrentUser = (state: RootState) => state.user.username;
export const getUserStatus = (state: RootState) => state.user.signedin;
export const getToken = (state: RootState) => state.user.token;
export const getArticlesCount = (state: RootState) => state.articles.articlesCount;
export const getArticlesList = (state: RootState) => state.articles.articlesList;
export const getLoadingState = (state: RootState) => state.articles.loading;
export const getArticle = (state: RootState) => state.articles.article;
export const getArticleText = (state: RootState) => state.articles.article.body;
export const isSignedIn = (state: RootState) => state.user.signedin;
export const getImage = (state: RootState) => state.user.image;
export const getEditStatus = (state: RootState) => state.articles.editmode;
export const getArticleTitle = (state: RootState) => state.articles.article.title;
export const getArticleDescription = (state: RootState) => state.articles.article.description;
export const getArticleTagList = (state: RootState) => state.articles.article.tagList;
export const getArticleSlug = (state: RootState) => state.articles.article.slug;
export const getStateEmail = (state: RootState) => state.user.email;

