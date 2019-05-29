import React, {Component} from 'react'; 
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  state = {
    test: 0,
    side: 'light',
    starshipId: null,
    characterId: null
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
  render(){
    return(
    <div className="App">
      <header className="App-header">    
       <p>Test</p>
        <CharacterList
          side = {this.state.side}
          onCharacterSelector = {this.handleCharacterSelector}
          selectedCharactor = {this.state.characterId}
        />
       <button onClick={this.handleSide.bind(this, 'light')}> Light Side </button>
       <button onClick={this.handleSide.bind(this, 'dark')}> Dark Side </button>
       <button onClick={this.handleStarshipSelector.bind(this, 9)}> Starship 9 </button>
       </header>

    </div>
    );
  }
}
 

export default App;
