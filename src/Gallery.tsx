import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const apiKey: string = 'd59d5fc7f93fdf9bd4f1edc85694a73b';
const url: string = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
const imgUrl: string = 'https://image.tmdb.org/t/p/original/';

function Gallery() {

  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const results = response.data.results.slice(0, 5);
        const newData = results.map((result: { backdrop_path: string }) => result.backdrop_path);
        setData(newData);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const currentImage = data[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  return (
    <div
      className="gallery"
      style={{
        position: 'relative',
        width: '80%',
        margin: '0 auto',
        height: '400px',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-out',
        backgroundImage: `url(${imgUrl + currentImage})`
      }}
    >
      <button className="gallery-arrow gallery-arrow-left" onClick={handlePrevClick} style={{ position: 'absolute', left: '30%', top: '50%' }}>
        &lt;
      </button>
      <button className="gallery-arrow gallery-arrow-right" onClick={handleNextClick} style={{ position: 'absolute', right: '30%', top: '50%' }}>
        &gt;
      </button>
      <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
        {data.map((item, index) => (
          <button key={index} style={{ width: '10px', height: '10px', margin: '0 5px', borderRadius: '50%', backgroundColor: currentIndex === index ? 'aqua' : 'white' }} onClick={() => setCurrentIndex(index)} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;