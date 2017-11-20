import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/Header'
import BlogPost from '../blog/BlogPost'
import CategoryList from '../category/CategoryList'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <main role="main" class="container">
            <div class="row">
              <div class="col-sm-8 blog-main">
                <BlogPost></BlogPost>                
              </div>
              <CategoryList />
            </div>
          </main>        
      </div>
    );
  }
}

export default App;
