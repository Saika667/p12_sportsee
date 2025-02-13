import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './components/app/App'
import HomePage from './pages/homePage/HomePage'
import AccountPage from './pages/accountPage/AccountPage'
import CommunityPage from './pages/communityPage/CommunityPage'
import SettingsPage from './pages/settingsPage/SettingsPage'
import GlobalStyle from './utils/GlobalStyle'
import ErrorPage from './pages/errorPage/ErrorPage'
import MaintenancePage from './pages/maintenancePage/MaintenancePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
            <App>
                <GlobalStyle />

                <Routes>
                    { /* ? après le segment dynamique pour le rendre optionnel */ }
                    <Route path="/:userId?" element={ <HomePage /> } />
                    <Route path="/account" element={ <AccountPage /> } />
                    <Route path="/community" element={ <CommunityPage /> } />
                    <Route path="/settings" element={ <SettingsPage /> } />
                    <Route path="/maintenance" element={ <MaintenancePage /> } />
                    <Route path="/404" element={ <ErrorPage /> } />
                    <Route path="*" element={ <ErrorPage /> } />
                </Routes>
            </App>
      </BrowserRouter>
  </StrictMode>,
)
