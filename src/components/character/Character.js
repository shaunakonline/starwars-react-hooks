import React, { useState, useEffect } from 'react';
import CharacterDetail from './CharacterDetail';

const Character = (props) => {
    // state = { loadedCharacter:{}, isLoading: false};
    const [loadedCharacter, setLoadedCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {selectedCharacterId} = props
 

    useEffect(()=>{
      fetchData();    
      return () => {
        console.log(' componentWillUnmount - dependent on the dependecy');        
      };
    }, [selectedCharacterId]); // componentDidUpdate

    useEffect(()=>{
      return () => {
        console.log(' componentWillUnmount');        
      };
    }, [])
    const fetchData = () => {
      fetch('https://swapi.co/api/people/'+ selectedCharacterId)
      .then((res)=>{
        return res.json();
      }) 
      .then((data)=>{
        setIsLoading(true);
        const loadedCharacter = {
          id: selectedCharacterId,
          name: data.name,
          gender: data.gender,
          height: data.height,
          colors:{
            hair: data.hair_color,
            skin: data.skin_color
          }
        }
        setLoadedCharacter(loadedCharacter);
        setIsLoading(false)
      })
      .catch((err) =>{
        console.log(err);
      });

    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate');
    //     return (
    //       nextProps.selectedCharacterId !== this.props.selectedCharacterId ||
    //       nextState.loadedCharacter.id !== loadedCharacter.id ||
    //       nextState.isLoading !== isLoading
    //     );
    //   }
    
      // componentDidUpdate(prevProps) {
      //   console.log('Component did update');
      //   if (prevProps.selectedCharacterId !== this.props.selectedCharacterId) {
      //     this.fetchData();
      //   }
      // }
    
      // componentDidMount() {
      //   this.fetchData();
      // }
    
      // fetchData = () => {
      //   console.log(
      //     'Sending Http request for new character with id ' +
      //       this.props.selectedCharacterId
      //   );
      //   this.setState({ isLoading: true });
      //   fetch('https://swapi.co/api/people/' + this.props.selectedCharacterId)
      //     .then(response => {
      //       if (!response.ok) {
      //         throw new Error('Could not fetch person!');
      //       }
      //       return response.json();
      //     })
      //     .then(charData => {
      //       const loadedCharacter = {
      //         id: this.props.selectedCharacterId,
      //         name: charData.name,
      //         height: charData.height,
      //         colors: {
      //           hair: charData.hair_color,
      //           skin: charData.skin_color
      //         },
      //         gender: charData.gender,
      //         movieCount: charData.films.length
      //       };
      //       this.setState({ loadedCharacter: loadedCharacter, isLoading: false });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // };
    
      // componentWillUnmount() {
      //   console.log('Too soon...');
      // }

  
        let content = <p> loading .....</p>;
        if(!isLoading && loadedCharacter.id){ 
            
          content =  <div>
                <CharacterDetail
                    name={loadedCharacter.name}
                    gender={loadedCharacter.gender}
                    height={loadedCharacter.height}
                    hair={loadedCharacter.colors.hair}
                />
            </div>

        }else if(!isLoading && loadedCharacter.id){
            content = <p> Failed to fetch Character</p>
        }

        return content; 
}
  
export default Character;