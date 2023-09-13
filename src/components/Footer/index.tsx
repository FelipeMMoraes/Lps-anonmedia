import * as S from './styled'

import LogoCerrado from '../../assets/img/LogoCerrado.png'
import LogoDna from '../../assets/img/LogoDNA.png'

const Footer = () => (
  <S.Footer>
    <S.LogoDNA>
      <img src={LogoDna} alt="LogoDna" />

      <S.Adress>
        <>
          <span>Rua Norberto de Melo, nº 895,</span>
          <span> Velha Marabá, Cep: 68.500-050 - Marabá - PA</span>
        </>
        <>
          <span>0800 484-4488</span>
          <span>(11) 3090-6051</span>
          <span>(11) 94296-3787</span>
        </>
      </S.Adress>
    </S.LogoDNA>

    <S.LogoCerrado>
      <img src={LogoCerrado} alt="LogoCerrado" />
      <span>A DNA Brasil é uma empresa do Grupo Cerrado</span>
    </S.LogoCerrado>
  </S.Footer>
)

export { Footer }
