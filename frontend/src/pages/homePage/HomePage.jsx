import { Page } from "../../utils/Atoms"
import { CatchPhrase, Container, DailyCountersContainer, DashboardContainer, GraphicsContainer, IconContainer, Informations, Name, Span, Title, Wrapper } from "./HomePageStyle"
import Flamme from '../../assets/flamme.svg?react'
import Apple from '../../assets/apple.svg?react'
import Burger from '../../assets/burger.svg?react'
import Protein from '../../assets/protein.svg?react'
import useDynamicFile from "../../utils/useDynamicFile"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DailyActivity from "../../components/diagrams/dailyActivity/DailyActivity"
import { XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, ResponsiveContainer } from 'recharts'
import AverageSessionDuration from "../../components/diagrams/averageSessionDuration/AverageSessionDuration"
import Intensity from "../../components/diagrams/intensity/Intensity"

function HomePage () {
    let { userId } = useParams()
    const { api } = useDynamicFile()
    const [ userInformation, setUserInformation ] = useState({})
    const [ userActivity, setUserActivity ] = useState({})
    const [ averageSession, setAverageSession ] = useState({})
    const [ performance, setPerformance ] = useState({})
    userId = userId ?? 12


    useEffect(() => {
        const loadData = async () => {
            const info = await api?.getUserInformation(userId)
            setUserInformation(info)
            const activity = await api?.getUserActivity(userId)
            setUserActivity(activity)
            const averageSession = await api?.getUserAverageSessions(userId)
            setAverageSession(averageSession)
            const intensityActivities = await api?.getUserPerformance(userId)
            setPerformance(intensityActivities)
        }

        loadData()
    }, [api, userId])

    return (
        <Page>
            <Title>Bonjour <Name>{ userInformation?.userInfos?.firstName }</Name></Title>
            <CatchPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</CatchPhrase>

            <DashboardContainer>
                <GraphicsContainer>
                    <DailyActivity userData={ userActivity } />

                    <Container>
                        <AverageSessionDuration userData={ averageSession }/>

                        <Intensity userData={ performance }/>

                        <Wrapper className="statistic">

                        </Wrapper>
                    </Container>
                </GraphicsContainer>

                <DailyCountersContainer>
                    <Wrapper className="info">
                        <IconContainer className="calorie">
                            <Flamme />
                        </IconContainer>

                        <Informations>
                            <Span>{ userInformation?.keyData?.calorieCount }kCal</Span>
                            <Span className="last">Calories</Span>
                        </Informations>
                    </Wrapper>

                    <Wrapper className="info">
                        <IconContainer className="protein">
                            <Protein />
                        </IconContainer>

                        <Informations>
                            <Span>{ userInformation?.keyData?.proteinCount }g</Span>
                            <Span className="last">Proteines</Span>
                        </Informations>
                    </Wrapper>

                    <Wrapper className="info">
                        <IconContainer className="glucid">
                            <Apple />
                        </IconContainer>

                        <Informations>
                            <Span>{ userInformation?.keyData?.carbohydrateCount }g</Span>
                            <Span className="last">Glucides</Span>
                        </Informations>
                    </Wrapper>

                    <Wrapper className="info">
                        <IconContainer className="lipid">
                            <Burger />
                        </IconContainer>

                        <Informations>
                            <Span>{ userInformation?.keyData?.lipidCount }g</Span>
                            <Span className="last">Lipides</Span>
                        </Informations>
                    </Wrapper>
                </DailyCountersContainer>
            </DashboardContainer>
        </Page>
    )
}

export default HomePage