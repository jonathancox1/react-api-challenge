import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }

    searchImage = (data) => {
        let num = this.state.num;
        fetch(`https://xkcd.now.sh/?comic=${num}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    imageURL: data.img,
                    alt: data.alt,
                    title: data.title
                })
            })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.searchImage();
    }

    onChange = (e) => {
        e.preventDefault();
        let num = Number(e.target.value);
        this.setState({ num: num })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input className="searchInput" type="text" onChange={this.onChange}></input>
                    <button className="searchSubmit" type="submit">Submit</button>
                </form>
                <img src={this.state.imageURL} className="latestImage" title={this.state.alt} alt={this.state.title}></img>
            </div>
        )
    }
}
