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
        <form className="inputForm">
          <input type ="text" className ="inputBox" placeholder ="Enter Item To Do Here"/><br />
        </form>
      </div>
    )
  }
})

export default App;
