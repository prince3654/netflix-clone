import React, { useEffect, useState } from 'react'
import axios from "../axios"
import "./Row.css"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import video from "../assets/video.mp4"

function Row({ title, fetchUrl, isLargeRow = false }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(

        request.data.results
      )
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log("fetch URL IS")
  console.log(fetchUrl);
  console.log(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_Posters'>
        {
          movies?.map(movie => (
            <Container onMouseEnter={() => {
              setIsHovered(true);
            }}
              onMouseLeave={() => { setIsHovered(false) }}>
              <img
                key={movie.id}
                className={`row_Poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name} />
              {/* {
                isHovered && (
                  <div className='hover'>
                    <div className='image-vide-container'>
                      <img
                        key={movie.id}
                        className={`row_Poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name} onClick={ ()=>navigate("/player")}/>
                        <video src={video} autoPlay loop muted onClick={()=> navigate("/player")}/>

                    </div>
                    <div className='info-container flex column'>

                      
                    </div>
                  </div>
                )
              } */}
            </Container>
          )
          )}
      </div>

    </div>
  )
}

const Container = styled.div``

export default Row;

