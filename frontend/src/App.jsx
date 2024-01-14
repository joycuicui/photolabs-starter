import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const [favorites, setFavorites] = useState([]);
  const isFavPhotoExist = favorites.length > 0;

  const handleClickFav = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((photoId) => photoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const openModal = (photo) => {
    setSelected(photo);
    setModal(true);
  };

  const closeModal = () => {
    setSelected(null);
    setModal(false);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onOpenModal={openModal}
        favorites={favorites}
        onClickFav={handleClickFav}
        isFavPhotoExist={isFavPhotoExist}
      />
      {modal ? (
        <PhotoDetailsModal
          onCloseModal={closeModal}
          selected={selected}
          favorites={favorites}
          onClickFav={handleClickFav}
        />
      ) : null}
    </div>
  );
};

export default App;
