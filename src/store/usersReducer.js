const defaultState = {
  signedin: false,
  username: '',
  email: '',
  image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
  token: '',
  errors: {},
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        signedin: true,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: { ...action.payload },
      };
    case 'LOG_OUT_USER':
      return {
        ...state,
        signedin: false,
        username: '',
        email: '',
        image: '',
        token: '',
      };

    default:
      return state;
  }
};

export default usersReducer;
