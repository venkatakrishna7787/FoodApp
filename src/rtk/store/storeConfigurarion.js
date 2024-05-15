import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit/react';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: [],
};
const storeConfiguration = (slices, api) => {
  const rootReducer = combineReducers({
    counter: slices.counter.reducer,
    todo: slices.todo.reducer,
    products: slices.products.reducer,
    [api.reducerPath]: api.reducer,
  });
  const store = configureStore({
    // reducer: persistReducer(persistConfig, rootReducer),
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
  });
  // const persistanceStore = persistStore(store);
  return {
    store,
    };
};
export default storeConfiguration;
