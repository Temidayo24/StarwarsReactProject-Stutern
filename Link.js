import React from 'react'

const Link = ({
   }
) => {
  return (
          <div>
            <div>
              <h2>{title}</h2>
              <span>Director: {director}</span>
              <span>Producer: {producer}</span>
            </div>
            <div>
              <h4>Description</h4>
              <span>{description}</span>
            </div>
            <div>
              <h4>Characters</h4>
              <ul>
                {characters.map((character) => (
                  <li>{character}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Planets</h4>
              <ul>
                {planets.map((planet) => (
                  <li>{planet}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Species</h4>
              <ul>
                {species.map((specie) => (
                  <li>{specie}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Starships</h4>
              <ul>
                {starships.map((starship) => (
                  <li>{starship}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Vehicles</h4>
              <ul>
                {vehicles.map((vehicle) => (
                  <li>{vehicle}</li>
                ))}
              </ul>
            </div>
          </div>
    );
}

export default Link