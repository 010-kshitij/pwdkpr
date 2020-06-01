import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/screen/main';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={0x00000000} />
      <Main />
    </>
  );
};

export default App;
