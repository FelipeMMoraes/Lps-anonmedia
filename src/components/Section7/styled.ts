import styled from 'styled-components'

const Section7 = styled.div`
  padding-block: 40px;
  background-color: #09291d;
`

const ContainerText = styled.div`
  span {
    font-size: 30px;
    font-weight: 600;
    color: white;

    strong {
      color: #c8d429;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;

    p {
      font-size: 20px;
      padding-bottom: 10px;
    }

    span {
      font-size: 25px;
    }
  }
`

const ButtonContainer = styled.div`
  max-width: 300px;
  width: 100%;
`

export { ButtonContainer, ContainerText, Section7 }
