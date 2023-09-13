import styled from 'styled-components'

const Section1 = styled.section`
  display: flex;
  flex-direction: row;

  background-color: #0d271e;

  padding-top: 100px;
  padding-bottom: 100px;
`

const Text = styled.div`
  flex: 1;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #c8d429;

    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: normal;
    color: white;
    margin-bottom: 30px;

    strong {
      color: #c8d429;
      font-weight: bold;
    }
  }
`
const Img = styled.div`
  flex: 1;
`

const ButtonContainer = styled.div``

export { ButtonContainer, Img, Section1, Text }
