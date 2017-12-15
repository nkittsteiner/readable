import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as BlogAPI from '../../utils/api'
import * as uuid from '../../utils/uuid'
import { addComment, editComment } from '../../actions'

class CommentForm extends Component {

  insertComment = (comment) => {
    BlogAPI.addComment(comment).then((response)=>{
      console.log(response)
      //dispatch
      this.props.dispatch(addComment(Object.assign(comment,response)))
    })    
  }

  editComment(comment){
    console.log('editComment', comment)
    BlogAPI.editComment(comment).then((response)=>{
      console.log(response)
      //dispatch
      this.props.dispatch(editComment(Object.assign(comment,response)))
      this.props.handleCloseModal()
    })
  }  

  render() {
    const { comment, post_id, edit, comment_id } = this.props
    const formTitle = edit ? "Edit comment" : "Add a comment"
    return (
      <div>
          <form onSubmit={e => {
              e.preventDefault()
              let obj = {
                id: document.forms[0]['id'].value === undefined ? uuid.uuid() : document.forms[0]['id'].value,
                timestamp: Date.now(),
                body: document.forms[0]['body'].value,
                author: document.forms[0]['author'].value,
                parentId: post_id

              }
              if(edit){
                obj = {
                  id: document.forms[1]['id'].value === undefined ? uuid.uuid() : document.forms[1]['id'].value,
                  timestamp: Date.now(),
                  body: document.forms[1]['body'].value,
                  author: document.forms[1]['author'].value,
                  parentId: post_id
  
                }                
                this.editComment(obj)
              }
              else{
                this.insertComment(obj)
              }
              
          }} >
            <h4>{formTitle}</h4>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" defaultValue={comment.author} placeholder="John Doe" required />                    
            
            <label htmlFor="body">Body</label>
            <textarea rows="2" cols="30" id="body" name="body" defaultValue={comment.body} placeholder="Lorem ipsum dolor..." required />

            <input type="hidden" name="id" defaultValue={comment.id} />
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}


export default withRouter(connect()(CommentForm));  
