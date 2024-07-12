import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div class="main">
    <div class="footer">
    <footer class="text-center text-lg-start bg-black text-muted">
   
   <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
     <div class="me-5 d-none d-lg-block">
       <span style={{color: "white"}}>Get connected with us on social networks:</span>
     </div>
    
 
     
     <div>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-facebook-f"></i>
       </a>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-twitter"></i>
       </a>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-google"></i>
       </a>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-instagram"></i>
       </a>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-linkedin"></i>
       </a>
       <a href="" class="me-4 text-reset">
         <i class="fab fa-github"></i>
       </a>
     </div>
    
   </section>
   
 
    <section class="">
     <div class="container text-center text-md-start mt-5">
   
       <div class="row mt-3">
     
         <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
           <h6 class="text-uppercase fw-bold mb-4" style={{color: "white"}}>
             <i class="fas fa-gem me-3"></i>CHAPTER AND VERSES
           </h6>
           <p style={{color: "white"}}>
             Here you can use rows and columns to organize your footer content. Lorem ipsum
             dolor sit amet, consectetur adipisicing elit.
           </p>
         </div>
       
 
      
         <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
           <h6 class="text-uppercase fw-bold mb-4" style={{color: "white"}}>
             Products
           </h6>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Angular</a>
           </p>
           <p style={{color: "white"}}> 
             <a href="#!" class="text-reset" style={{color: "white"}}>React</a>
           </p>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset"  style={{color: "white"}}>Vue</a>
           </p>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Laravel</a>
           </p>
         </div>
        
        
         <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
           <h6 class="text-uppercase fw-bold mb-4" style={{color: "white"}}>
             Useful links
           </h6>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Pricing</a>
           </p>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Settings</a>
           </p>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Orders</a>
           </p>
           <p style={{color: "white"}}>
             <a href="#!" class="text-reset" style={{color: "white"}}>Help</a>
           </p>
         </div>
         
 
        
         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
           <h6 class="text-uppercase fw-bold mb-4" style={{color: "white"}}>Contact</h6>
           <p style={{color: "white"}}><i class="fas fa-home me-3"></i> India</p>
           <p style={{color: "white"}}>
             <i class="fas fa-envelope me-3"></i>
             cv@example.com
           </p>
           <p style={{color: "white"}}><i class="fas fa-phone me-3"></i> + 91 9876543110</p>
           <p style={{color: "white"}}><i class="fas fa-print me-3"></i> + 91 9876545321</p>
         </div>
       
       </div>
       
     </div>
   </section>
   
 
  
   <div class="text-center p-4 bg-black" style={{color: "white"}}>
     © 2021 Copyright:
     <a class="text-reset fw-bold" href="https://mdbootstrap.com/" style={{color: "white"}}>Chapter&Verses.com</a>
   </div>
  
 </footer>
 
 </div>

    </div>
  );
}

export default Footer;