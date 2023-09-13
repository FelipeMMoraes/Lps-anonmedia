import styled from 'styled-components'

const Section3 = styled.div`
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
    p {
      font-size: 20px;
      padding-bottom: 10px;
    }

    span {
      font-size: 25px;
    }
  }
`

export { ContainerText, Section3 }
