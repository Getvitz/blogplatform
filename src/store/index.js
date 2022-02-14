import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import articlesReducer from './articlesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  user: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
