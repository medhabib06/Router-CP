import "./App.css";
import FilterByRate from "./FilterByRate";
import React, {useState} from "react";
import {Button, Card, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import FilterByName from "./FilterByName"
import GOT from "./GOT.jpg"
import Details from "./Details"
import Home from "./Home"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/Details" component={Details}/>
                    <Route path="/" component={Home}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
