import React, {Component} from "react";
import './css/bootstrap.min.css';
import UsersList from './components/users/usersList'
import UsersAdd from './components/users/usersAdd'
import UsersUpdate from './components/users/usersUpdate'
import GroupsList from './components/groups/groupsList'
import GroupsAdd from "./components/groups/groupsAdd";
import GroupsUpdate from "./components/groups/groupsUpdate";
import {Switch, Route} from 'react-router-dom'
import Navbar from "./components/navbar";


class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    <Route path='/users' component={UsersList} exact/>
                    <Route path='/users/add' component={UsersAdd}/>
                    <Route path='/users/update/:id' component={UsersUpdate}/>
                    <Route path='/groups' component={GroupsList} exact/>
                    <Route path='/groups/add' component={GroupsAdd}/>
                    <Route path='/groups/update/:id' component={GroupsUpdate}/>

                </Switch>
            </div>
        );
    }
}

export default App;


