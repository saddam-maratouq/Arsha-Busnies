import React from 'react'

//css 
import './About.css'

import businessTeam from '../../../assets/images/teams.jpg'

const About = () => {
  return (
    <section id='About' >
       
        <h1> About Us  </h1>
       
        <div className="container  text-center text-lg-start ">
            <div className="row     ">
                <div className="col-lg-6 About-content ">
                    <h4> Welcome to our company </h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam <br /> in saepe similique quos reiciendis ipsa ullam pariatur illum ad quod? </p>
                    <div className='d-lg-flex A-list-content ' >
                        <ul className=' me-lg-5 F-list ' >
                            <li>Awesome Design</li>
                            <li> Better client services  </li>
                            <li> Creative Design </li>
                            <li> Digital marketing  </li>

                        </ul>

                        <ul className='F-list' >
                            <li> provide services  </li>
                            <li> financial problems </li>
                            <li>  Evaluation services </li>
                            <li>Budget friendly </li>

                        </ul>

                    </div>
                </div>

                <div className="col-lg-5">
                    <img src={businessTeam} alt="" className='img-fluid About-Img d-md-none d-lg-block  ' />
                </div>
            </div>
        </div> 

        <a href="#Feathers">  
        <i class="fa-solid fa-arrow-down  fa-3x  drop-icon "></i>  
        </a>
    </section>
  )
}

export default About

 