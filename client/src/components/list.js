import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

class List extends React.Component {
    state = {
        data: []
    }

    getData = () => {
        const apiUrl = 'http://127.0.0.1:8000/users/'
        axios.get(apiUrl)
            .then((response) => {
                this.setState({data: response.data})
            })
            .catch((error) => console.log(error));


    }

    componentDidMount() {
        this.getData()
    }

    render() {
        const userData = this.state.data
        const rows = userData.map((usr) =>
            <tr>
                <td>{usr.id}</td>
                <td>{usr.username}</td>
                <td>{usr.created}</td>
                <td>{usr.group}</td>
                <td>
                    <Link to='/update/1' className='btn btn-info mr-2'>Update</Link>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Created</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );

    }
}


export default List;