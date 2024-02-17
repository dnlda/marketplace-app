import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './reducer/categoriesReducer';
import cartReducer from './reducer/cartReducer';


const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
