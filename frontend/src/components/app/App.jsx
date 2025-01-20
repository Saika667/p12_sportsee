import Navigation from "../navigation/Navigation"
import SideMenu from "../sideMenu/SideMenu"
import { Container } from "./AppStyle"

function App({ children }) {

  return (
    <Container>
      <Navigation />
      <SideMenu />
      { children }
    </Container>
  )
}

export default App
