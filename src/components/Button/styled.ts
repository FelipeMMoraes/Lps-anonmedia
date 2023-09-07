import styled from 'styled-components'

const ButtonContainer = styled.div``

const Button = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  padding: 16px;
  border-radius: 8px;

  text-align: left;
  cursor: pointer;

  background-color: red;
  color: black;

  &.active {
    background-color: blue;
    color: pink;
  }
`

export { Button, ButtonContainer }
