export const getArticlesSuccess = (payload) => ({
    type: 'GET_ARTICLES',
    payload
  });
  
  export const getOneArticleSuccess = (payload) => ({
      type: 'GET_ONE_ARTICLE',
      payload
    });
  
  export const dataLoading = () => {
    return {
      type: 'DATA_LOADING',
    };
  };
  
  export const receiveError = () => ({
    type: 'ERROR_RECEIVED',
  });