// import { AnyAction } from "redux";
import { SetUserDataType, SetSignedInType, LogOutUserType } from "../typescript/types/types";

const defaultState = {
  signedin: false,
  username: '',
  email: '',
  image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
  token: '',
};

export type DefaultStateType = typeof defaultState;

type UserActionsTypes = SetUserDataType | SetSignedInType | LogOutUserType;

const usersReducer = (state = defaultState, action: UserActionsTypes) : DefaultStateType => {
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
