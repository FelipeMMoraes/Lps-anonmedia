import { Button } from '../Button'
import { Container } from '../Container'

import product from '../../assets/img/section4.png'

import * as S from './styled'

const Section4 = () => (
  <S.Section4>
    <Container>
      <S.Img src={product} />
      <S.Text>
        <h1>
          O que o <strong>Detox Green</strong> faz por você?
        </h1>
        <ul>
          <li>Estimula a perca de gordura</li>
          <li>Melhora a sua disposição e o seu redimento físico</li>
          <li>Melhora o foco e a concentração</li>
          <li>Elimina o excesso de água</li>
        </ul>
        <S.ButtonContainer>
          <Button>EU QUERO EXPERIMENTAR!</Button>
        </S.ButtonContainer>
      </S.Text>
    </Container>
  </S.Section4>
)

export { Section4 }
