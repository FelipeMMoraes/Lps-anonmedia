import styled from 'styled-components'

const Section8 = styled.div`
  display: flex;

  background-color: #f8f8f8;

  width: 100%;
  padding-block: 100px;

  @media (max-width: 1024px) {
    padding-block: 50px;
  }
`

const Text = styled.div`
  width: 100%;
  max-width: 350px;
  margin-top: 50px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #0d271e;
    margin-bottom: 20px;
  }
`

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-right: 0;
  }
`

const ButtonContainer = styled.button`
  margin-top: 20px;
`

export { ButtonContainer, Img, Section8, Text }
