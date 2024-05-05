import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import AuthNavigation from './navigations/StackNavigation/authNavigation';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigation />
    </NavigationContainer>
  );
};
export default App;
