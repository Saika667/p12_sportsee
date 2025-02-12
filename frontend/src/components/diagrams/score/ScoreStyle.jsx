import styled from "styled-components"

export const Wrapper = styled.div.attrs(props => ({
    $height: props.$height + 'px'
}))`
    background-color:#FBFBFB;
    border-radius: 5px;
    /* padding: 2rem; */
    border-radius: 5px;
    box-sizing: border-box;
    width: 30%;
    height: ${ props => props.$height };
    /* height: 20rem; */
`

export const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
export const Span = styled.span`
    font-size: 2.625rem;
    color: #020203;
    font-weight: bold;
`

export const Paragraph = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    color: #74798C;
    margin: 0;
    font-family: 'Roboto';
`