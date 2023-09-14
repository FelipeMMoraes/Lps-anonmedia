import * as S from './styled'

import { Container } from '../Container'

const Price = () => (
  <S.Price>
    <Container>
      <S.ContainerPrice>
        <S.Cifrao>
          <span>R$</span>
        </S.Cifrao>
        <S.BigPrice>
          <span>99</span>
        </S.BigPrice>
        <S.SmallPrice>
          <span>,99</span>
          <span className="info">
            à vista
            <br />
            ou nos cartões
          </span>
        </S.SmallPrice>
      </S.ContainerPrice>
    </Container>
  </S.Price>
)

export { Price }
