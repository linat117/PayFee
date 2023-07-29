import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/Login/LoginPage'
import StudentsPage from './Components/Students/StudentsPage'
import ReportPage from './Components/Report/ReportPage'
import PaymentPage from './Components/Payment/PaymentPage'
import ReceiptsPage from './Components/Receipts/ReceiptsPage'

 
function App() {

  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
    </Routes>
    <Routes>
      <Route path='/Students' element={<StudentsPage/>}/>
    </Routes>
    <Routes>
      <Route path='/Report' element={<ReportPage/>}/>
    </Routes>
    <Routes>
      <Route path='/Receipts' element={<ReceiptsPage/>}/>
    </Routes>
    <Routes>
      <Route path='/Payment' element={<PaymentPage/>}/>
    </Routes>
    </BrowserRouter> 
  )
}

export default App
