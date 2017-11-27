import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/Header'
import BlogPost from '../blog/BlogPost'
import CategoryList from '../category/CategoryList'
import { connect } from 'react-redux'
import {getCategories} from '../../actions'


class App extends Component {  
  state = {
    categories: []
  }
  render() {
    this.props.fetchCategories();    
    
    return (
      <div>
        <Header></Header>
          <main role="main" className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                <BlogPost></BlogPost>                
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

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchCategories: () => dispatch(getCategories([1,2,3]))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
