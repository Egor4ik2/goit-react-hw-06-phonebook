// store.js
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './ContactsSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'root', // Любой уникальный ключ
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware(),
});

export const persistor = persistStore(store);

export default store;
