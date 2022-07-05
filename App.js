import React, { useEffect } from 'react';
import Navigations from './src/navigations';
import {Provider} from 'react-redux';
import store from './store';
import SplashScreen from 'react-native-splash-screen';

export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store()}>
      <Navigations />
    </Provider>
  );
};
