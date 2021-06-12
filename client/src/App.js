import React, {Component} from "react";
import './css/bootstrap.min.css';
import List from './components/users/list'
import Add from './components/users/add'
import Update from './components/users/update'
import {Switch, Route, Link} from 'react-router-dom'
import Navbar from "./components/users/navbar";


class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    <Route path='/' component={List} exact/>
                    <Route path='/add' component={Add}/>
                    <Route path='/update/:id' component={Update}/>
                </Switch>
            </div>
        );
    }
}

export default App;


