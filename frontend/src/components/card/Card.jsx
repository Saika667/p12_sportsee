import Flamme from '../../assets/flamme.svg?react'
import Apple from '../../assets/apple.svg?react'
import Burger from '../../assets/burger.svg?react'
import Protein from '../../assets/protein.svg?react'
import { IconContainer, Informations, Span, Wrapper } from './CardStyle'

function Card ({ type, data }) {
    const table = {
        calorie: {
            icon: <Flamme />,
            unit: 'kCal',
            label: 'Calories'
        },
        protein: {
            icon: <Protein />,
            unit: 'g',
            label: 'Proteines'
        },
        glucid: {
            icon: <Apple />,
            unit: 'g',
            label: 'Glucides'
        },
        lipid: {
            icon: <Burger />,
            unit: 'g',
            label: 'Lipides'
        }
    }
    
    return (
        <Wrapper>
            <IconContainer className={ type }>
                { table[type].icon }
            </IconContainer>

            <Informations>
                <Span>{ data + table[type].unit }</Span>
                <Span className="last">{ table[type].label }</Span>
            </Informations>
        </Wrapper>
    )
}

export default Card