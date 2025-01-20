import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-size: 14px;
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        background-color: #EDEDED;
        height: 100vh;
    }

    ::-webkit-scrollbar {
        background: transparent;
        height: 8px;
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
        background: rgb(148 163 184);
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    .text {
        color: #74798C;
        font-family: 'Roboto', sans-serif;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle