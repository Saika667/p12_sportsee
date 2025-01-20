import { Button, ButtonsContainer, Container, Span } from "./SideMenuStyle"
import Yoga from "../../assets/yoga.svg?react"
import Bike from "../../assets/bike.svg?react"
import Alter from "../../assets/alter.svg?react"
import Swim from "../../assets/swim.svg?react"

function SideMenu () {
    return (
        <Container>
            <ButtonsContainer>
                <Button>
                    <Yoga />
                </Button>

                <Button>
                    <Swim />
                </Button>

                <Button>
                    <Bike />
                </Button>

                <Button>
                    <Alter />
                </Button>
            </ButtonsContainer>
            
            <Span>Copiryght, SportSee 2020</Span>
        </Container>
    )
}

export default SideMenu