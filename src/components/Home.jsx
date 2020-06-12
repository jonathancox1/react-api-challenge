import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getLatestImage() {
        fetch('https://xkcd.now.sh/?comic=latest')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    num: data.num,
                    imageURL: data.img,
                    alt: data.alt,
                    title: data.title
                });
            })
    }

    componentDidMount() {
        this.getLatestImage();
    }

    render() {
        return (
            <div>
                <Link to='/'><button className="latest">Latest</button></Link>
                &nbsp;
                <Link to='/search'><button className="search">Search</button></Link>
                <br />
            </div>
        )
    }
}
