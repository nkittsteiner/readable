import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogAPI from '../../utils/api'
import * as uuid from '../../utils/uuid'
import { addPostAsync, editPostAsync } from '../../actions'

class BlogForm extends Component {
  state = {
    categories: [],
    redirect: false
  }

  componentDidMount = () => {
    BlogAPI.getCategories().then((data) => {    
      this.setState((state)=>({
        categories: data.categories
      }))
    })
  }

  getPostById = (id) => {
    return this.props.posts.filter(x => x.id === id)[0]
  }
  
  insertPost(post){
    //dispatch
    this.props.doAddPostAsync(post)
    this.setState((state)=>({
      redirect: true
    }))
  }

  editPost(post){
    //dispatch
    this.props.doEditPostAsync(post)
    this.setState((state)=>({
      redirect: true
    }))
  }

  render() {
    const { categories, redirect } = this.state
    const { action, id } = this.props
    let redirectHtml = <div></div>
    let title = action === 'edit' ? 'Edit' : 'Create'
    let post = {
      author: undefined,
      body: undefined,
      category: undefined,
      commentCount: undefined,
      deleted: undefined,
      id: undefined,
      timestamp: undefined,
      title: undefined,
      voteScore: undefined
    }

    if(action === 'edit'){
      Object.assign(post, this.getPostById(id))
    }

    if(redirect){
      redirectHtml = <Redirect to={{ pathname: '/'}} />
    }
    return (
      <div>
          {redirectHtml}
          <form onSubmit={e => {
              e.preventDefault()
              let obj = {
                id: !document.forms[0]['id'].value ? uuid.uuid() : document.forms[0]['id'].value,
                timestamp: Date.now(),
                title: document.forms[0]['title'].value,
                body: document.forms[0]['body'].value,
                author: document.forms[0]['author'].value,
                category: document.forms[0]['category'].value,
              }
              console.log(this.context)
              if(action === 'edit'){
                this.editPost(obj)
              }
              else {
                this.insertPost(obj)
              }
              

          }} >
            <h4>{title} Blog Post</h4>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={post.title} placeholder="Once upon a time..." required />
        
            <label htmlFor="body">Body</label>
            <textarea rows="10" cols="30" id="body" name="body" defaultValue={post.body} placeholder="Lorem ipsum dolor..." required />

            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" defaultValue={post.author} placeholder="John Doe" required />            
        
            <label htmlFor="category">Category</label>
            <select id="category" name="category" defaultValue={post.category} required>
              {
                categories.map(category => (
                  <option key={category.name} defaultValue={category.name}>{category.name}</option>
                ))
              }
            </select>
            <input type="hidden" name="id" defaultValue={post.id} />
            <input type="submit" value="Submit" />
          </form>
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
    doAddPostAsync: (post) => dispatch(addPostAsync(post)),
    doEditPostAsync: (post) => dispatch(editPostAsync(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogForm));  
