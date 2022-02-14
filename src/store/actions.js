export const getArticlesSuccess = (payload) => ({
  type: 'GET_ARTICLES',
  payload,
});

export const getOneArticleSuccess = (payload) => ({
  type: 'GET_ONE_ARTICLE',
  payload,
});

export const dataLoading = () => {
  return {
    type: 'DATA_LOADING',
  };
};

export const receiveError = () => ({
  type: 'ERROR_RECEIVED',
});

export const setSignedIn = (bool) => ({
  type: 'SIGN_IN',
  bool,
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER',
});

export const setUserData = (payload) => ({
  type: 'SET_USER_DATA',
  payload,
});

export const setErrors = (payload) => ({
  type: 'SET_ERRORS',
  payload,
});

// export const signInUser = (payload) => ({
//   type: 'SIGN_IN_USER',
//   payload
// });
