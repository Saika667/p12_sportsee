import styled from "styled-components"

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
`

export const Name = styled.span`
    color: #FF0000;
`

export const CatchPhrase = styled.p`

`

export const DashboardContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`

export const GraphicsContainer = styled.div`
    width: 78%;
`

export const DailyCountersContainer = styled.div`
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`

export const Wrapper = styled.div`
    background-color:#FBFBFB;
    border-radius: 5px;
    padding: 2rem;
    border-radius: 5px;
    box-sizing: border-box;
    
    &.diagram {
        width: 100%;
        height: 20rem;
    }

    &.info {
        display: flex;
        align-items: center;
    }

    &.statistic {
        width: 30%;
        height: 17rem;
        padding: 0;
    }
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