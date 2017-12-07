import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/Header'
import BlogForm from '../form/BlogForm'
import BlogContainer from '../blog/BlogContainer'
import CategoryList from '../category/CategoryList'
import { connect } from 'react-redux'
import * as BlogAPI from '../../utils/api'
import { withRouter, Route } from 'react-router-dom'
import { getPosts, getPostsAsync } from '../../actions'


class App extends Component {

  componentDidMount = () => {
    this.props.loadPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <Header></Header>
          <main role="main" className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                <Route path="/:categories" render={({match}) => {
                  return <BlogContainer category={match.params.categories} posts={posts} />
                  }} />
                <Route exact path="/" render={({match}) => {
                  return <BlogContainer posts={posts} />
                  }} />
                <Route path="/post/new" render={({match}) => {
                  return <BlogForm action={"new"} formData={{}} />
                  }} />
              </div>
              <CategoryList />
            </div>
          </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: () => dispatch(getPostsAsync())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
