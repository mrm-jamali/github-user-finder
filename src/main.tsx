import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import FavoriteProvider from './context/FavoriteContext.tsx'
import SearchContext from './context/SearchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoriteProvider>
      <SearchContext>
  <HashRouter>
      <App />
   </HashRouter>
    </SearchContext>
    </FavoriteProvider>
  
  </StrictMode>,
)
