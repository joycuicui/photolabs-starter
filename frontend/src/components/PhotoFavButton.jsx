import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, favorites, onClickFav }) {
  // const [selected, setSelected] = useState(false);
  // const [favorites, setFavorites] = useState([]);

  // const handleClickFav = () => {
  //   setSelected((s) => !s);
  //   setFavorites((prevF) => {
  //     if (selected) {
  //       return prevF.filter((photoId) => photoId !== id);
  //     } else {
  //       return [...prevF, id];
  //     }
  //   });
  // };

  return (
    <div className="photo-list__fav-icon" onClick={() => onClickFav(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon favorites={favorites} id={id} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
