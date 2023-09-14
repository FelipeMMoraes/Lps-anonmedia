import styled from 'styled-components'

const Section9 = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #0d271e;

  width: 100%;
  padding-block: 100px;

  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding-block: 50px;
  }
`

const Text = styled.div`
  width: 100%;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin-bottom: 30px;

    strong {
      color: #c8d429;
    }
  }
`

const ContainerDepoiments = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    flex-direction: column;

    margin-bottom: 30px;
  }
`

const Depoiments = styled.div`
  background-color: black;
  color: white;

  padding: 30px 50px 150px;
`

const ButtonContainer = styled.button`
  margin-top: 20px;
`

export { ButtonContainer, ContainerDepoiments, Depoiments, Section9, Text }
