import { combineReducers } from '@reduxjs/toolkit';
import articlesReducer from './articles';
import authorsReducer from './authors';

const rootReducer = combineReducers({
  articles: articlesReducer,
  authors: authorsReducer,
});

export default rootReducer;
