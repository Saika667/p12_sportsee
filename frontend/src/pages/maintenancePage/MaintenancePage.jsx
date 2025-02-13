import { Page } from "../../utils/Atoms"
import { Span, Title } from "../errorPage/ErrorPageStyle"

function MaintenancePage () {
    return (
        <Page>
            <Title>Oups !</Title>
            <Span>Le site est en maintenance.</Span>
        </Page>
    )
}

export default MaintenancePage