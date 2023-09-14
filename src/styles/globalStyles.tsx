import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Sora';
  src: local('Sora'), url('../public/fonts/Sora-Bold.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-ExtraBold.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-ExtraLight.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-Light.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-Medium.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-Regular.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-SemiBold.ttf') format('truetype');
  src: local('Sora'), url('../public/fonts/Sora-Thin.ttf') format('truetype');
}

  body { 
    font-family: Sora, sans-serif;

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
