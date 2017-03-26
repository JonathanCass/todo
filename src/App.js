import React from 'react'
import './App.css'

var styles={
  app: {
    padding: 30,
    paddingTop: 10,
    margin: 'auto',
    width: 610,
    fontSize: 40,
    color: '#B2ACAB',
    borderRadius: 30
  },
  myName:{
    fontFamily: 'Special Elite',
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
    fontSize: 23,
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
    fontSize:22,
    fontWeight: 'lighter',
    listStyle: 'none',
    padding:0,
    margin:0,
  },
  itemSpan:{
    width:400,
    padding: 12,
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  active:{
    color: 'black',
    fontWeight: 'bold',
  },
  complete:{
    textDecoration : 'underline',  
    color: '#DBDBDB' 
  },
  boxCheck:{
    background: 'black',
  },
  boxUnchecked:{
    background: 'white',
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
    fontSize: 14,
    cursor: 'pointer'
  },
  bottomButtonOn: {
    color: 'red',
    fontWeight: 'bold',
    textDecoration: 'underline'
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
    fontSize: 14,
    cursor: 'default'
  },
  deleteButton:{
    padding: 15,
    float: 'right',
    border: 0,
    fontSize: 20,
    background: 'white',
    cursor: 'pointer'
  },
  hiddenDeleteButton:{
    display:'none'
  }
}
var App=React.createClass({
  getInitialState: function() {
    return {
      list: ['These items.','Are examples.','Provided for.','Testing purposes.'],
      completed: [],
      display: ['These items.','Are examples.','Provided for.','Testing purposes.'],
      text: '',
      filter: 0    // 0 for all, 1 for active, 2 for completed
    } 
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.text === ''){
      alert("Empty String is invalid input.")
    }
    else if(this.state.list.indexOf(this.state.text) !== -1){
      alert("Items must have unique names.")
    }
    else if(this.state.filter === 2){                         //checking if filter is on completed, prevents adding this new active item to the display array
      this.setState({
        list: [...this.state.list, this.state.text],
        text: ''
      })
    }
    else{
      this.setState({
        list: [...this.state.list, this.state.text],
        display: [...this.state.display, this.state.text],
        text: ''
      })
    }
  },

  handleCheck(e) {
    if(this.state.completed.indexOf(this.state.list[e.target.value]) !== -1){         //checks to see if clicked item is in completed array
      this.setState({
        completed: this.state.completed.filter((item)=>{                              //this section removes the item from the completed array
          return(item !== this.state.list[e.target.value])
        })
      })
    }
    else{ 
      this.setState({                                                                 //adding clicked item to completed array
        completed: [...this.state.completed, this.state.list[e.target.value]]  
      })
    }
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
    if(this.state.filter === 2)        // if the filter was set to completed simply clears the display array      
      this.setState({
        display: []
      })
  },
  handleDelete(e) {
    this.setState({                    // finding the deleted item in each array and removing it
      completed: this.state.completed.filter((item)=>{
        return(item !== this.state.list[e.target.value])
      }),
      list: this.state.list.filter((item)=>{
        return(item !== this.state.list[e.target.value])
      }),
      display: this.state.display.filter((item)=>{
        return(item !== this.state.list[e.target.value])
      })
    })
  },
  handleShowActive(e) {
    this.setState({                                         
      display: this.state.list.filter((item)=>{
        return(this.state.completed.indexOf(item) < 0)
      }),
      filter: 1
    })
  },
  handleShowCompleted(e) {
    this.setState({                                       
      display: this.state.list.filter((item)=>{
        return(this.state.completed.indexOf(item) > -1)
      }),
      filter: 2
    })
  },
  handleShowAll(e) {
    this.setState({
      display: this.state.list,
      filter: 0
    })
  },
  render() {
    return (
      <div className="App">
      <div style={styles.app}>
        <div style={styles.centerBox}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.text} style={styles.input} className="inputBar" placeholder="What needs to be done?" />
          </form>
          <ul style={styles.listText}>
            {this.state.display.map(function(item,i){
              if(this.state.completed.indexOf(item) > -1 ){
                return <li style={styles.complete} className="listEntry" key={i}><input type="button" className="circleCheck" style={this.state.completed.indexOf(item) === -1 ? styles.boxUnchecked : styles.boxCheck} value={i} onClick={this.handleCheck}></input><span style={styles.itemSpan} className="itemSpan">{item}</span><button className="deleteButton" style={this.state.filter === 0 ? styles.deleteButton : styles.hiddenDeleteButton} onClick={this.handleDelete} value={i}>X</button></li>                 
               }
               else{
                return <li style={styles.active} className="listEntry" key={i}><input type="button" className="circleCheck" style={this.state.completed.indexOf(item) === -1 ? styles.boxUnchecked : styles.boxCheck} value={i} onClick={this.handleCheck}></input><span style={styles.itemSpan} className="itemSpan">{item}</span><button className="deleteButton" style={this.state.filter === 0 ? styles.deleteButton : styles.hiddenDeleteButton} onClick={this.handleDelete} value={i}>X</button></li>
              }
            }.bind(this))}
          </ul>
          <div style={styles.bottomBar} className="bottomBar">
            <div>
              <div className="redLineBottom"></div>
              <button type="button" className="itemsLeft">{this.state.list.length-this.state.completed.length} Item{this.state.list.length-this.state.completed.length === 1 ? '' : 's'} Left</button>
              </div>
            <div style={styles.buttonRow}>
              <button type="button" style={this.state.filter === 0 ? styles.bottomButtonOn : styles.bottomButton} className="bottomButton" onClick={this.handleShowAll}>All</button>
              <button type="button" style={this.state.filter === 1 ? styles.bottomButtonOn : styles.bottomButton} className="bottomButton" onClick={this.handleShowActive}>Active</button>
              <button type="button" style={this.state.filter === 2 ? styles.bottomButtonOn : styles.bottomButton} className="bottomButton" onClick={this.handleShowCompleted}>Completed</button>
            </div>
            <button type="button" style={styles.bottomButton} className="clearCompleted" onClick={this.handleClear}>Clear Completed</button>
          </div>
        </div>
        <p style={styles.myName}>An App by Jon Cass</p>
      </div>
      </div>
    )
  }
})

export default App
