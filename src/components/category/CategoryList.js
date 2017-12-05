import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BlogAPI from '../../utils/api'



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



export default CategoryList;
