import { Menu } from "../menu/menu"
import { Nav1 } from "../Navbar/nav1"
import './dashboard.css';

export function Dash(){
    return(
        <div>
            <Nav1/>
            
            <div className="row mr-0">
                <div className="col-lg-4 dash_menu">
                <Menu/>
                </div>

            </div>
        </div>  
       
    )
}