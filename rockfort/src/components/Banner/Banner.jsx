import React, { useEffect } from 'react'
import '../Banner/Banner.css'
import ScrollToTop from "react-scroll-to-top";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Navbar } from '../Navbar/Navbar';
export const Banner = () => {
  const headinganimation=useAnimation()
  const{ref,inView}=useInView({
    threshold:0.1
  })
  useEffect(()=>{
if(inView){
  headinganimation.start({
    y:0,
    transition:{
      type:"spring",duration:1,bounce:0.2
    }
  })
}
if(!inView){
  headinganimation.start({y:'-10vw'})
}
  },[inView])
  return (
    <>
 
    <ScrollToTop className='scrolltop' smooth='true' style={{height:"40px",width:"40px",backgroundColor:"white",borderRadius:"50%",
boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

}} />
{/* <div    className='container-fluid dummyhome' ></div> */}
<div id='home'className='container-fluid bannerMain'ref={ref}>
<Navbar/>


<div className="row text-center">
<div className="col-12 col-md-6 col-lg-5 ms-auto banner_heading">
  <motion.h1 animate={headinganimation}>RockFort</motion.h1>
  <motion.h3  animate={headinganimation}>Labs</motion.h3>
  
  <p className='heading_p'>
 is a cutting-edge technology company specializing in AI, ML, and IIoT innovation. We create intelligent systems that analyze complex data and provide actionable insights. Our custom algorithms adapt and learn from vast datasets, empowering clients to make data-driven decisions. 
  With expertise in AI, ML, and IIoT, we develop groundbreaking solutions that drive transformative change 
  across industries. By prioritizing collaboration and understanding client needs, we deliver technologically advanced solutions aligned with business goals. Choose Rockfort Labs to shape a future of innovation and insights.
</p>
</div>
<div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
  {/* <img className='img-fluid' src="https://th.bing.com/th/id/R.5f4f10d1eb3441514a60ccea13575583?rik=zrOQWV0ipWQxrA&riu=http%3a%2f%2fbeyondinfinity.com.au%2fwp-content%2fuploads%2f2018%2f06%2focuk-2017-vr-mid-handson-2.png&ehk=NvY%2b7CZ08eUukCmwC4mkxT62MWH60gMoXbQnrH%2fl1gY%3d&risl=&pid=ImgRaw&r=0" alt="" /> */}
</div>
</div>
</div>
    </>
  )
}
