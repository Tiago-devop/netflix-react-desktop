import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Guard from 'components/guard/guard';
import Login from 'screens/login/login.screen';
import theme from 'themes/main/theme';
import { GlobalStyles } from 'themes/main/global-styles';
import MoviesList from 'screens/shows-list/shows-list';
import { LOGIN_URL } from 'screens/login/login.type';
import { SHOWS_LIST_URL } from 'screens/shows-list/shows-list.type';
import store from 'store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Guard><MoviesList /></Guard>} path={SHOWS_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
