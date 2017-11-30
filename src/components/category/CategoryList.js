import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as BlogAPI from '../../utils/api'
import { setCategories } from '../../actions/index';


class CategoryList extends Component {
  state = {
    categories: []
  }

  componentDidMount = () => {        
    BlogAPI.getCategories().then((data) => {    
      this.setState((state)=>({
        categories: data.categories
      }))
    })
  }

  render() {    
    const { categories } = this.state
    return (
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
          <div className="sidebar-module">
            <h4>Categories</h4>
            <ol className="list-unstyled">
              <Link to={"/"}>All</Link>
              {categories && categories.map((item) => (
                  <div key={item.name}>
                  <Link to={"/"+item.name}>{item.name}</Link>
                  </div>
              ))}          
            </ol>
          </div>
        </aside>
    );
  }
}

const mapStateToProps =  (state, props) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (data) => {
      console.log('setCategories')
      dispatch(setCategories(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
