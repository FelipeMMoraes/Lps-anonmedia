import styled from 'styled-components'
import { Cifrao } from '../Price/styled'

const Section10 = styled.div`
  display: flex;

  background-color: #c7d329;

  width: 100%;
  padding-block: 100px;

  @media (max-width: 1024px) {
    padding-block: 50px;
  }
`

const Text = styled.div`
  width: 100%;
  max-width: 450px;

  h1 {
    font-size: 56px;
    font-weight: bold;
    color: #0d271e;
    margin-bottom: 20px;
    text-align: center;
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

const ContainerVitamins = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  margin-bottom: 30px;
`

const ContainerButton = styled.div`
  margin-top: 20px;
`

export { Cifrao, ContainerButton, ContainerVitamins, Img, Section10, Text }
