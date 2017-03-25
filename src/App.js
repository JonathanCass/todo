import React from 'react'
import './App.css'

var styles={
  input: {
    background: 'white',
    color: 'black',
    fontSize: 20,
    height: 65,
    width: 550 
  },
  centerBox: {
    background: 'grey',
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '2px',
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  listText:{
    fontSize:20,
    fontWeight: 'lighter',
    listStyle: 'none',
    padding:0,
    margin:0,
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px'
  },
  active:{
    background: 'white',
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px',
    color: '#4C4C4C',
    height: 65,
    width: 550 
  },
  complete:{
    background: 'white',
    textDecoration : 'line-through',
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px',
    color: '#DBDBDB',
    height: 65,
    width: 550 
  },
  buttonRow:{
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: 550,
    background: 'white'
  },
  clearCompletedButton: {
  
  }
}
var App=React.createClass({
  getInitialState: function() {
    return {
      list: [],
      completed: [],
      display: [],
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
      display: [...this.state.display, this.state.text],
      text: ''
    })
  },

  handleClick(e) {
    this.setState({
      completed: [...this.state.completed, this.state.list[e.target.value]]  
    })
  },

  handleClear(e) {
    var clearArray = this.state.list.filter((item)=>{
      return(this.state.completed.indexOf(item) < 0)
    })
    this.setState({
      completed: [],
      list: clearArray,
      display: clearArray
    })
  },
  handleShowActive(e) {
    this.setState({
      display: this.state.list.filter((item)=>{
        return(this.state.completed.indexOf(item) < 0)
      })
    })
  },
  handleShowCompleted(e) {
    this.setState({
      display: this.state.list.filter((item)=>{
        return(this.state.completed.indexOf(item) > -1)
      })
    })
  },
  handleShowAll(e) {
    this.setState({
      display: this.state.list
    })
  },
  render() {
    return (
      <div className="App" style={styles.centerBox}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} placeholder="What needs to be done?" />
        </form>
        <ul style={styles.listText}>
          {this.state.display.map(function(item,i){
            if(this.state.completed.indexOf(item) > -1 ){
              return <li style={styles.complete} key={i}><input className="deleteButton" type="checkBox" value={i} onChange={this.handleClick}></input>{item}</li>                 
             }
             else{
              return <li style={styles.active} key={i}><input className="deleteButton" type="checkBox" value={i} onChange={this.handleClick}></input>{item}</li>
            }
          }.bind(this))}
        </ul>
        <div style={styles.buttonRow}>
          <button type="button" onClick={this.handleShowAll}>All</button>
          <button type="button" onClick={this.handleShowActive}>Active</button>
          <button type="button" onClick={this.handleShowCompleted}>Completed</button>
          <button type="button" style={styles.clearCompletedButton} onClick={this.handleClear}>Clear Completed</button>
        </div>
      </div>
    )
  }
})

export default App;
