import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Tile from './Tile'


class App extends Component {
  
  state = {
    hogs: [],
    sortNameClicked: false,
    sortWeightClicked: false,
    greasedClicked: false
   
  }

  componentDidMount(){
    fetch('http://localhost:3001/hogs')
    .then(res=>res.json())
    .then(hogs=>{
      //console.log(hogs)
      this.setState({
      hogs: hogs
    })})
  }

  //logic to sort an object aplphabetically or ascending numerical order of a particular property
  sortCollection(collection, prop) {
    return collection.sort(
        function(a,b){
          if (a[prop] < b[prop]){
          return -1;
          } else if (a[prop] > b[prop]){
          return 1;
          } else {
          return 0;
          }
        }
    );
  }

  clearPreviousTiles = () => {
    this.setState({
      hogs: []
    })
  }

  

  renderTiles = () => {
    return this.state.hogs.map((hog, index) => <Tile hog={hog} key={index} /> )
  }

  //I was not having the return statement in the above function and the images were not coming for an hour. 
  //Always remember to have return when you have a rendering function of the component

  greasedHogs =() => {
    let greasedHogs = this.state.hogs.filter(function (hog){
      return  hog['greased']===true;
    })
    return greasedHogs
  }

  renderGreasedTiles = () => {
    let greasedHogs = this.state.hogs.filter(hog => hog.greased)
    // //this.clearPreviousTiles()
    // this.setState({
    //   hogs: {...this.state.hogs, greasedHogs}
    // })
    return greasedHogs.map((hog, index) => <Tile hog={hog} key={index} /> )
  }

  renderNameSortedTiles = () => {
    //let hogsByName = this.state.hogs;	
    //let sortedHogs = this.sortByName(hogsByName, "name")
    //when I tried to assign them to variable and do the below step, throws an error. Ask Josh why
    return this.sortCollection(this.state.hogs, "name").map((hog, index) => <Tile hog={hog} key={index} />)
  }
  
  renderWeightSortedTiles = () => {
    return this.sortCollection(this.state.hogs, "weight").map((hog, index) => <Tile hog={hog} key={index} />)
  } 
  

  displaySortOptions() {
    return (
      <div>
        
      <nav>
        <button name="sort by name" type="submit" onClick = { () => {this.displayDecisionByName()} } >
        Sort Hogs alphabetically</button>
        <br></br>
        <button name="sort by weight" onClick = { () => {this.displayDecisionByWeight()} } >Sort Hogs By weight</button>
        <br></br>
        <button name="Greased hogs" onClick = { () => {this.displayDecisionByGreased()} } >Show Greased Hogs</button>
      </nav>
      <br></br>
      <p>All the hogs are here! Click the options above to filter them by your choice. </p>
      </div>
    )
  }

  displayDecisionByGreased = () => {
    
    this.setState({
      greasedClicked: true
    });
  }

  displayDecisionByName = () => {
    this.setState({
      sortNameClicked: true
    })
  }

  displayDecisionByWeight = () => {
    this.setState({
      sortWeightClicked: true,
      
    })
  }


  render() {
   
    return(
      <div className="App">
          < Nav hogs={this.state.hogs} navBar={this.displaySortOptions()}/>
          
          { this.state.greasedClicked == true ? this.renderGreasedTiles() : null }
          { this.state.sortWeightClicked == true ? this.renderWeightSortedTiles() :  null}
          { this.state.sortNameClicked == true ? this.renderNameSortedTiles() :  null}
          {this.renderTiles()}
         
      </div>
    )
  }


}

export default App;
