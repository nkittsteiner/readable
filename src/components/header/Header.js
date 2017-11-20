import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <div class="blog-header">
            <div class="container">
            <h1 class="blog-title">Readable</h1>
            <p class="lead blog-description">A ReactJS project for Udacity.</p>
            </div>
        </div>
        </header>          
      </div>
    );
  }
}

export default Header;
