import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favorites, onClickFav, onOpenModal }) => {
  const mappedPhotos = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      url={photo.urls.regular}
      user={photo.user}
      favorites={favorites}
      onClickFav={onClickFav}
      onOpenModal={() => onOpenModal(photo)}
    />
  ));

  return <ul className="photo-list">{mappedPhotos}</ul>;
};

export default PhotoList;
