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
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}
var App=React.createClass({
  getInitialState: function() {
    return {
      list: [],
      text: ''
    } 
  },
  handleChange: function(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault()
    this.setState({
      list: [...this.state.list, this.state.text],
      text: ''
    })
  },

  render: function () {
    return (
      <div className="App" style={styles.centerBox}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
        </form>
        <ul>
            {this.state.list.map(function(item,i){
            return <li key={i}>{item}</li>                 
          })}
        </ul>
      </div>
    )
  }
})

export default App;
