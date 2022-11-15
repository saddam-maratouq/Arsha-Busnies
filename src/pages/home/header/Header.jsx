import React from 'react'

//css 
import './header.css'

//img
import businessHeader from '../../../assets/images/business.png'

const Header = () => {
  return (
   <section  className='header' >
        <div className="container">
            <div className="header-content  d-lg-flex justify-content-center  text-md-center text-lg-start    ">
                <div className=' title-content mb-md-5 ' >
                    <h1 className='header-title' > Better Solutions For Your Business </h1>
                    <span> We are team of talented manger making solutions for your business</span>
                    <div>
                        <button> Get Started </button>
                    </div>
                </div>

                <img src={businessHeader} alt="business-Img" className='img-fluid header-img ' />

            </div>
        </div> 

        <a href="#brand">  
        <i class="fa-solid fa-arrow-down  fa-3x  drop-icon "></i>  
        </a>
   </section>
  )
}

export default Header