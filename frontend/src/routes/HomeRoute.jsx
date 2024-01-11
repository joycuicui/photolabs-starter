import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ topics, photos }) => {
  // const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const isFavPhotoExist = favorites.length > 0;

  const handleClickFav = (id) => {
    // setSelected((s) => !s);
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((photoId) => photoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        onClickFav={handleClickFav}
      />
    </div>
  );
};
export default HomeRoute;
