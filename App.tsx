// import 'react-native-gesture-handler';
import 'react-native-splash-screen';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {AppProvider} from './utils';
import BottomNavigation from './Components/BottomNavigation.comp';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <BottomNavigation />
    </AppProvider>
  );
}
