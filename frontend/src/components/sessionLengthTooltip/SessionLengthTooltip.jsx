import { Container, Span } from "./SessionLengthTooltipStyle";

function SessionLengthTooltip ({ payload }) {
    if (!payload || payload.length === 0) return null
    
    return (
        <Container>
            <Span>{ payload[0].value} min</Span>      
        </Container>
    );
}

export default SessionLengthTooltip