import './App.css';
import {Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import Invoice from './components/Invoice';
import Header from './components/Header';
import InvoiceInfo from './components/InvoiceInfo'
import Info from './components/Info';
import Creatinvoice from './components/CreatInvoice';
import Login from './components/Login';
import {useState} from 'react'
import CheckLogin from './context/checkLogin';
import RequierdAuth from './components/RequierdAuth'

function App() {
  const [userLogin, setUserLogin] = useState(false)

  return (
    <CheckLogin.Provider value={{userLogin, setUserLogin}}>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/login' element={<Login />}/>
        <Route path='/contact' element={<Contact />}/>
        
          <Route path='/create' element={<RequierdAuth >
            <Creatinvoice />
          </RequierdAuth>}>
          </Route>
        
        <Route path='/invoice' element={<Invoice />}>
          <Route index element={<Info />} />
          <Route path=':invoiceNumber' element={<InvoiceInfo />} />
        </Route>
        <Route 
        path='*'
        element={
          <div className="page">
            <h2>Page not found! <br></br>Error 404</h2>
          </div>
        }/>
      </Route>
      
    </Routes>
    </CheckLogin.Provider>
  );
}

export default App;
