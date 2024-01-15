import React from "react";
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
  onClickTopic,
  allPhotos,
  selectedTopic,
  onClickLogo,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        onClickTopic={onClickTopic}
        onClickLogo={onClickLogo}
      />
      <PhotoList
        photos={selectedTopic !== null ? photos : allPhotos}
        favorites={favorites}
        onClickFav={onClickFav}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};
export default HomeRoute;
