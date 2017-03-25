import React from 'react'
import './App.css'

var styles={
  app: {
    background: '#F4F4F4',
    padding: 30,
    paddingTop: 10,
    margin: 'auto',
    width: 610,
    fontSize: 40,
    color: '#EAD7D7',
    borderRadius: 30
  },
  title:{
    fontSize: 100,
    margin: 0,
    textAlign: 'center',
    fontWeight: 'lighter',
    fontFamily: 'Courier New',
    color: '#5E194F'
  },
  myName:{
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 40,
    color: '#5E194F',
    marginBottom: 0
  },
  input: {
    background: 'white',
    color: 'black',
    fontSize: 24,
    paddingLeft: 20,
    height: 65,
    width: 550,
    border: 0
  },
  centerBox: {
    background: '#F4F4F4',
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px',
    width: 550,
    boxShadow: '10px 10px 5px grey',
    marginTop: 20
  },
  listText:{
    fontSize:24,
    fontWeight: 'lighter',
    listStyle: 'none',
    padding:0,
    margin:0,
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px'
  },
  active:{
    padding: 20,
    background: 'white',
    borderStyle:'solid',
    borderColor: '#DBDBDB',
    borderWidth: '1px',
    color: '#4C4C4C',
    height: 65,
    width: 550 
  },
  complete:{
    padding: 20,
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
    background: 'white',
    border: 0
  },
  bottomButton: {
    height:40,
    background: 'white',
    border: 0,
    padding: 10,
    fontSize: 12
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 550,
    height: 40,
    background: 'white'
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
      <div className="App" style={styles.app}>
        <p style={styles.title}> todos </p>
        <div style={styles.centerBox}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} placeholder="What needs to be done?" />
          </form>
          <ul style={styles.listText}>
            {this.state.display.map(function(item,i){
              if(this.state.completed.indexOf(item) > -1 ){
                return <li style={styles.complete} key={i}><input type="checkBox" value={i} onChange={this.handleClick}></input>{item}</li>                 
               }
               else{
                return <li style={styles.active} key={i}><input type="checkBox" value={i} onChange={this.handleClick}></input>{item}</li>
              }
            }.bind(this))}
          </ul>
          <div style={styles.bottomBar}>
            <button type="button" style={styles.bottomButton}>Items left</button>
            <div style={styles.buttonRow}>
              <button type="button" style={styles.bottomButton} onClick={this.handleShowAll}>All</button>
              <button type="button" style={styles.bottomButton} onClick={this.handleShowActive}>Active</button>
              <button type="button" style={styles.bottomButton} onClick={this.handleShowCompleted}>Completed</button>
            </div>
            <button type="button" style={styles.bottomButton} onClick={this.handleClear}>Clear Completed</button>
          </div>
        </div>
        <p style={styles.myName}>An App by J Cass</p>
      </div>
    )
  }
})

export default App;
