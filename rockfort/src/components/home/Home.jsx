import React from 'react'

import { Banner } from '../Banner/Banner'
import { About } from '../About/About'
import '../home/Home.css'
import { Service } from '../service/Service'
import { Customers } from '../Customers/Customers'
import { Contact } from '../contact/Contact'

export const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    
    <Banner/>
    <About/>
    <Service/>
<Customers/>
{/* <Blog/> */}
<Contact/>
    

    
    </>
  )
}
