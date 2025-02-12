import styled from "styled-components"

export const Wrapper = styled.div`
    background-color:#FBFBFB;
    border-radius: 5px;
    padding: 2rem;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    padding: 1rem;
    border-radius: 6px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &.calorie {
        background-color:  #FF00001A;
        svg {
            color: #FF0000;
        }
    }
    &.protein {
        background-color:  #4AB8FF1A;
        svg {
            color:#4AB8FF;
        }
    }
    &.glucid {
        background-color:  #FDCC0C1A;
        svg {
            color: #FDCC0C;
        }
    }
    &.lipid {
        background-color:  #FD51811A;
       
        svg {
            color: #FD5181;
        }
    }
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
`

export const Span = styled.span`
    color: #282D30;
    padding-left: 1rem;
    font-weight: bold;
    font-size: 20px;

    &.last {
        color: #74798C;
        font-weight: normal;
        font-size: 14px;
    }
`