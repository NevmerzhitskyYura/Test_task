import React from "react";
import axios from "axios";

class GroupsUpdate extends React.Component {
    name = React.createRef()
    description = React.createRef()
    state = {
        groupData: []
    }


    getGroupData = () => {
        const id = this.props.match.params.id
        const apiUrl = 'http://127.0.0.1:8000/groups/' + id
        axios.get(apiUrl)
            .then((response) => {
                this.setState({groupData: response.data})
            })
            .catch((error) => console.log(error));


    }


    componentDidMount() {
        this.getGroupData();
    }

    submitForm = () => {
        const id = this.props.match.params.id
        const apiUrl = 'http://127.0.0.1:8000/groups/' + id
        axios.put(apiUrl, {
            "name": this.name.current.value,
            "description": this.description.current.value
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
                        <input defaultValue={this.state.groupData.name} ref={this.name}
                               type='text' className='form-control'/>
                    </td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>
                        <input defaultValue={this.state.groupData.description} ref={this.description}
                               type='text' className='form-control'/>
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

export default GroupsUpdate;

