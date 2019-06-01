import React, { Component } from 'react';
import CharacterDetail from './CharacterDetail';

class Character extends Component {
    state = { loadedCharacter:{}, isLoading: false};

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return (
          nextProps.selectedCharactorId !== this.props.selectedCharactorId ||
          nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
          nextState.isLoading !== this.state.isLoading
        );
      }
    
      componentDidUpdate(prevProps) {
        console.log('Component did update');
        if (prevProps.selectedCharactorId !== this.props.selectedCharactorId) {
          this.fetchData();
        }
      }
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = () => {
        console.log(
          'Sending Http request for new character with id ' +
            this.props.selectedCharactorId
        );
        this.setState({ isLoading: true });
        fetch('https://swapi.co/api/people/' + this.props.selectedCharactorId)
          .then(response => {
            if (!response.ok) {
              throw new Error('Could not fetch person!');
            }
            return response.json();
          })
          .then(charData => {
            const loadedCharacter = {
              id: this.props.selectedCharactorId,
              name: charData.name,
              height: charData.height,
              colors: {
                hair: charData.hair_color,
                skin: charData.skin_color
              },
              gender: charData.gender,
              movieCount: charData.films.length
            };
            this.setState({ loadedCharacter: loadedCharacter, isLoading: false });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      componentWillUnmount() {
        console.log('Too soon...');
      }

    render(){
        let content = <p> loading .....</p>;
        if(!this.state.isLoading && this.state.loadedCharacter.id){ 
            
          content =  <div>
                <CharacterDetail
                    name={this.state.loadedCharacter.name}
                    gender={this.state.loadedCharacter.gender}
                    height={this.state.loadedCharacter.height}
                    hair={this.state.loadedCharacter.colors.hair}
                />
            </div>

        }else if(!this.state.isLoading && this.state.loadedCharacter.id){
            content = <p> Failed to fetch Character</p>
        }

        return content;
    }
}
 

export default Character;