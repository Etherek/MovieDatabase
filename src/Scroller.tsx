import React, { useState, useEffect } from "react";
import axios from "axios";
import './Scroller.css';
import { memo } from "react";
interface Item {
  id: number;
  imageUrl: string;
  name: string;
}

interface ApiResponse {
  items: Item[];
  totalPages: number;
}

const apiKey: string = 'd59d5fc7f93fdf9bd4f1edc85694a73b';
const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=`;
const imgUrl: string = 'https://image.tmdb.org/t/p/original/';
interface Movie {
  backdrop_path: string;
  title: string;

}

const InfiniteScroller = memo(function InfiniteScroller() {

  const [data, setData] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    axios
      .get(url+page)
      .then((response) => {
        const results = response.data.results;
        console.log(response.data)
        setData((prevData) => [...prevData, ...results]);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(data)
      console.log(page)
  }, [page]);
  
console.log(data)
const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    setPage(prevPage => prevPage + 1);
  }
};
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
  <div className="infiniteScroller">
    {data.map((movie: Movie) => (
      <div className="imageWrapper">
        <img src={imgUrl + movie.backdrop_path} style={{ width: '80%' }} />
        <div className="titleWrapper">
          <p>{movie.title}</p>
        </div>
      </div>
    ))}
  </div>
  );
})

export default InfiniteScroller