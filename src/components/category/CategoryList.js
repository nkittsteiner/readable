import React, { Component } from 'react';

class CategoryList extends Component {
  render() {
    return (
        <aside class="col-sm-3 ml-sm-auto blog-sidebar">
          <div class="sidebar-module">
            <h4>Categories</h4>
            <ol class="list-unstyled">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Ipsum</a></li>
              <li><a href="#">Dolor</a></li>
            </ol>
          </div>
        </aside>
    );
  }
}

export default CategoryList;
