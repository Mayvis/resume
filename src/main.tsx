import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global, css } from '@emotion/react'
import reset from './utils/reset'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={css`
        // import reset css globally
        ${reset}

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
    <App />
  </React.StrictMode>
)
