import React from "react";
import './App.css'
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = new useState(true);
  const [data, setData] = new useState(null);
  const [error, setError] = new useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error(`Error loading page`);
        }

        return Response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setError(null);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div className="container">
      <img src="assets/logo.svg" alt="starwars_logo" className="app_logo"/>
      {loading && (
        <img src="assets/loader.svg" alt="loader_img" className="loader-img" />
      )}
      {error && <div>{Error}</div>}
      {data && (
        <div className="movieCards_container">
          {data.map((movie) => {
            return (
              <ul className="movieCards">
                <li key={movie.episode_id} className="movieCard">
                  <div className="title-date">
                    <a href="/">{movie.title}</a>
                    <span>{movie.release_date}</span>
                  </div>
                  <p>{movie.opening_crawl}</p>
                    <a
                      href="/#"
                      target="_self"
                      className="moreInfo"
                    >
                      More info
                    </a>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
