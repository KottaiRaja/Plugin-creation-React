import { Link } from "react-router-dom";
import { Menu } from "../menu/menu";
import { Nav1 } from "../Navbar/nav1";
import './edu.css'

export function Edu(){
    return(
        <div>
            <Nav1/>
            <Menu/>
            <div className="container con2-div">
                <div className="row">
                    <div className="col-lg-10 col-12 col-sm-12 col-md-12 table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="text-center bg-dark text-white">
                                <th colSpan={2}><h2>Education</h2></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4}>UG</td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="ug" id="ug" className="form-control" placeholder="College Name"/></td>
                                </tr>
                                <tr>
                                     <td><input type='text' name="ug_spec" id="ug_spec" className="form-control" placeholder="Specification"/></td>
                                </tr>
                                <tr>
                                    <td><input type='percentage' name="ug_per" id="ug_per" className="form-control" placeholder="Overall Percentage" /></td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>HSC</td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="hsc" id="hsc" className="form-control" placeholder="HSC School Name"/></td>
                                </tr>
                                <tr>
                                    <td><input type='percentage' name="hsc_per" id="hsc_per" className="form-control" placeholder="Overall Percentage" /></td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>SSLC</td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="sslc" id="sslc" className="form-control" placeholder="SSLC School Name"/></td>
                                </tr>
                                <tr>
                                    <td><input type='percentage' name="sslc_per" id="sslc_per" className="form-control" placeholder="Overall Percentage" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='text-center'><Link to='/skill'><button className="btn btn-primary">Submit</button></Link></td>
                                </tr>
                            </tbody>
                             
                        </table>

                    </div>
                     
                </div>

            </div>
        </div>
    )
}