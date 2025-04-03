import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/auth/Login'
import DashboardLaout from './layout/DashboardLaout'
import { Dashboard } from './pages/main/dashboard'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<DashboardLaout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
