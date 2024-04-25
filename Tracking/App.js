import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/components/utils/MainNavigator';
import DrawerNavigator from './src/components/utils/DrawerNavigator';
// const isLoggedIn = false;

function App() {
  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <DrawerNavigator/>: <MainNavigator/>} */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

export default App;