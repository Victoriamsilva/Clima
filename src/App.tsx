import { ThemeProvider } from "styled-components";
import Routes from "./Routes/router";
import { GlobalStyles } from "./Styles/globalStyles";
import { theme } from "./Styles/theme";
import ClimateProvider from "./Context/provider";
import "./Languages/index";

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
