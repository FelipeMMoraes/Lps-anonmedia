import styled from 'styled-components'

const Section2 = styled.div`
  padding-block: 40px;
  background-color: #f0f0f0;
`

const Video = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-bottom: 50px;
  }

  span {
    background-color: black;
    color: white;

    padding: 150px 250px;
    border-radius: 30px;

    @media (max-width: 1024px) {
      padding: 60px 120px;
      border-radius: 15px;
    }
  }
`

export { Section2, Video }
