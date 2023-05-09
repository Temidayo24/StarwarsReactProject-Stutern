import React from 'react'
import { useState, useEffect } from 'react';

const Movies = (item) => {
  console.log(item);
  const {items} = item
  console.log(items.title, "items identifier");



  return (
    <>
    <h2 style={{color: "white"}}>{items.title}</h2>

    </>
  );
};


export default Movies;