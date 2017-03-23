import React from 'react'
import './App.css'

var App = React.createClass({
  getInitialState: function() {
    return {
      count : 0
    }
  },
  render: function() {
    return (
      <div className="App">
        <p>Test Text</p>
      </div>
    )
  }
})

export default App;
