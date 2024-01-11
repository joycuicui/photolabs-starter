import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ location, urls, user }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={urls.regular} alt="image" />
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
