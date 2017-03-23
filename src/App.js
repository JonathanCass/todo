import React from 'react'
import './App.css'

var App=React.createClass({
  getInitialState: function() {
    return {
      itemsList : [
        'Wake Up',
        'Brush Teeth',
        'Pet Bird',
        'Exercise'
      ]
    }
  },
  render: function() {
    return (
      <div className="App">
        <form className="inputForm">
          <input type="text" className="inputBox" placeholder="Enter Item To Do Here"/><br />
        </form>
          <ul>
            {this.state.itemsList.map(function(item){
            return <li>{item}</li>                  
          })}
        </ul>
      </div>
    )
  }
})

export default App;
