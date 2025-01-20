import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './components/app/App'
import HomePage from './pages/homePage/HomePage'
import AccountPage from './pages/accountPage/AccountPage'
import CommunityPage from './pages/communityPage/CommunityPage'
import SettingsPage from './pages/settingsPage/SettingsPage'
import GlobalStyle from './utils/GlobalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
            <App>
                <GlobalStyle />

                <Routes>
                    { /* ? après le segment dynamique pour le rendre optionnel */ }
                    <Route path="/:userId?" element={ <HomePage /> } />
                    <Route path="/account" element={ <AccountPage /> } />
                    <Route path="/community" element={ <CommunityPage /> } />
                    <Route path="/settings" element={ <SettingsPage /> } />
                </Routes>
            </App>
      </HashRouter>
  </StrictMode>,
)
