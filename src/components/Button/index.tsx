import * as S from './styled'

import type { ButtonProps } from './types'

const Button = ({ children, icon: Icon }: ButtonProps) => (
  <S.ButtonContainer>
    <S.Button>
      {Icon && <Icon size={24} />}
      {children}
    </S.Button>
  </S.ButtonContainer>
)

export { Button }
