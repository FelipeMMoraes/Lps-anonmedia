import styled from 'styled-components'

const Footer = styled.div`
  padding-block: 40px;
  background-color: white;

  margin: 0 auto;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  font-weight: bold;

  @media (max-width: 1024px) {
    padding: 20px;
    flex-direction: column;
  }
`

const LogoDNA = styled.div`
  display: flex;
  gap: 50px;

  img {
    width: 100%;
    max-width: 150px;
  }
`

const Adress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;

  gap: 5px;
`

const LogoCerrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  gap: 5px;

  img {
    width: 100%;
    max-width: 100px;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    align-items: start;

    flex-direction: row;
    align-items: end;
    justify-content: end;

    gap: 20px;
  }
`

export { Adress, Footer, LogoCerrado, LogoDNA }
