import styled from 'styled-components'

const Section5 = styled.div`
  padding-block: 40px;
  background-color: #c7d329;
`

const ContainerText = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: 300;
  }

  span {
    font-size: 30px;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;

    span {
      margin-bottom: 10px;
    }
  }
`

const Cronometro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 30px;
    font-weight: 600;
  }
`

const ButtonContainer = styled.div`
  margin-top: 5px;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  max-width: 500px;
  gap: 20px;
`

export { ButtonContainer, CardContainer, ContainerText, Cronometro, Section5 }
