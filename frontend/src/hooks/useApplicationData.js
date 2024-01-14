// Our useApplicationData Hook will return an object with four keys representing the following items:

import { useState } from "react";

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favorite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.

export function useApplicationData() {
  const [state, setState] = useState({
    modal: false,
    selectedPhoto: null,
    favorites: [],
  });

  // const [modal, setModal] = useState(false);
  // const [selected, setSelected] = useState(null);
  // const [favorites, setFavorites] = useState([]);

  const updateToFavPhotoIds = (id) => {
    setState((prev) => {
      // if (prev.favorites?.includes(id)) {
      //   return prev.favorites.filter((photoId) => photoId !== id);
      // } else {
      //   return [...prev.favorites, id];
      // }
      const updatedFavorites = prev.favorites.includes(id)
        ? prev.favorites.filter((photoId) => photoId !== id)
        : [...prev.favorites, id];
      return { ...prev, favorites: updatedFavorites };
    });
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => {
      return { ...prev, selectedPhoto: photo, modal: true };
    });
  };

  const onClosePhotoDetailsModal = () => {
    // setSelected(null);
    // setModal(false);
    setState((prev) => {
      return { ...prev, selectedPhoto: null, modal: false };
    });
  };
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}
