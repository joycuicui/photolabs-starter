import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ imageData }) => {
  const { username, imageSource, id, location, profile } = imageData;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt="image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="profile" />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
