import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = ({
  location,
  url,
  user,
  id,
  favorites,
  onClickFav,
  onOpenModal,
  modal,
}) => {
  return (
    <div className={modal ? "photo-details-modal__images" : "photo-list__item"}>
      <PhotoFavButton id={id} favorites={favorites} onClickFav={onClickFav} />
      <img
        onClick={onOpenModal}
        className={modal ? "photo-details-modal__image" : "photo-list__image"}
        src={url}
        alt="image"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt="profile"
        />
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
