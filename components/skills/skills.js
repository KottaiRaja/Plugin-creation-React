

export function Skill(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <table className="table table-bordered">
                            <thead className="text-center bg-dark text-white">
                                <th colSpan={2}><h2>Personal Skills</h2></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type='text' name="ps1" id="ps1" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="ps2" id="ps2" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="ps3" id="ps3" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                       
                    </div>
                    <div className="col-lg-5">
                        <table className="table table-bordered">
                                <thead className="text-center bg-dark text-white">
                                    <th colSpan={2}><h2>Technical Skills</h2></th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input type='text' name="ts1" id="ts1" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="ts2" id="ts2" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name="ts3" id="ts3" className="form-control" /></td>
                                </tr>

                                </tbody>

                            </table>
                    </div>
                </div>

            </div>
        </div>
    )
}