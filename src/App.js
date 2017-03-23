import React from 'react'
import './App.css'

var styles = {
  input: {
    fontSize: 14,
    color: 'red',
    height: 40,
    width: 400 
  },
  centerBox: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}
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
      <div className="App" style={styles.centerBox}>
        <form className="inputForm">
          <input style={styles.input} type="text" className="inputBox" placeholder="Enter Item To Do Here"/><br />
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
