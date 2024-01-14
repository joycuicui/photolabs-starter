import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  topics,
  photos,
  onOpenModal,
  favorites,
  onClickFav,
  isFavPhotoExist,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        onClickFav={onClickFav}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};
export default HomeRoute;
