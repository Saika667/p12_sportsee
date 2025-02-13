import { Page } from "../../utils/Atoms"
import { Span, Title } from "./ErrorPageStyle"

function ErrorPage () {
    return (
        <Page>
            <Title>404</Title>
            <Span>Oups ! La page est introuvable.</Span>
        </Page>
    )
}

export default ErrorPage