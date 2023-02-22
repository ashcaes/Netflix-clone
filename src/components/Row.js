import Axios from "../api/Axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


const Row = ({ title, fetchUrl, isLargeRow = false }) => {
 

  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const getData = async () => {
      const request = await Axios.get(fetchUrl);
      setMovies(request?.data.results);
      return request;
    };

    getData();
  }, [fetchUrl]);

 

  return (
    <RowContainer>
      <Title>{title}</Title>
      <PosterContainer>
          {movies?.map((movie) => (
              <Poster
           key={movie.id}
           large={isLargeRow}
           src={`${baseUrl}${
             isLargeRow  ? movie.poster_path : movie.backdrop_path
           }`}
           alt={movie.name ? movie.name : "unknown"}
         />
          ))}
        
      </PosterContainer>
    </RowContainer>
  );
};

export default Row;

const RowContainer = styled.div`

`;

const Title = styled.h2`
  margin-left: 1.3rem;
  color: white;
  overflow-x: hidden;
`;

const Poster = styled.img`
  width: 250px;
  max-height: 200px;
  object-fit: cover;
  transition: transform 350ms ease-in-out;

  &:hover{
    transform: scale(1.07) ;
    opacity: 1 ;
 
  }
 
`;

const PosterContainer = styled.div`
position: relative ;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1.3rem;
  gap: 0.8rem ;
&::-webkit-scrollbar {
    display: none ;
}
`;




