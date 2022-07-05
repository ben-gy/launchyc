import React from 'react';
import Navigations from './src/navigations';
import {Provider} from 'react-redux';
import store from './store';

export default App = () => {
  return (
    <Provider store={store()}>
      <Navigations />
    </Provider>
  );
};
