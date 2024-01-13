import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ onCloseModal, selected }) => {
  selected && console.log(selected);
  const similarPhotos = Object.values(selected.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        onClick={onCloseModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoListItem
          location={selected.location}
          url={selected.urls.full}
          user={selected.user}
          modal={true}
        />
      </div>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
