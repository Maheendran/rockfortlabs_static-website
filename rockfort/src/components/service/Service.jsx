import React from 'react'
import '../service/Service.css'

export const Service = () => {
  return (
    <> 
   
<div className="container-fluid" id='service'>
       <div className="col-12 mt-2 text-center ">
            <h2 className='text_bold mb-4'> Solutions</h2>
        </div>
    <div className="row service_row">   
       
        <div className="col-12 col-md-6 col-lg-3 card_main   mx-auto text-center mb-5">
<div className="col-12   service_img" >
    <img src="../assests/Ideation.jpg" alt="" />
</div>

<div className="col-12 service_content ">
    < p>
    Rockfort Labs specializes in AI, ML, and IIoT implementation across industries. We provide tailored solutions and expert guidance on how to leverage these technologies to drive transformative change. Our team works closely with clients to understand their specific industry needs and challenges. Through our expertise in AI, ML, and IIoT, we offer innovative recommendations and strategies to optimize business operations. 
    </p>
</div>
<div className='card_btn'>
    <button >ideation</button>
</div>

        </div>

        <div className="col-12 col-md-6 col-lg-3 card_main mx-auto  text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
    <img  src='../assests/IIoT.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
    Rockfort Labs offers advanced IIoT services, helping businesses leverage the Industrial Internet of Things. We connect devices, collect real-time data, and enable seamless communication between machines and systems. Our solutions enhance operational efficiency, optimize processes, and unlock growth opportunities.
     From sensor integration and data analytics to predictive maintenance and remote monitoring, our IIoT services enable businesses to stay at the 
     forefront of technological innovation.
    </p>
</div>
<div className='card_btn'>

    <button >IIOT solutions</button>
</div>

        </div>
        <div className="col-12  col-md-6 col-lg-3 card_main  mx-auto text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
<img  src='../assests/ML.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
    Rockfortlabs specializes in advanced AI/ML services.
     Our experienced team unlocks valuable insights from your data using artificial intelligence. We develop sophisticated algorithms
      and models for process automation, data-driven decisions,
       and increased efficiency. From predictive analytics to recommendation 
       systems, our services help businesses leverage advanced technologies and stay ahead in the digital landscape.
    </p>
</div>
<div className='card_btn'>
<button >AI/ML solutions </button>

</div>

        </div>
        <div className="col-12  col-md-6 col-lg-3 card_main  mx-auto text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
<img  src='../assests/VR.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
    Rockfort Labs pioneers transformative AR/VR solutions across industries.
     From immersive training simulations to augmented reality marketing campaigns, we merge physical and digital realms to captivate audiences. Our virtual tours transcend boundaries, while VR gaming delivers unparalleled immersion. Collaborate effortlessly with our virtual workspaces, and revolutionize education and healthcare through interactive experiences. Join us at Rockfort Labs as we push the boundaries of AR/VR,
     unlocking new possibilities and delivering exceptional impact in a single line.
    </p>
</div>
<div className='card_btn'>
 <button >AR/VR solutions </button>   
</div>

        </div>
    </div>
</div>


    
    </>
  )
}
