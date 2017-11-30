import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/Header'
import BlogPost from '../blog/BlogPost'
import CategoryList from '../category/CategoryList'
import { connect } from 'react-redux'
import * as API from '../../utils/api'
import { withRouter, Route } from 'react-router-dom'


class App extends Component {
  state = {
    categories: []
  }

  render() {
    return (
      <div>
        <Header></Header>
          <main role="main" className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                <Route path="/:category" render={({match})=>{
                  return <BlogPost category={match.params.category} />
                }} />
              </div>
              <CategoryList />
            </div>
          </main>
      </div>
    );
  }
}



const mapStateToProps =  (state, props) => ({
  categories: state.categories
})

export default withRouter(connect(mapStateToProps)(App));
