import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "./axios";
import requests from "./requests";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
          console.log({selectedOption});
        const request = await axios.get(selectedOption);
        setMovies(request.data.results);
        console.log({ selectedOption });
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [selectedOption ]);

  return (
    <div className="resultsDiv">
        <FlipMove >
      {movies.map((movie) => (
        <VideoCard key = {movie.id} movie={movie} />
      ))}
      </FlipMove>
    </div>
  );
}

export default Results;
