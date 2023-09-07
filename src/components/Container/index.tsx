import { ContainerProps } from './types'

import * as S from './styled'

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
)

export { Container }
