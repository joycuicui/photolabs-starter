import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = ({ location, urls, user, id, favorites, onClickFav }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} favorites={favorites} onClickFav={onClickFav} />
      <img
        onClick={openModal}
        className="photo-list__image"
        src={urls.regular}
        alt="image"
      />
      <PhotoDetailsModal isOpen={modal} />
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
