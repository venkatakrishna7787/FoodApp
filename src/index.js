import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import initializeStore from './rtk/store/initializeStore';
import AuthNavigation from './navigations/StackNavigation/authNavigation';
export const {redux, slices} = initializeStore();
const AppWrapper = () => {
  return (
    <NavigationContainer>
      <Provider store={redux.store}>
        <PersistGate persistor={redux.persistanceStore}>
          <AuthNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
export default AppWrapper;
