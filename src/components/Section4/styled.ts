import styled from 'styled-components'

const Section4 = styled.div`
  display: flex;

  background-color: #0d271e;

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
    color: white;
    margin-bottom: 20px;

    strong {
      color: #c8d429;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;

    li {
      font-size: 16px;
      line-height: normal;
      color: white;

      position: relative;

      padding-left: 20px;

      @media (max-width: 1024px) {
        margin-left: 5px;
        text-align: left;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background-color: #c8d429;
        border-radius: 50%;
      }
    }
  }
`
const Img = styled.img`
  width: 100%;
  max-width: 700px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-right: 0;
  }
`

const ButtonContainer = styled.button`
  margin-top: 20px;
`

export { ButtonContainer, Img, Section4, Text }
