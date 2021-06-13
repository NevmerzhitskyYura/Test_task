import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

class GroupsList extends React.Component {
    state = {
        data: []
    }

    getData = () => {
        const apiUrl = 'http://127.0.0.1:8000/groups/'
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
        const apiUrl = 'http://127.0.0.1:8000/groups/' + id
        axios.delete(apiUrl)
            .then((response) => {
                window.location = '/groups'
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    alert('This group have users. You can\'t delete group whis users!')
                }
            })
            .catch((error) => console.log(error));
    }


    render() {
        const groupData = this.state.data
        const rows = groupData.map((group) =>
            <tr>
                <td>{group.id}</td>
                <td>{group.name}</td>
                <td>{group.description}</td>
                <td>
                    <Link to={'groups/update/' + group.id} className='btn btn-info mr-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => this.deleteData(group.id)}>Delete</button>
                </td>
            </tr>
        )
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>

                </table>
                <Link to={'groups/add'}>
                    <div className="col text-center">
                        <button className='btn btn-success btn-lg m-5'>Add new Group</button>
                    </div>

                </Link>

            </div>

        );

    }
}


export default GroupsList;