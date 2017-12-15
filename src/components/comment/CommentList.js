import React, { Component } from 'react';
import Modal from 'react-modal';
import CommentForm from '../form/CommentForm'

class CommentList extends Component {
  state = {
    showModal: false, 
    comment: undefined
  }

  handleOpenModal = (comment) => {
    console.log('handleOpenModal', comment)  
    this.setState({ 
        showModal: true, 
        comment: comment
    });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { comments } = this.props
    console.log(comments)
    return (
        <div>
            <ul>
                {comments && comments.map(comment => (
                    <li key={comment.id}>{comment.author} says: {comment.body} | votes: {comment.voteScore} | <a href="#" onClick={() => {this.handleOpenModal(comment)}}>Edit</a> | <a href="#" onClick={e => {e.preventDefault(); this.props.onCommentDelete(comment) }}>Delete</a> | <a href="#" onClick={e => {e.preventDefault();this.props.onVoteComment(comment.id, 'upVote')}}>up vote</a> <a href="#" onClick={e => {e.preventDefault();this.props.onVoteComment(comment.id, 'downVote')}}>down vote</a>
                    </li>
                ))}
            </ul>
            <Modal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example">
                <CommentForm comment={this.state.comment} edit={true} handleCloseModal={this.handleCloseModal} />
                <button onClick={this.handleCloseModal}>Close Modal</button>
            </Modal>            
        </div>
    );
  }
}

export default CommentList;
