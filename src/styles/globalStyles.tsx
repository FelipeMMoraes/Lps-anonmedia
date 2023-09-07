import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body { 
    font-family: 'Sora', sans-serif;

    -webkit-font-smoothing: antialiased;
    
    &::-webkit-scrollbar{
      width: 12px;
    }
    
    &::-webkit-scrollbar-track{
    }

    &::-webkit-scrollbar-thumb{

    }
  }

`
export { GlobalStyle }
