import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from '../components/Headers'
import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'
import PaymentSuccess from '../pages/PaymentSuccess/Payments'
import Register from '../pages/Register/Register'
import Menu from '../pages/Register/Register'
const Navigation = ()=>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/ login' element={<Login/>}/>
                <Route path='/payment-success' element={<PaymentSuccess/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/register' element={<Register/>}/>

                
            </Routes>
        </Router>
    )
}

export default Navigation