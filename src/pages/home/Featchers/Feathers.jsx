import React from 'react'



//css
import './featchers.css'

// component 
import FeatherColumn from '../../../components/FeatherColumn'

//img 
import  firstMeet from  '../../../assets/images/meet-3.jpg'

  

const Feathers = () => {
  return (
    
    <section  id='Feathers' > 

    <div className="container-fluid">
    <div className="Feathers-content   ">


    <div className='row align-align-items-center justify-content-center row-1' >



<div  className='col-lg-6' >


   <h1 className='feather-title' >  We Are Creativity   </h1> 

   <div className='d-lg-flex Feather-box ' >

     <div     className=' F-box-content  py-5 py-lg-0   '  >
      <i class="fa-solid fa-wand-magic-sparkles"></i>
         <h2> Modern Design  </h2>
         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
     </div>
    
       <div   className=' F-box-content  ' >
       <i class="fa-solid fa-mobile-screen"></i>
        <h2> Mobile Friendly  </h2> 
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
       </div> 
   </div >
  
  
   <div className='d-lg-flex   Feather-box  ' >

   <div  className=' F-box-content  py-5 py-lg-0 ' >
       <i class="fa-solid fa-thumbs-up"></i> 
          <h2> Solutions   </h2>
         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
      </div>
    
        <div className=' F-box-content  ' >
        <i class="fa-solid fa-lightbulb"></i>
         <h2> Creative   </h2> 
         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
       </div>
  
   </div >
</div>


<div className='col-lg-6' >
  <img src={firstMeet} alt="meet "  className='img-fluid  f-meetImg   d-none mx-auto d-md-block ' />
</div>
   

  </div  >  

    {/* row 2  */}

    <FeatherColumn/>
          
    </div> 


    </div>

    </section> 
  )
}

export default Feathers



//  <section  id='Feathers' > 

// <div className="container-fluid">
// <div className="Feathers-content   ">


// <div className='row align-align-items-center justify-content-center  row-1' >

// <div  className='col-lg-6' >


//      <h1 className='feather-title' >  We Are Creativity   </h1> 

//      <div className='d-lg-flex Feather-box ' >

//       <div     className=' F-box-content    '  >
//       <i class="fa-solid fa-wand-magic-sparkles"></i>
//          <h2> Modern Design  </h2>
//          <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
//      </div>
    
//        <div   className=' F-box-content  ' >
//        <i class="fa-solid fa-mobile-screen"></i>
//         <h2> Mobile Friendly  </h2> 
//         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
//        </div>
//      </div >
    
    
//      <div className='d-lg-flex   Feather-box  ' >
//       <div  className=' F-box-content' >
//       <i class="fa-solid fa-thumbs-up"></i> 
//          <h2> Solutions   </h2>
//          <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
//      </div>
    
//        <div className=' F-box-content  ' >
//        <i class="fa-solid fa-lightbulb"></i>
//         <h2> Creative   </h2> 
//         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque? </span>
//        </div>
    
    
//      </div >
// </div>
     
//   <div className='col-lg-6' >
//     <img src={firstMeet} alt="meet "  className='img-fluid  f-meetImg  d-none  d-md-block ' />
//   </div>
  
//     </div  >  

// {/* row 2  */}

//  <FeatherColumn/>
      
// </div> 


// </div>

// </section>  