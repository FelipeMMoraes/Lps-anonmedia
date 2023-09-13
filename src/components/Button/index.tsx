import React from 'react'
import * as S from './styled'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <S.ButtonContainer>
    <S.Button {...props}>{children}</S.Button>
  </S.ButtonContainer>
)

export { Button }
