// const Movies = ({
//     title,
//     director,
//     producer,
//     description,
//     characters,
//     planets,
//     species,
//     starships,
//     vehicles}
// ) =>
// return (
//     <>
//       {error && <div>{Error}</div>}
//       {data && (
//         <div>
//           <div>
//             <h2>{data.title}</h2>
//             <span>Director: {director}</span>
//             <span>Producer: {producer}</span>
//           </div>

//           <div>
//             <h4>Description</h4>
//             <span>{description}</span>
//           </div>

//           <div>
//             <h4>Characters</h4>
//             <ul>
//               {characters.map((character) => (
//                 <li>{character}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4>Planets</h4>
//             <ul>
//               {planets.map((planet) => (
//                 <li>{planet}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4>Species</h4>
//             <ul>
//               {species.map((specie) => (
//                 <li>{specie}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4>Starships</h4>
//             <ul>
//               {starships.map((starship) => (
//                 <li>{starship}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4>Vehicles</h4>
//             <ul>
//               {vehicles.map((vehicle) => (
//                 <li>{vehicle}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );

 // console.log(object, "identifier2");
  // const [data, setData] = new useState(null);
  //  const [error, setError] = new useState(null);
  //  const [loading, setLoading] = new useState(true);

  //  useEffect(() => {
  //    fetch("https:swapi.dev/api/films")
  //      .then((Response) => {
  //        if (!Response.ok) {
  //          throw new Error(`Error loading page`);
  //        }

  //        return Response.json();
  //      })
  //      .then((actualData) => {
  //        setData(actualData.results);
  //        setError(null);
  //        console.log(data);
  //      })
  //      .catch((error) => {
  //        setError(error);
  //        setData(null);
  //      })
  //      .finally(() => {
  //        setLoading(false);
  //      });
  //  });
// console.log("identifier 1");

 {/* <div>
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
            {characters?.map((character) => (
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
      </div> */}
      {/* <img src="assets/logo.svg" alt="starwars_logo" className="app_logo" /> */}
      {/* {data && (
         <ul>
           {data.map((movie) => {
             return (
               <li key={movie.episode_id}>
                 <div>
                   <h2>{movie.title}</h2>
                   <span>Director: {movie.director}</span>
                   <span>Producer: {movie.producer}</span>
                 </div>

                 <div>
                   <h4>Description</h4>
                   <span>{movie.opening_crawl}</span>
                 </div>

                 <div>
                   <h4>Characters</h4>
                   <ul>
                     {movie.characters.map((character) => (
                       <li>{character}</li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4>Planets</h4>
                   <ul>
                     {movie.planets.map((planet) => (
                       <li>{planet}</li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4>Species</h4>
                   <ul>
                     {movie.species.map((specie) => (
                       <li>{specie}</li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4>Starships</h4>
                   <ul>
                     {movie.starships.map((starship) => (
                       <li>{starship}</li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4>Vehicles</h4>
                   <ul>
                     {movie.vehicles.map((vehicle) => (
                       <li>{vehicle}</li>
                     ))}
                   </ul>
                 </div>
               </li>
             );
           })}
         </ul>
       )} */}