import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/auth/Login'
import DashboardLaout from './layout/DashboardLaout'
import { Dashboard } from './pages/main/Dashboard'
import PendingOrder from './pages/main/PendingOrder'
import { Refund } from './pages/main/invoicing-management/Refund'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<DashboardLaout />}>
          <Route index element={<Dashboard />} />
          <Route path="pending-orders" element={<PendingOrder />} />
          <Route path="invoicing-management/refund" element={<Refund />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
