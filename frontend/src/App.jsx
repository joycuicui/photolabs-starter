import React, { useState, useEffect } from "react";
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

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
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {state.modal ? (
        <PhotoDetailsModal
          onCloseModal={onClosePhotoDetailsModal}
          selected={state.selectedPhoto}
          favorites={state.favorites}
          onClickFav={updateToFavPhotoIds}
          isDarkMode={isDarkMode}
        />
      ) : null}
    </div>
  );
};

export default App;
