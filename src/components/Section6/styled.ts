import styled from 'styled-components'

const Section6 = styled.div`
  display: flex;

  background-color: #f0f0f0;

  width: 100%;
  padding-block: 100px;

  overflow: hidden;

  @media (max-width: 1024px) {
    padding-block: 40px;
  }
`

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    display: flex;
  }
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 450px;

  h1 {
    font-size: 40px;
    color: #0a291d;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #0a291d;
    font-weight: 400;

    max-width: 350px;

    strong {
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
    p {
      max-width: none;
    }
  }
`

const ImgAbsolute = styled.div`
  position: relative;

  img {
    max-height: 80vh;
    position: absolute;
    top: -60px;
    right: -60px;
  }

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  margin-bottom: 40px;
`

export { CardContainer, ImgAbsolute, Section6, SectionContainer, TextContainer }
