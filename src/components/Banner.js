import { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "../api/Axios";
import requests from "../api/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    getData();
  }, []);

 

  const truncate = (string, number) => {
    return string?.length > number
      ? string.substring(0, number - 1) + "...."
      : string;
  };

  return (
    <Container url={movie?.backdrop_path || movie?.poster_path}>
      <BannerContents>
        <Title>{movie?.name || movie?.title}</Title>
        <ButtonsContainer>
          <Button>PLAY</Button>
          <Button>MY LIST</Button>
        </ButtonsContainer>
        <Description>{truncate(movie.overview, 180)}</Description>
      </BannerContents>
      <FadeButton></FadeButton>
    </Container>
  );
};

export default Banner;

const Container = styled.header`
  background-image: ${(pops) =>
    `url("https://image.tmdb.org/t/p/original/${pops.url}")`};
  background-size: cover;

  background-position: top center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  color: white;
  object-fit: contain;
  height: 470px;
  margin-top: -2rem;
`;

const BannerContents = styled.div`
  padding-top: 100px;
  margin-left: 30px;
  height: 200px;
`;

const Title = styled.h1`
  letter-spacing: 0.4px;
  font-size: 3rem;
  font-weight: bolder;
`;

const ButtonsContainer = styled.div``;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.7rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  color: #ffffff;
  transition: all 250ms ease;
  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;

const Description = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  width: fit-content;
  line-height: 1.3;
  padding-top: 1.3rem;

  max-width: 470px;
  height: 80px;
`;

const FadeButton = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  padding-bottom: 3rem;
`;
