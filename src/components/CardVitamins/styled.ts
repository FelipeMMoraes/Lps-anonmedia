import styled from 'styled-components'

const CardVitamins = styled.div`
  display: flex;
  align-items: center;

  background-color: white;

  padding: 5px;
  border-radius: 110px;

  width: 100%;
  max-width: 220px;
`

const SvgCard = styled.div`
  background-color: #c8d429;
  padding: 15px;
  border-radius: 100%;
  margin-right: 30px;

  img {
    width: 100%;
    max-width: 30px;
  }

  @media (max-width: 1024px) {
    padding: 7px;
    margin-right: 15px;

    img {
      max-width: 20px;
    }
  }
`

const TextCard = styled.div`
  span {
    color: #0a291d;
    font-size: 16px;
    font-weight: 700;
  }
`

export { CardVitamins, SvgCard, TextCard }
