import { formatISO } from 'date-fns'
import { FC, StrictMode } from 'react'
import {createRoot} from 'react-dom/client'

const App:FC = () => {
  return <div></div>
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
