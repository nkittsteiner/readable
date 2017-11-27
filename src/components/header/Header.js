import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="blog-header">
            <div className="container">
            <h1 className="blog-title">Readable</h1>
            <p className="lead blog-description">A ReactJS project for Udacity.</p>
            </div>
        </div>
        </header>          
      </div>
    );
  }
}

export default Header;
