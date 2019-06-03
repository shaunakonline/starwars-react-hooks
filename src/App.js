   
import React, {useState, useEffect} from 'react'; 
import './App.css';
import CharacterList from './components/character/CharacterList';
import Character from './components/character/Character';
import StarshipGrid from './components/starship/StarshipGrid';

const App = (props) => {
  const [side, setSide] = useState('light');
  const [starshipId, setStarshipId] = useState('1');
  const [characterId, setCharacterId] = useState('1');
  const [allShips, setAllShips]= useState([]);

  // state = {
  //   side: 'light',
  //   starshipId: 1,
  //   characterId: 1,
  //   allShips: []
  // };

 const handleSide = (side) => {
    setSide(side); // can be written as this.setState({side})
  }

 const handleStarshipSelector = (shipId) => {
    setStarshipId(shipId);
  }
 const handleCharacterSelector = (e) => {
    const characterId = e.target.value;
    setCharacterId(characterId);
  }

  useEffect(()=>{
    console.log('App useEffect componentDidMount()');
    fetch('https://swapi.co/api/starships')
    .then((res) => {
      return res.json();
    })
    .then((data)=>{      
      setAllShips(data.results);
    }) 
    .catch((err)=>{
      console.log('err', err);
    })
    return () => {
      console.log('App useEffect componentDidUnmount()');
    } 
  }, []);
  // componentDidMount(){
  //   fetch('https://swapi.co/api/starships')
  //   .then((res)=>{
  //     return res.json();
  //   }) 
  //   .then((data)=>{
  //     this.setState({allShips: data.results})
  //   })
  //   .catch((err)=>{
  //     console.log('err !! ', err);
      
  //   })
  // }
   
    return(
      <div className="container">
        <br /> 
        <br /> 
        <div className="App">
        <CharacterList
          side = {side}
          onCharacterSelector = {handleCharacterSelector}
          selectedCharacterId = {characterId}
        />
        <Character
          selectedCharacterId = {characterId}
        />
        <button className="waves-effect waves-light btn-small" onClick={handleSide.bind(this, 'light')}> Light Side </button>
        <button className="waves-effect waves-light btn-small" onClick={handleSide.bind(this, 'dark')}> Dark Side </button>
        <button className="waves-effect waves-light btn-small" onClick={handleStarshipSelector.bind(this, 9)}>Starship 9 </button>

        {/* <StarshipGrid
            ships= {allShips}>
        </StarshipGrid> */}
        </div>
       </div>
    );
 
}
 

export default App;