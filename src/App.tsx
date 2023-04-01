import { ThemeProvider } from "styled-components"
import Routes from "./Routes/router"
import { Container, GlobalStyles } from "./Styles/globalStyles"
import { theme } from "./Styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export default App
