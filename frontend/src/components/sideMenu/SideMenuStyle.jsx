import styled from "styled-components"

export const Container = styled.div`
    background-color: #020203;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 88px;
    bottom: 0;
    padding: 1.5rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
`

export const Button = styled.button`
    width: fit-content;
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 6px;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 250ms linear;

    svg {
        color: #ff0101;
    }

    &:hover {
        background-color: #ff0101;

        svg {
            color: #ffffff;
        }
    }
`

export const Span = styled.span`
    color: #ffffff;
    transform: translateX(-17%) rotate(-90deg);
    font-size: 1.1rem;
    position: absolute;
    bottom: 7rem;
    width: max-content;
    left: 0;
    right: 0;
    margin: auto;
`