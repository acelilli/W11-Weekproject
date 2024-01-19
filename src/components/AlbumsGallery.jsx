import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import albumcard
import { useSelector } from "react-redux";
import SingleAlbum from "./SingleAlbum";

const AlbumsGallery = ({ searchQuery, stile }) => {
  // Splitto la stringa se serve (tipo in home)
  const searchTerms = searchQuery.split(",").map((term) => term.trim());
  const searchResults = useSelector((state) => state.search.searchResults);

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
        {Array.isArray(searchResults) &&
          searchResults.map((result) => (
            <SingleAlbum key={result.id} artist={result.artist.name} album={result.album} />
          ))}
      </Slider>
    </>
  );
};
export default AlbumsGallery;
