import React from 'react'
import './App.css'

var styles={
  input: {
    background: 'black',
    color: 'green',
    fontSize: 20,
    height: 40,
    width: 200 
  },
  centerBox: {
    color: 'green',
    background: 'black',
    borderColor: 'red',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  listText:{
    fontSize:20,
    fontWeight: 'lighter',
    listStyle: 'none'
  },
  active:{
    color: 'green'
  },
  complete:{
    color: 'grey'
  }
}
var App=React.createClass({
  getInitialState: function() {
    return {
      list: [],
      completed: [],
      text: ''
    } 
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      list: [...this.state.list, this.state.text],
      text: ''
    })
  },

  handleClick(e) {
    this.setState({
      completed: [...this.state.completed, this.state.list[e.target.value]]  
    })
  },

  handleClear(e) {
    console.log('completed', this.state.completed)
    console.log('list', this.state.list)
    var completedSplice = this.state.completed.splice()
    console.log('completed Splice', completedSplice)
    var listSplice = this.state.list.splice()
    console.log('list Splice', listSplice)
    var filteredList = listSplice.filter(function (item){
      return (completedSplice.indexOf(item) > -1 )
    })
    console.log('filtered List', filteredList)
    this.setState({
      list: filteredList
    })
  },
  render() {
    return (
      <div className="App" style={styles.centerBox}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} />
        </form>
        <ul style={styles.listText}>
          {this.state.list.map(function(item,i){
            if(this.state.completed.indexOf(item) !== -1){
              return <li style={styles.complete} key={i}><input className="deleteButton" type="radio" value={i} onClick={this.handleClick}></input>{item}</li>                 
             }
             else{
              return <li style={styles.active} key={i}><input className="deleteButton" type="radio" value={i} onClick={this.handleClick}></input>{item}</li>
            }
          }.bind(this))}
        </ul>
        <button type="button" onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
})

export default App;
