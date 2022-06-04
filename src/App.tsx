import { Route, Routes } from "react-router-dom";

import MoviesList from "./screens/movies-list/movies-list";
import Login from "./screens/login/login";
import { LOGIN_URL } from "./screens/login/login.types";
import { MOVIES_LIST_URL } from "./screens/movies-list/movies-list.type";

import theme from "./themes/main/theme";
import { GlobalStyles } from "./themes/main/global-styles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store/store";

const App = () => (
  <>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
