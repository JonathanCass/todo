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
    color: '#660000',
    marginBottom: 0
  },
  input: {
    background: 'white',
    color: 'black',
    fontSize: 26,
    paddingLeft: 20,
    height: 65,
    width: 550,
    border: 0
  },
  centerBox: {
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
  },
  active:{
    color: '#4C4C4C'
  },
  complete:{
    textDecoration : 'line-through',  
    color: '#DBDBDB' 
  },
  boxCheck:{
    marginRight: 20,
    height: 20,
    width: 20
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
    fontSize: 12,
    cursor: 'pointer'
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 550,
    height: 42,
    background: 'white',
  },
  noPointer: {
    height:40,
    background: 'white',
    border: 0,
    padding: 10,
    fontSize: 12,
    cursor: 'default'
  },
  deleteButton:{
    float: 'right',
    border: 0,
    fontSize: 20,
    background: 'white',
    cursor: 'pointer'
  }
}
var App=React.createClass({
  getInitialState: function() {
    return {
      list: ['Exercise','Pet Bird','Make lunch','Take Shower'],
      completed: [],
      display: ['Exercise','Pet Bird','Make lunch','Take Shower'],
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
            <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} className="inputBar" placeholder="What needs to be done?" />
          </form>
          <ul style={styles.listText}>
            {this.state.display.map(function(item,i){
              if(this.state.completed.indexOf(item) > -1 ){
                return <li style={styles.complete} className="listEntry" key={i}><input type="checkBox" style={styles.boxCheck} value={i} onChange={this.handleClick}></input>{item}<button className="deleteButton" style={styles.deleteButton}>X</button></li>                 
               }
               else{
                return <li style={styles.active} className="listEntry" key={i}><input type="checkBox" style={styles.boxCheck} value={i} onChange={this.handleClick}></input>{item}<button className="deleteButton" style={styles.deleteButton}>X</button></li>
              }
            }.bind(this))}
          </ul>
          <div style={styles.bottomBar} className="bottomBar">
            <button type="button" style={styles.noPointer} className="itemsLeft">Items left</button>
            <div style={styles.buttonRow}>
              <button type="button" style={styles.bottomButton} className="bottomButton" onClick={this.handleShowAll}>All</button>
              <button type="button" style={styles.bottomButton} className="bottomButton" onClick={this.handleShowActive}>Active</button>
              <button type="button" style={styles.bottomButton} className="bottomButton" onClick={this.handleShowCompleted}>Completed</button>
            </div>
            <button type="button" style={styles.bottomButton} className="clearCompleted" onClick={this.handleClear}>Clear Completed</button>
          </div>
        </div>
        <p style={styles.myName}>An App by J Cass</p>
      </div>
    )
  }
})

export default App;
