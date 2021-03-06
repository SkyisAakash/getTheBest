import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Root from './components/root';

const App = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
)

export default App;
