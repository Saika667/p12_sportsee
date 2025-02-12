import styled from "styled-components"

export const Wrapper = styled.div.attrs(props => ({
    $height: props.$height + 'px'
}))`
    background-color:#FBFBFB;
    border-radius: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 30%;
    height: ${ props => props.$height };
    overflow: hidden;
`