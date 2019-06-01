import React, { Component } from 'react';
import CharacterDetail from './CharacterDetail';

class Character extends Component {
    state = { selectedCharacter:{}, isLoading: false};
    component

    render(){
        let content = <p> loading .....</p>;
        if(!this.state.isLoading && this.state.selectedCharacter){
          content =  <div>
                <CharacterDetail
                    name={this.state.name}
                    gender={this.state.gender}
                    height={this.state.height}
                    hair={this.state.hair}
                />
            </div>

        }else if(!this.state.isLoading && this.state.selectedCharacter){
            content = <p> Failed to fetch Character</p>
        }

        return content;
    }
}
 

export default Character;