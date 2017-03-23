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
      itemsList : [
        'Wake Up',
        'Brush Teeth',
        'Pet Bird',
        'Exercise'
      ], 
      itemString : ''
    } 
  },
  
  submit: function(e){
    e.preventDefault()
    var itemsList = this.state.itemsList.slice()
    var addedItem = event.target.eventInput
    console.log(itemsList,'itemstlist',event.target.eventInput, addedItem)
    itemsList.push(addedItem)
    this.setState({ itemsList: itemsList})
  },
  textInput: function(e){
    this.setState({ itemString: e.target.value })
  },
  render: function() {
    return (
      <div className="App" style={styles.centerBox}>
        <form className="inputForm" onSubmit={this.submit}>
          <input style={styles.input} type="text" className="inputBox" name="eventInput" placeholder="Enter Item To Do Here" onChange={this.textInput}/><br />
        </form>
          <ul>
            {this.state.itemsList.map(function(item,i){
            return <li key={i}>{item}</li>                 
          })}
            <li>{this.state.itemString}</li>
        </ul>
      </div>
    )
  }
})

export default App;
