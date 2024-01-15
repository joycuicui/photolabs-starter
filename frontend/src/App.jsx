import React from "react";
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
    handleClickTopic,
    handleClickLogo,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        allPhotos={state.allPhotos}
        photos={state.photoData}
        onOpenModal={setPhotoSelected}
        favorites={state.favorites}
        onClickFav={updateToFavPhotoIds}
        isFavPhotoExist={state.favorites?.length > 0}
        onClickTopic={handleClickTopic}
        onClickLogo={handleClickLogo}
        selectedTopic={state.selectedTopic}
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
