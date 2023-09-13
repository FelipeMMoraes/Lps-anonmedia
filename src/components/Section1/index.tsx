import { Button } from '../Button'
import { Container } from '../Container'

import ImgSection1 from '../../assets/img/dnaBrasilDetox.png'

import * as S from './styled'

const Section1 = () => (
  <S.Section1>
    <Container>
      <S.Text>
        <h1>Perca peso de maneira natural e sem estresse.</h1>
        <p>
          Conheça o <strong>DETOX GREEN,</strong> o suplemento alimentar que tem
          transformado a vida de milhares de pessoas.
        </p>
        <S.ButtonContainer>
          <Button>EU QUERO EMAGRECER!</Button>
        </S.ButtonContainer>
      </S.Text>
      <S.Img src={ImgSection1} />
    </Container>
  </S.Section1>
)

export { Section1 }
