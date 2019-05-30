   
import React, {Component} from 'react'; 
import './App.css';
import CharacterList from './components/CharacterList'
import StarshipGrid from './components/starship/StarshipGrid';

class App extends Component {
  state = {
    test: 0,
    side: 'light',
    starshipId: 1,
    characterId: 1,
    allShips: []
  };

  handleSide = (side) => {
    this.setState({side: side}); // can be written as this.setState({side})
  }

  handleStarshipSelector = (shipId) => {
    this.setState({starshipId: shipId});
  }
  handleCharacterSelector = (e) => {
    const characterId = e.target.value;
    this.setState({characterId: characterId});
  }
  componentDidMount(){
    fetch('https://swapi.co/api/starships')
    .then((res)=>{
      return res.json();
    }) 
    .then((data)=>{
      this.setState({allShips: data.results})
    })
    .catch((err)=>{
      console.log('err !! ', err);
      
    })
  }
  render(){
    return(
      <div className="container">
        <br /> 
        <br /> 
        <CharacterList
          side = {this.state.side}
          onCharacterSelector = {this.handleCharacterSelector}
          selectedCharactor = {this.state.characterId}
        />
        <button className="waves-effect waves-light btn-small" onClick={this.handleSide.bind(this, 'light')}> Light Side </button>
        <button className="waves-effect waves-light btn-small" onClick={this.handleSide.bind(this, 'dark')}> Dark Side </button>
        <button className="waves-effect waves-light btn-small" onClick={this.handleStarshipSelector.bind(this, 9)}>Starship 9 </button>

        <StarshipGrid
            ships= {this.state.allShips}>
        </StarshipGrid>
       </div>
    );
  }
}
 

export default App;