import React, { Component } from 'react';

import BookList from '../containers/Book-list';
import BookDetail from '../containers/Book-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-custom">
          <div className="row">
            <BookList />
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
