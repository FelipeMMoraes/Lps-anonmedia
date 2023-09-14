import { Button } from '../Button'
import { Container } from '../Container'

import product from '../../assets/img/Section8.png'

import * as S from './styled'

const Section8 = () => (
  <S.Section8>
    <Container>
      <S.Img src={product} />
      <S.Text>
        <h1>
          Perca peso com um suplemento alimentar fabricado conforme as regra das
          da Anvisa
        </h1>
        <S.ButtonContainer>
          <Button>EU QUERO PERDER PESO!</Button>
        </S.ButtonContainer>
      </S.Text>
    </Container>
  </S.Section8>
)

export { Section8 }
