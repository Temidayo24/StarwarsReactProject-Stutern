import React from "react";
import "./movies.css"

const Movies = ({ items, setHandleToggle }) => {

   return (
     <div className="pageContainer">
       <img src="assets/logo.svg" alt="starwars_logo" className="app_logo" />

       <div className="movieContainer">
         <a href="/">Back to List</a>
         <div>
           <h2>{items.title}</h2>
           <span>Director: {items.director}</span>
           <span>Producer: {items.producer}</span>
         </div>

         <div>
           <h4>Description</h4>
           <span>{items.opening_crawl}</span>
         </div>

         <div>
           <h4>Characters</h4>
           <ul>
             {items.characters.map((character) => (
               <li>{character}</li>
             ))}
           </ul>
         </div>

         <div>
           <h4>Planets</h4>
           <ul>
             {items.planets.map((planet) => (
               <li>{planet}</li>
             ))}
           </ul>
         </div>

         <div>
           <h4>Species</h4>
           <ul>
             {items.species.map((specie) => (
               <li>{specie}</li>
             ))}
           </ul>
         </div>

         <div>
           <h4>Starships</h4>
           <ul>
             {items.starships.map((starship) => (
               <li>{starship}</li>
             ))}
           </ul>
         </div>

         <div>
           <h4>Vehicles</h4>
           <ul>
             {items.vehicles.map((vehicle) => (
               <li>{vehicle}</li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   );
};

export default Movies;
