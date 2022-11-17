import React from 'react'



//img 
import  firstMeet from  '../assets/images/meet-2.jpg'



const FeatherColumn = () => {


  return (
    <div className='row align-align-items-center justify-content-center ' >

      <div className='col-lg-6' >
        <img src={firstMeet} alt="meet "  className='img-fluid  f-meetImg  S-meetImg d-none mx-auto d-md-block' />
      </div>

    <div  className='col-lg-6' >


         <h1 className='feather-title' >  We Are Creativity   </h1> 

         <div className='d-lg-flex Feather-box ' >

          <div  className=' py-sm-5 py-lg-0 ' >
          <i class="fa-sharp fa-solid fa-chart-simple"></i>
             <h2> Global Marketing  </h2>
             <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
         </div>
        
           <div >
           <i class="fa-solid fa-plane"></i>
            <h2> Freight Services  </h2> 
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
           </div>
         </div >
        
        
         <div className='d-lg-flex   Feather-box  ' >
          <div className=' py-sm-5 py-lg-0 ' >
          <i class="fa-solid fa-calendar-days"></i>
             <h2> Events   </h2>
             <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
         </div>
        
           <div >
           <i class="fa-solid fa-users-viewfinder"></i>
            <h2>Communication</h2> 
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
           </div>
        
        
         </div >
    </div>
         
    
        </div  >  
  )
}

export default FeatherColumn
