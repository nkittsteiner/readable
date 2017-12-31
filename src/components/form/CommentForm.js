import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as uuid from '../../utils/uuid'
import { addCommentAsync, editCommentAsync } from '../../actions'

class CommentForm extends Component {

  insertComment = (comment) => {
    this.props.doAddCommentAsync(comment)
  }

  editComment(comment){
    this.props.doEditCommentAsync(comment)
    this.props.handleCloseModal()
  }  

  render() {
    const { comment, post_id, edit, comment_id } = this.props
    const formTitle = edit ? "Edit comment" : "Add a comment"
    return (
      <div>
          <form onSubmit={e => {
              e.preventDefault()
              let obj = {
                id: uuid.uuid(),
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
                  parentId: comment.parentId
  
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

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doAddCommentAsync: (comment) => dispatch(addCommentAsync(comment)),
    doEditCommentAsync: (comment) => dispatch(editCommentAsync(comment))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentForm));  
