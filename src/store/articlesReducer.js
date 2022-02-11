const defaultState = {
    // slug: null,
    loading: true,
    error: 0,
    articlesList: [],
    articlesCount: 0,
    article: {
      author: {
        username: ''
      },
      favorited: false,
    }
  }

const articlesReducer = (state = defaultState, action) => {
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
      case 'ERROR_RECEIVED':
        return {
          ...state,
          error: state.error + 1,
        };
      case 'GET_ONE_ARTICLE':
          return {
            ...state,
            article: {...action.payload},
            loading: false,
          }
      default: 
            return state;
    }
}

export default articlesReducer;