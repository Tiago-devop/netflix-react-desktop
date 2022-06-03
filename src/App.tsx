import { ThemeProvider } from "styled-components";
import Login from "./screens/login/login";
import theme from "./themes/main/theme";
import { GlobalStyles } from "./themes/main/global-styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
