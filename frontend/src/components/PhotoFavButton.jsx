import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, favorites, onClickFav, isDarkMode }) {
  return (
    <div
      className={`photo-list__fav-icon ${isDarkMode ? "dark" : ""}`}
      onClick={() => onClickFav(id)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon favorites={favorites} id={id} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
