import { Page } from "../../utils/Atoms"
import { CatchPhrase, Container, DailyCountersContainer, DashboardContainer, GraphicsContainer, IconContainer, Informations, Name, Span, Title, Wrapper } from "./HomePageStyle"
import useDynamicFile from "../../utils/useDynamicFile"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DailyActivity from "../../components/diagrams/dailyActivity/DailyActivity"
import AverageSessionDuration from "../../components/diagrams/averageSessionDuration/AverageSessionDuration"
import Intensity from "../../components/diagrams/intensity/Intensity"
import userPerformance from "../../data/userPerformance"
import userInformation from "../../data/userInformation"
import Score from "../../components/diagrams/score/Score"
import Card from "../../components/card/Card"

function HomePage () {
    let { userId } = useParams()
    const { api } = useDynamicFile()
    const [ userInformationState, setUserInformationState ] = useState({})
    const [ userActivity, setUserActivity ] = useState({})
    const [ averageSession, setAverageSession ] = useState({})
    const [ performance, setPerformance ] = useState({})
    userId = userId ?? 12 

    useEffect(() => {
        const loadData = async () => {
            const info = await api?.getUserInformation(userId)

            if (info) {
                setUserInformationState(new userInformation(info))
            }

            const activity = await api?.getUserActivity(userId)
            setUserActivity(activity)
            const averageSession = await api?.getUserAverageSessions(userId)
            setAverageSession(averageSession)
            const intensityActivities = await api?.getUserPerformance(userId)

            if (intensityActivities) {
                setPerformance(new userPerformance(intensityActivities.kind, intensityActivities.data))
            }
        }

        loadData()
    }, [api, userId])

    return (
        <Page>
            <Title>Bonjour <Name>{ userInformationState?.userInfos?.firstName }</Name></Title>
            <CatchPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</CatchPhrase>

            <DashboardContainer>
                <GraphicsContainer>
                    <DailyActivity userData={ userActivity } />

                    <Container>
                        <AverageSessionDuration userData={ averageSession }/>

                        <Intensity userData={ performance } />

                        <Score userData={ userInformationState.score } />
                    </Container>
                </GraphicsContainer>

                <DailyCountersContainer>
                    <Card 
                        type="calorie"
                        data={ (userInformationState?.keyData?.calorieCount / 1000).toFixed(3).replace('.', ',') }
                    />
                    <Card 
                        type="protein"
                        data={ userInformationState?.keyData?.proteinCount }
                    />
                    <Card 
                        type="glucid"
                        data={ userInformationState?.keyData?.carbohydrateCount }
                    />
                    <Card 
                        type="lipid"
                        data={ userInformationState?.keyData?.lipidCount }
                    />
                </DailyCountersContainer>
            </DashboardContainer>
        </Page>
    )
}

export default HomePage