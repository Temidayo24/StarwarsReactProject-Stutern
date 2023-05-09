import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./Movies";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [handleToggle, setHandleToggle] = useState(true);
  const [items, setItems] = useState("uiifi");
  const navigate = useNavigate();

  const handleClick = (movie) => {
    setHandleToggle(false);
    setItems(movie);
    console.log(movie, "Identifier");
    navigate("/movies");
  };

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading page`);
        }
        return response.json();
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
      {handleToggle && (
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
                  <li key={movie.episode_id} className="movieCard movieCards">
                    <div className="title-date">
                      <a href="/">{movie.title}</a>
                      <span>{movie.release_date}</span>
                    </div>
                    <p>{movie.opening_crawl}</p>

                    <div
                      className="moreInfo"
                      onClick={() => handleClick(movie)}
                    >
                      More info
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      {items && (
        <Routes>
          <Route path="/movies" element={<Movies items={items} />} />
        </Routes>
      )}
    </>
  );
};

export default Home;
