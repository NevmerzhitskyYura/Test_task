import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import moment from "moment";

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

    deleteData = (id) => {
        const apiUrl = 'http://127.0.0.1:8000/users/' + id
        axios.delete(apiUrl)
            .then((response) => {
                window.location = '/'
            })
            .catch((error) => console.log(error));
    }



    render() {
        const userData = this.state.data
        const rows = userData.map((usr) =>
            <tr>
                <td>{usr.id}</td>
                <td>{usr.username}</td>
                <td>{moment(usr.created).format('DD-MMM-YYYY-HH-mm')}</td>
                <td>{usr.group}</td>
                <td>
                    <Link to={'/update/'+usr.id} className='btn btn-info mr-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => this.deleteData(usr.id)}>Delete</button>
                </td>
            </tr>
        )
        return (
            <div>
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
                <Link to={'/add'}>
                    <div className="col text-center">
                        <button className="mx-auto" className='btn btn-success btn-lg m-5'>Add new User</button>
                    </div>

                </Link>

            </div>

        );

    }
}


export default List;