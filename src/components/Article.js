import React, { Component } from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {articles} = this.props
        return (
            <article>
                <h2>{articles.name}</h2>
                <div>
                    <img src={`images/${articles.img}.jpg`} className="min_image" />
                    <p>{articles.description}</p>
                    <p>{articles.applicability}</p>
                    <h3>{articles.price}</h3>
                </div>
            </article>
        );
    }
}

