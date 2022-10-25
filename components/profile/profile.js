import { Link } from "react-router-dom";
import { Menu } from "../menu/menu";
import { Nav1 } from "../Navbar/nav1";
import './profile.css'

export function Profile(){
    return(
        <div>
            <Nav1/>
            <Menu/>
           
            <div className="container con1-div">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="col-lg-10 col-12 col-md-12 col-sm-12 table-responsive">
                        <table className="table table-bordered">
                            <thead className="text-center bg-dark text-white">
                                <th colSpan={2}><h2>Profile</h2></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td><input type='text' id="name" name="name" className='form-control' placeholder="FullName" /></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input type='email' id="email" name="email" className='form-control' placeholder="Email Id"  /></td>
                                </tr>
                                <tr>
                                    <td>Number</td>
                                    <td><input type='number' id="number" name="number" className='form-control' placeholder="Phone Number"  /></td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td><input type='address' id="address" name="address" className='form-control' placeholder="Address" /></td>
                                </tr>
                                <tr>
                                    <td className="text-center" colSpan={2}><Link to='/edu'><button className="btn btn-primary">Submit</button></Link></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}