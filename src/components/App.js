import React, { Component } from 'react';
import Header from './Header'

import ArticleList from './ArticleList'
import articles from '../fixtures'
import '../App.css';

export class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Header />
          <div className="wrapper">
            <ArticleList  articles= {articles} />
          </div>
      </div>
      
    );
  }
}

