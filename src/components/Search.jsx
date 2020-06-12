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
                    num: data.num,
                    imageURL: data.img,
                    alt: data.alt,
                    title: data.title,
                    year: data.year,
                    day: data.day,
                    month: data.month,
                })
            })
            .catch((error) => {
                console.error('Error', error);
            })
    }

    // componentDidMount() {
    //     this.searchImage();
    //     this.copyright();
    // }

    copyright = () => {
        return `
        Copyright : <small>${this.state.day},${this.state.month} ${this.state.year}</small>
        `
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.searchImage();
        this.copyright();
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
                    <button className="searchSubmit btn btn-outline-secondary btn-sm" type="submit">Submit</button>
                </form>
                <img src={this.state.imageURL} className="latestImage" title={this.state.alt} alt={this.state.title}></img>
                <br />
                <div>
                    <b>{this.state.year}</b>
                </div>
            </div>
        )
    }
}
