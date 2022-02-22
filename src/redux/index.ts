import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import articlesReducer from './reducers/articlesReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  user: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

