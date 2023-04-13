import { ThemeProvider } from "styled-components";
import Routes from "./Routes/router";
import { Container, GlobalStyles } from "./Styles/globalStyles";
import { theme } from "./Styles/theme";
import ClimateProvider from "./Context/provider";

function App() {
  return (
    <ClimateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </ClimateProvider>
  );
}

export default App;
