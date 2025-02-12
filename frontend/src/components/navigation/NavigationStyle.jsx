import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    background-color: #020203;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.48);
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 90%;
`

export const LogoContainer = styled.div`
    width: 178px;

    svg {
        width: 100%;
        height: 100%;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 1.5rem;
`