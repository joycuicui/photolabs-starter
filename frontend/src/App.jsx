import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);

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
      <HomeRoute topics={topics} photos={photos} onOpenModal={openModal} />
      {modal ? (
        <PhotoDetailsModal onCloseModal={closeModal} selected={selected} />
      ) : null}
    </div>
  );
};

export default App;
