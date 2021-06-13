import React from "react";
import axios from "axios";

class GroupsAdd extends React.Component {
    state = {
        'id': '',
        'name': '',
        'description': '',
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = () => {
        const apiUrl = 'http://127.0.0.1:8000/groups/'
        axios.post(apiUrl, {
            "name": this.state.name,
            "description": this.state.description
        })
            .then((response) => {
                window.location = '/groups'
            })
            .catch((error) => console.log(error));

    }


    render() {
        return (
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <td>
                        <input name='name' onChange={this.changeHandler} type='text' className='form-control'/>
                    </td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>
                        <input name='description' onChange={this.changeHandler} type='text' className='form-control'/>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <input type='submit' onClick={this.submitForm} className='btn btn-sm'/>
                    </td>
                </tr>


            </table>
        );

    }

}

export default GroupsAdd;

