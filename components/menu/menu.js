import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import './menu.css'

export function Menu(){
    return(
        <div>
      
      <div class="sidebar bg-dark">
      <div className='sidebar_div'>
          <Link to='/'><h5>Dashboard</h5></Link>
          <Link to='/Profile'><h5>Profile</h5></Link>
          <Link to='/edu'><h5>Education</h5></Link>
          <h5>About</h5>
      </div>
      </div>
                

         

               

           
        </div>
    );
}