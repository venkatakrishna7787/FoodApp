import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const storeConfiguration = (slices, api) => {
  const rootReducer = combineReducers({
    counter: slices.counter.reducer,
    todo: slices.todo.reducer,
  });
  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(
        api.api.middleware,
      ),
  });
  const persistanceStore = persistStore(store);
  return {
    store,
    persistanceStore,
  };
};
export default storeConfiguration;
