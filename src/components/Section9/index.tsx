import { Button } from '../Button'
import { Container } from '../Container'

import * as S from './styled'

const Section9 = () => (
  <S.Section9>
    <Container>
      <S.Text>
        <h1>
          Quem usou, <strong>comprova e aprova</strong>
        </h1>

        <S.ContainerDepoiments>
          <S.Depoiments>
            <span>DEPOIMENTO 1</span>
          </S.Depoiments>

          <S.Depoiments>
            <span>DEPOIMENTO 2</span>
          </S.Depoiments>

          <S.Depoiments>
            <span>DEPOIMENTO 3</span>
          </S.Depoiments>
        </S.ContainerDepoiments>

        <S.ButtonContainer>
          <Button>EU QUERO EXPERIMENTAR!</Button>
        </S.ButtonContainer>
      </S.Text>
    </Container>
  </S.Section9>
)

export { Section9 }
