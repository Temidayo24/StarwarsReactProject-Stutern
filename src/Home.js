import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./Movies";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading page`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setError(null);
        // console.log(actualData);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container">
        <img src="assets/logo.svg" alt="starwars_logo" className="app_logo" />
        {loading && (
          <img
            src="assets/loader.svg"
            alt="loader_img"
            className="loader-img"
          />
        )}
        {error && <div>{Error}</div>}
        {data && (
          <div>
            <ul className="movieCards_container">
            {data.map((movie, index) => {
              return (
                <li key={movie.episode_id} className="movieCard movieCards">
                  <div className="title-date">
                    <a href="/">{movie.title}</a>
                    <span>{movie.release_date}</span>
                  </div>
                  <p>{movie.opening_crawl}</p>

                  <Link to={`/movie/${index+1}`} element={<Movies />} className="moreInfo">More info</Link>
                </li>
              );
            })}
          </ul>
          {/* <Outlet/> */}
          </div>

        )}
      </div>
    </>
  );
};

export default Home;
