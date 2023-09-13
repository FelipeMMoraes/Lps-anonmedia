import { CardVitamins } from '../CardVitamins'
import { Container } from '../Container'

import VitaminaB from '../../assets/img/vitamins/B.png'
import VitaminaC from '../../assets/img/vitamins/C.png'
import coffe from '../../assets/img/vitamins/coffee-beans.png'

import Woman2 from '../../assets/img/WomanBG2.png'

import * as S from './styled'

const Section6 = () => (
  <S.Section6>
    <Container>
      <S.SectionContainer>
        <S.TextContainer>
          <h1>Conheça o Princípio ativo do Detox Green</h1>

          <S.CardContainer>
            <CardVitamins svgSrc={coffe}>Café verde</CardVitamins>
            <CardVitamins svgSrc={VitaminaB}>Vitamina B6</CardVitamins>
            <CardVitamins svgSrc={VitaminaC}>Chlorella</CardVitamins>
            <CardVitamins svgSrc={VitaminaC}>Cromo</CardVitamins>
          </S.CardContainer>

          <p>
            Com a Vitamina B6 aliada ao Cromo,
            <br />
            <strong>
              a sua perca de peso é acelerada, o seu foco aumenta e o seu
              rendimento esportivo vai para as alturas!
            </strong>
          </p>
        </S.TextContainer>
        <S.ImgAbsolute>
          <img src={Woman2} alt="" />
        </S.ImgAbsolute>
      </S.SectionContainer>
    </Container>
  </S.Section6>
)

export { Section6 }
