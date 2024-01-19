import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/actions";
import SingleAlbum from "./SingleAlbum";

const AlbumsGallery = ({ searchQuery, artistName, stile }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    //Se è disponibile searchQuery chiama il relativo fetch
    if (searchQuery) {
      dispatch(fetchSongs(searchQuery));
      console.log("Fetching songs for searchQuery:", searchQuery);
      console.log("Success:", songs);
    } else if (artistName) {
      // Se artistName è disponibile
      dispatch(fetchSongs(artistName));
      console.log("Fetching songs for artistName:", artistName);
      console.log("Success:", songs);
    }
  }, [dispatch, searchQuery, artistName]);

  // Impostazioni per lo slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Utilizzo dello Slider con le impostazioni specificate */}
      <Slider {...settings} className={stile}>
        {/* Mappo i dati ottenuti dalla chiamata API */}
        {Array.isArray(songs) &&
          songs.map((result) => <SingleAlbum key={result.id} artist={result.artist.name} album={result.album} />)}
      </Slider>
    </>
  );
};

export default AlbumsGallery;
