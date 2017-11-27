import React, { Component } from 'react';
import * as BlogAPI from '../../utils/api'

class CategoryList extends Component {
  state = {
    categories: []
  }

  componentDidMount = () => {      
    /*
    BlogAPI.getCategories().then((data) => {        
      this.setState((state) => ({
        categories: data.categories
      }))
    })
    */    
  }

  render() {    
    const { categories } = this.state
    console.log("categories",categories)
    return (
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
          <div className="sidebar-module">
            <h4>Categories</h4>
            <ol className="list-unstyled">
              {categories.map((item) => (
                  <div key={item.name}>
                  <li><a href={item.name}>{item.name}</a></li>
                  </div>
              ))}          
            </ol>
          </div>
        </aside>
    );
  }
}

export default CategoryList;
