import React from "react";
import axios from "axios";

class Add extends React.Component {
    state = {
        'id':'',
        'username':'',
        'created':'',
        'group':'',
        groupData:[]
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    getGroupData = () => {
    const apiUrl = 'http://127.0.0.1:8000/groups/'
    axios.get(apiUrl)
        .then((response) => {
            this.setState({groupData: response.data})
        })
        .catch((error) => console.log(error));


    }

        componentDidMount() {
        this.getGroupData()
    }

    submitForm = () => {
        const apiUrl = 'http://127.0.0.1:8000/users/'
        axios.post(apiUrl,{
                "username" : this.state.username,
                "group" : [this.state.group]
              }).catch((error) => console.log(error));
        console.log(this.state.username)
        console.log(this.state.group)
    }


    render() {
        const groupData = this.state.groupData
        const options = groupData.map((group =>
                <option value={group.id} onChange={this.changeHandler}>
                    {group.name}
                </option>
        ))
        return (
            <table className="table table-bordered">
                <tr>
                    <th>Username</th>
                    <td>
                        <input name='username' onChange={this.changeHandler} type='text' className='form-control'/>
                    </td>
                </tr>
                <tr>
                    <th>Group</th>
                    <td>
                        <select name='group'  onChange={this.changeHandler} className="form-control">
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

export default Add;

{/*<th>Username</th>*/
}
{/*<th>Created</th>*/
}
{/*<th>Group</th>*/
}