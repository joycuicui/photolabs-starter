import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  // const openModal = (photo) => {
  //   setSelected(photo);
  //   setModal(true);
  // };

  // const isFavPhotoExist = state.favorites.length > 0;

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onOpenModal={setPhotoSelected}
        favorites={state.favorites}
        onClickFav={updateToFavPhotoIds}
        isFavPhotoExist={state.favorites?.length > 0}
      />
      {state.modal ? (
        <PhotoDetailsModal
          onCloseModal={onClosePhotoDetailsModal}
          selected={state.selectedPhoto}
          favorites={state.favorites}
          onClickFav={updateToFavPhotoIds}
        />
      ) : null}
    </div>
  );
};

export default App;
