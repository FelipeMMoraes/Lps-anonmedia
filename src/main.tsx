import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyle } from './styles/globalStyles.tsx'
import { ResetStyle } from './styles/resetStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ResetStyle />
    <GlobalStyle />
  </React.StrictMode>
)
