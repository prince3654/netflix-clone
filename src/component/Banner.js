import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from "../axios.js"
import Requests from "../Requests";
import { useNavigate } from "react-router-dom";
function Banner() {
    const [movie,setMovie] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(Requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[Math.floor(Math.random() * request.data.results.length-1)
          ]
        );
        return request;
      }
      fetchData();
    },[] );
  console.log("movie is here",movie);

    function truncate(string,n){
      if(string){
        return string.length>n ?string.substring(0,n-1)+" . . .":string;
      }
    }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
    <div className="banner-Content">
    <h1 className="banner-Title">
    {
      movie?.title || movie?.name || movie?.original_name
    }
    </h1>
    <div className="banner-Buttons">
      <button onClick={()=>{
        navigate("/player")
      }} className="banner-Button"> Play</button>
      <button className="banner-Button">My List</button>
    </div>
    <h1 className="banner-Description">
    {truncate(
    movie?.overview,150)}


    </h1>
    </div>
    <div className="banner--FadeBottom"></div>
    </header>
  );
}

export default Banner;
