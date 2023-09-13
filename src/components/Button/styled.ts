import styled from 'styled-components'
import { ButtonProps } from './types'

const ButtonContainer = styled.div``

const Button = styled.button<ButtonProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 460px;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  padding: 16px;
  border-radius: 8px;

  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  background-color: ${(props) => props.backgroundColor || '#c8d429'};
  color: ${(props) => props.textColor || '#0d271e'};

  transition: ease-in 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#eefc35'};
  }
`

export { Button, ButtonContainer }
