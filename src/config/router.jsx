import {  Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Router() {
    return (
        <>
        <Navbar/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='signup' element={<SignUp/>}/> */}
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>

    )
}

export default Router;