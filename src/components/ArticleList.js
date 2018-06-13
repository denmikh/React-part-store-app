import React, { Component } from 'react';
import Article from './Article'

export default class ArcticleList extends Component {
    render() {
        const articleElements = this.props.articles.map((articles) =>
            <div key = {articles.id} className="article-list__li">
                <Article articles = {articles} />
            </div>)
        return (
            <div className="parts">
                {articleElements}
            </div>
        )
    }
}