import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg nav_cover navMain">
  <div class="container-fluid nav_main">
    <NavLink to='/'>
      <img src="../assests/logo.png" alt="" height="50"/>
    </NavLink>
    <p class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i></p>
      

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li>
       
        <Link
spy={true} to={"service"} smooth={true} >
   <p className="nav-item nav-link  text-dark  " >Solutions </p>
</Link>
        </li>
   <li>   
   <NavLink to='/audience'>
   
   <p className="nav-item nav-link   text-dark  ">Audience </p>
</NavLink>
</li>



<li>    <Link
spy={true} to={"customers"} smooth={true} >
   <p className="nav-item nav-link   text-dark  " href="">History <span class="sr-only">(current)</span></p>
</Link></li>
<li>    <Link
spy={true} to={"contact"} smooth={true}>
   <p className="nav-item nav-link   text-dark  " href="">Contact <span class="sr-only">(current)</span></p>
</Link></li>

      </ul>
    </div>
  </div>
</nav>
  
    </>
  )
}
