import * as S from './styled'

import { CardVitaminsProps } from './types'

const CardVitamins = ({ children, svgSrc }: CardVitaminsProps) => (
  <S.CardVitamins>
    <S.SvgCard>
      <img src={svgSrc} alt="Logo vitamina" />
    </S.SvgCard>
    <S.TextCard>
      <span>{children}</span>
    </S.TextCard>
  </S.CardVitamins>
)

export { CardVitamins }
