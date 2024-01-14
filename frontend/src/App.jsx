import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
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
