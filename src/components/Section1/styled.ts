import styled from 'styled-components'
import Woman from '../../assets/img/female.png'

const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  background-color: #0d271e;

  width: 100%;
  padding-block: 100px;

  overflow: hidden;

  @media (max-width: 1024px) {
    padding-block: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -350px;
    width: 100%;
    height: 100%;
    background-image: url(${Woman});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`

const Text = styled.div`
  max-width: 350px;
  margin-right: 200px;
  margin-top: 50px;

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

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-right: 0px;

    h1 {
      margin-top: 0;
    }
  }
`
const Img = styled.img`
  width: 100%;
  max-width: 500px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`

const ButtonContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`

export { ButtonContainer, Img, Section1, Text }
