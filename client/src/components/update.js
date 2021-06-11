import React from "react";

const Update = () => {
    return (
        <table className="table table-bordered">
            <tr>
                <th>Id</th>
                <td>
                    <input type='text' className='form-control'/>
                </td>
            </tr>
            <tr>
                <th>Username</th>
                <td>
                    <input type='text' className='form-control'/>
                </td>
            </tr>
            <tr>
                <th>Created</th>
                <td>
                    <input type='text' className='form-control'/>
                </td>
            </tr>
            <tr>
                <th>Created</th>
                <td>
                    <input type='text' className='form-control'/>
                </td>
            </tr>
            <tr>
                <th>Group</th>
                <td>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                </td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <input type='submit' className='btn btn-sm'/>
                </td>
            </tr>


        </table>
    );

}

export default Update;