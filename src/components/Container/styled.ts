import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 20px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export { Container }
