
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Landingpage from '@/sitepages/Landingpage'
import SignUpPage from '@/sitepages/authpage/signuppage'
import SignInPage from '@/sitepages/authpage/signinpage'
import About from '@/sitepages/accesspage/About'
import Blogs from '@/sitepages/accesspage/Blogs'
import Services from '@/sitepages/accesspage/Services'
import Terms from '@/sitepages/accesspage/Terms'
import Privacy from '@/sitepages/accesspage/Privacy'
import Dashboard from '@/sitepages/clientpage/Dashboard'
import VotingEvent from '@/sitepages/clientpage/VotingEvent'
import AccountSettings from '@/sitepages/clientpage/AccountSettings'
import Transactions from '@/sitepages/clientpage/Transactions'
import VotingEventCategories from '@/sitepages/clientpage/VotingEventCategories'
import VotingCategoryContenders from '@/sitepages/clientpage/VotingCategoryContenders'
import NotFound from '@/sitepages/errorpage/NotFound'
import DepositPage from '@/sitepages/fundspage/DepositPage'
import WithdrawalPage from '@/sitepages/fundspage/WithdrawalPage'
import ReportIssue from '@/sitepages/clientpage/ReportIssue'
import EventCheckout from '@/sitepages/voterpages/EventCheckout'
import CategoryCheckout from '@/sitepages/voterpages/CategoryCheckout'


function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
     
      <Routes>
        <Route path='/' element={<Landingpage />} />

        <Route path="auth">
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route path="clientpage">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="votingevents" element={<VotingEvent />} />
          <Route path="eventcategory/:id" element={<VotingEventCategories />} />
          <Route path="eventcontenders/:id" element={<VotingCategoryContenders />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accountsettings" element={<AccountSettings />} />
          <Route path="reportissue" element={<ReportIssue />} />
        </Route>

        <Route path="voterpage">
          <Route path="eventcheckout/:id" element={<EventCheckout />} />
          <Route path="categorycheckout/:id" element={<CategoryCheckout />} />
        </Route>

        <Route path="accesspage">
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        <Route path="fundspage">
          <Route path="depositfunds" element={<DepositPage />} />
          <Route path="withdrawfunds" element={<WithdrawalPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
