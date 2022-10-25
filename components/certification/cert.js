import 'bootstrap/dist/css/bootstrap.css'


export function Cert(){
    return(
        <div>
            <div className='constainer'>
                <div className='row'>
                    <div className='table-responsive'>
                        <table className='table table-bordered col-lg-6'>
                            <thead className='bg-dark text-center'>
                                <th colSpan={2}><h2>Certification</h2></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Certification</td>
                                    <td><input type='text' name='cert' id='cert' /></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </div>
    )
}