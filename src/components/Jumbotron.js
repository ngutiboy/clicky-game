import React from 'react';
import imagefont from '../images/img1.jpg';

function Jumbotron() {
   return(
       <div className='fluid-container'>
          <img className='myImage' src={imagefont} alt='imagefont' />
           <div className='images'>
               <h1>Start Game!</h1>
               <p>You can only click on an image once to gain points. Double-clicking takes you back to zero!
               </p>
          </div>
       </div>
   )
}

export default Jumbotron;
