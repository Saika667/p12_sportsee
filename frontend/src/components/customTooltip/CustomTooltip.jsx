import { Container, Text } from "./CustomTooltipStyle"

function CustomTooltip ({ payload }) {
    if (!payload || payload.length === 0) return null
    
    return (
        <Container>
            <Text>{ payload[0].value}kg</Text>
            <Text>{ payload[1].value}Kcal</Text>        
        </Container>
    );
}

export default CustomTooltip