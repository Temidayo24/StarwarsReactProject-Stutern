import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./Movies";


const Home = () => {
  const [loading, setLoading] = new useState(true);
  const [data, setData] = new useState(null);
  const [error, setError] = new useState(null);
  const [handleToggle, setHandleToggle] = useState(true)
  const [items, setItems] = useState()

  const handleClick = (movie) => {
    setHandleToggle(false)
    setItems(movie)
    console.log(movie, "Identifier");
  }



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
            <ul className="movieCards_container">
              {data.map((movie) => {
                return (
                  <>
                    <li key={movie.episode_id} className="movieCard movieCards">
                      <div className="title-date">
                        <a href="/">{movie.title}</a>
                        <span>{movie.release_date}</span>
                      </div>
                      <p>{movie.opening_crawl}</p>
                      {/* <div onClick={() => handleClick(movie)}>More info</div> */}
                      <Link
                    to="/movies"
                    className="moreInfo"

                  >
                    More info
                  </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          )}
        </div>

      <Routes>



        </Routes>
    </>
  );
};

export default Home;
