import { CardVitamins } from '../CardVitamins'
import { Container } from '../Container'

import product from '../../assets/img/dnaBrasilDetox.png'
import B6 from '../../assets/img/vitamins/B.png'
import C from '../../assets/img/vitamins/C.png'
import coffe from '../../assets/img/vitamins/coffee-beans.png'

import { Price } from '../Price'
import * as S from './styled'

const Section10 = () => (
  <S.Section10>
    <Container>
      <S.Img src={product} />
      <S.Text>
        <h1>
          DETOX
          <br />
          GREEN
        </h1>
        <S.ContainerVitamins>
          <CardVitamins svgSrc={coffe}>Café Verde</CardVitamins>
          <CardVitamins svgSrc={B6}>Vitamina B6</CardVitamins>
          <CardVitamins svgSrc={C}>Chlorella</CardVitamins>
          <CardVitamins svgSrc={C}>Cromo</CardVitamins>
        </S.ContainerVitamins>
        <Price />
      </S.Text>
    </Container>
  </S.Section10>
)

export { Section10 }
