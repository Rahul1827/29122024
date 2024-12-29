import React from 'react'
import Header from './Header'
import FarmerLogin from './FarmerLogin'
import FarmerRegistration from './FarmerRegistration'
import AdminLogin from './AdminLogin'
import { Outlet } from 'react-router-dom'
import Services from './Services'
import About from './Products'
import CropDetails from './CropDetails'
import SignInDropDown from './SignInDropDown'
import Contact from './Contact'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'

export default function 
() {
  return (
    <div>

<Header/>

{/* <FarmerLogin/>
<FarmerRegistration/>
<AdminLogin/>
<Services/>
<About/>
<CropDetails/>
<SignInDropDown/>
<Contact/> */}
<Outlet/>
<Footer/> 




        
    </div>
  )
}

