
import React, {Component} from 'react';

class StarshipGrid extends Component {

    render(){
        const { ships } = this.props;
        console.log('ships ', ships);
          
        return(
            <div> 
                <div className="row">
                     { ships.map((ship, index)=>  
                    
                     <div className="col s12 m6" key={index}>
                      <div className="card"> 
                        <div className="card-content">
                            <span className="card-title">  {ship.name}  </span>
                            <p>Model: {ship.model}  </p>
                            {/* <p>Manufacturer: {ship.manufacturer}  </p> */}
                            <p>Class: {ship.starship_class} | Speed: {ship.max_atmosphering_speed} </p>
                        </div>
                        <div className="card-action">
                          <a href={ship.url}> {ship.name} </a>
                        </div>
                        </div>
                        <p>--------------------</p>
                        </div>
                       
                       
                   ) } </div>
                    
            </div>
        )
    }
}

export default StarshipGrid;

