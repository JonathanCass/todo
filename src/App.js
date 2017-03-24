import React from 'react'
import './App.css'

var styles={
  input: {
    fontSize: 14,
    height: 40,
    width: 200 
  },
  centerBox: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  listText:{
    fontSize:20,
    fontWeight: 'lighter',
    listStyle: 'none'
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
          <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} />
        </form>
        <ul style={styles.listText}>
            {this.state.list.map(function(item,i){
            return <li key={item}><input class ="deleteButton" type="radio" value={item} ></input>{item}</li>                 
          })}
        </ul>
      </div>
    )
  }
})

export default App;
