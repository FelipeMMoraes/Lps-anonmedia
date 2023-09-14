import { Button } from '../Button'
import { Container } from '../Container'
import { CountDown } from '../CountDown'

import * as S from './styled'

const Section5 = () => (
  <S.Section5>
    <Container>
      <S.ContainerText>
        <span>Garanta o seu antes que a oferta acabe.</span>
        <S.ButtonContainer>
          <Button
            textColor="#c8d429"
            backgroundColor="#0d271e"
            hoverBackgroundColor="#1d5340"
          >
            EU QUERO EMAGRECER!
          </Button>
        </S.ButtonContainer>
      </S.ContainerText>
      <CountDown />
    </Container>

    {/* <S.CardContainer>
      <CardVitamins svgSrc={coffe}>Café Verde</CardVitamins>
      <CardVitamins svgSrc={coffe}>Café Verde</CardVitamins>
      <CardVitamins svgSrc={coffe}>Café Verde</CardVitamins>
      <CardVitamins svgSrc={coffe}>Café Verde</CardVitamins>
    </S.CardContainer> */}
  </S.Section5>
)

export { Section5 }
