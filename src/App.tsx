import { ThemeProvider } from "styled-components"
import Routes from "./Routes/router"
import { Container, GlobalStyles, ImageBackground } from "./Styles/globalStyles"
import { theme } from "./Styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ImageBackground />
        <Routes />
    </ThemeProvider>
  )
}

export default App
