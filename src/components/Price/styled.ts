import styled from 'styled-components'

const Price = styled.div`
  background-color: white;
  padding: 25px;

  display: flex;
  justify-content: left;

  border-top-left-radius: 70px;

  color: #0a291d;
  font-weight: bold;

  width: 100%;
  max-width: 250px;
  margin: 0 auto;

  @media (max-width: 1024px) {
  }
`

const BigPrice = styled.div`
  font-size: 54px;
  margin-right: 5px;
`

const SmallPrice = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 22px;
  gap: 5px;

  .info {
    font-size: 12px;
  }
`

const ContainerPrice = styled.div`
  display: flex;
`

const Cifrao = styled.div`
  align-self: end;
  font-size: 32px;
`

export { BigPrice, Cifrao, ContainerPrice, Price, SmallPrice }
