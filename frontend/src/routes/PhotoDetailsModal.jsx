import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  onCloseModal,
  selected,
  favorites,
  onClickFav,
}) => {
  const similarPhotos = Object.values(selected.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        onClick={onCloseModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoListItem
        location={selected.location}
        url={selected.urls.full}
        user={selected.user}
        modal={true}
        favorites={favorites}
        onClickFav={onClickFav}
        id={selected.id}
      />

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList
          photos={similarPhotos}
          favorites={favorites}
          onClickFav={onClickFav}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
