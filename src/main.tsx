import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import Counter from './components/Counter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App >
      <h1>
        Hello World!
      </h1>
      <Counter />
    </App>
  </StrictMode>,
)
