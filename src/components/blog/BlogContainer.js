import React, { Component } from 'react';
import BlogPost from '../blog/BlogPost'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPostsAsync, getCommentsAsync } from '../../actions'
import { withRouter } from 'react-router-dom'

class BlogContainer extends Component {  

  componentDidMount(){
    console.log('componentDidMount', this.props.category , this.props.post_id)
    if(this.props.category && this.props.post_id ){
        this.props.loadComments(this.props.post_id) 
    }
  }

  render() {    
    const { category, posts, post_id, comments } = this.props
    console.log('comments', comments)
    
    return (
        <div>
        <div><Link to="/post/new">Add post</Link></div> 
        <div>Sort by: <a href="#" >Date</a>&nbsp;<a href="#" >Votes</a></div>
        <br />
        {category && post_id && posts.filter(x => x.id === post_id).map((post) => (
            <BlogPost key={post.id} post={post} comments={comments} showForm={true} />
        ))}
        {category && !post_id && posts.filter(x => x.category === category).map((post) => (
            <BlogPost key={post.id} post={post} showForm={false} />
        ))}
        {!category && !post_id && posts.map((post) => (
            <BlogPost key={post.id} post={post} showForm={false} />
        ))}

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
    loadComments: (post_id) => dispatch(getCommentsAsync(post_id))
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogContainer));
