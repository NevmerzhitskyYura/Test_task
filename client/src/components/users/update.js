import React from "react";
import axios from "axios";

class Update extends React.Component {
    username = React.createRef()
    group = React.createRef()
    state = {
        'id': '',
        'username': '',
        'created': '',
        'group': '',
        groupData: [],
        userData: []
    }


    getGroupData = () => {
        const apiUrl = 'http://127.0.0.1:8000/groups/'
        axios.get(apiUrl)
            .then((response) => {
                this.setState({groupData: response.data})
            })
            .catch((error) => console.log(error));


    }

    getUserData = () => {
        const id = this.props.match.params.id
        const apiUrl = 'http://127.0.0.1:8000/users/' + id
        axios.get(apiUrl)
            .then((response) => {
                this.setState({userData: response.data})
            })
            .then((response) => {
                console.log(this.state.userData)
            })
            .catch((error) => console.log(error));


    }


    componentDidMount() {
        this.getGroupData();
        this.getUserData();
    }

    submitForm = () => {
        const id = this.props.match.params.id
        const apiUrl = 'http://127.0.0.1:8000/users/' + id
        axios.put(apiUrl, {
            "username": this.username.current.value,
            "group": this.group.current.value
        })
            .then((response) => {
                window.location = '/'
            })
            .catch((error) => console.log(error));
    }


    render() {
        const groupData = this.state.groupData
        const options = groupData.map((group =>
                <option value={group.name} onChange={this.changeHandler}>
                    {group.name}
                </option>
        ))

        return (
            <table className="table table-bordered">
                <tr>
                    <th>Username</th>
                    <td>
                        <input defaultValue={this.state.userData.username} name='username' ref={this.username}
                               type='text' className='form-control'/>
                    </td>
                </tr>
                <tr>
                    <th>Group</th>
                    <td>
                        <select defaultValue={this.state.userData.group} name='group' ref={this.group}
                                className="form-control">
                            <option selected>{this.state.userData.group}</option>
                            <option></option>
                            {options}
                        </select>

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

export default Update;

