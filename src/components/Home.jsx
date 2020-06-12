import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to='/'><button className="latest btn btn-outline-secondary btn-sm">Latest</button></Link>
                &nbsp;
                <Link to='/search'><button className="search btn btn-outline-secondary btn-sm">Search</button></Link>
                <br />
            </div>
        )
    }
}
