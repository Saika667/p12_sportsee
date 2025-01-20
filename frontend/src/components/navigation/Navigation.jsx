import { Container, LogoContainer, Nav, StyledLink } from "./NavigationStyle"
import Logo from "../../assets/logo.svg?react"

function Navigation () {
    return (
        <Container>
            <LogoContainer>
                <Logo />
            </LogoContainer>

            <Nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/account">Profil</StyledLink>
                <StyledLink to="/settings">Réglages</StyledLink>
                <StyledLink to="/community">Communauté</StyledLink>           
            </Nav>
        </Container>
    )
}

export default Navigation