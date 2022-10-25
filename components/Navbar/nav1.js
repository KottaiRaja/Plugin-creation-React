import 'bootstrap/dist/css/bootstrap.css';
import logo from '../sign_components/logo.png';
import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import './nav1.css'


export function Nav1(){
    return(
      <div>
        <div>
            <nav class="navbar navbar-light bg-dark nav_div">
            
                <img src={logo} width="100" height="60" class="d-inline-block align-top" alt=""/>

                <Link to='/'><button type='button' className='btn btn-danger'>Logout</button></Link>
            </nav>
           
        </div> 
    </div>
    );
}