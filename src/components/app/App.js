import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header'
import BlogForm from '../form/BlogForm'
import BlogContainer from '../blog/BlogContainer'
import ErrorPage from '../ErrorPage'
import CategoryList from '../category/CategoryList'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { getPostsAsync, getCommentsAsync } from '../../actions'



class App extends Component {

  componentDidMount = () => {
    this.props.loadPosts()    
  }

  NoMatch = () => {
    <div>Error</div>
  }  

  render() {
    const { posts } = this.props
    return (
      <div>
        <Header></Header>
          <main role="main" className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                <Switch>
                  <Route exact path="/:categories" render={({match}) => {
                    return <BlogContainer category={match.params.categories} posts={posts} />
                    }} />
                  <Route exact path="/" render={({match}) => {
                    return <BlogContainer posts={posts} />
                    }} />
                  <Route path="/post/new" render={({match}) => {
                    return <BlogForm action={"new"} />
                    }} />
                  <Route exact path="/post/:post_id/edit" render={({match}) => {
                    return <BlogForm action={"edit"} id={match.params.post_id} />
                    }} />
                  <Route path="/:category/:post_id" render={({match}) => {
                    if(match.params.post_id !== undefined && match.params.post_id !== null){
                      if(posts.length === 0 || posts.filter(x=> x.id === match.params.post_id).length === 0){
                        return <ErrorPage />
                      }
                      else{
                        this.props.loadComments(match.params.post_id)
                        return <BlogContainer category={match.params.category} posts={posts} post_id={match.params.post_id} />
                      }
                    }
                    }} />
                  </Switch>
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
    loadPosts: () => dispatch(getPostsAsync()),
    loadComments: (post_id) => dispatch(getCommentsAsync(post_id)), 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
