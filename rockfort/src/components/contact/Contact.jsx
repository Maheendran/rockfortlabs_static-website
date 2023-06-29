import React from 'react'
import '../contact/Contact.css'
export const Contact = () => {
  return (
    <>
    
<div className="container" id='contact'>
    <h2 className='text-center mt-5 mb-4 text_bold'>Contact</h2>

    <div className="row">
        <div className="col-12 col-sm-8 contact_img">
        <img className='img-fluid ' src="../assests/RFLMap.gif" alt="" />
{/* <img className='img-fluid ' src="https://s3.us-west-2.amazonaws.com/optconnectmarketing-uploads/images/Contact-Illustration-02.png" alt="" /> */}
        </div>
        <div className="col-10 col-sm-4 m-auto contact_form">

        <input type="text" placeholder='name' />
<input type="email" placeholder='email' />
<input type="number" placeholder='mobile' />
<textarea name="message" id="" cols="30" rows="10" placeholder='message'></textarea>
<button>submit</button>
</div>
    </div>
</div>
    </>
  )
}
