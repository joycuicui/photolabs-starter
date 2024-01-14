import { useEffect, useReducer, useState } from "react";

export const ACTIONS = {
  UPDATE_FAVORITES: "UPDATE_FAVORITES",
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FAVORITES:
      const updatedFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((photoId) => photoId !== action.payload)
        : [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavorites };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload, modal: true };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null, modal: false };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    modal: false,
    selectedPhoto: null,
    favorites: [],
    photoData: [],
    topicData: [],
  });

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  const photosByTopics = (topicId) => {
    if (topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        );
    }
  };

  const updateToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.UPDATE_FAVORITES, payload: id });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  // const [state, setState] = useState({
  //   modal: false,
  //   selectedPhoto: null,
  //   favorites: [],
  // });

  // const updateToFavPhotoIds = (id) => {
  //   setState((prev) => {
  //     const updatedFavorites = prev.favorites.includes(id)
  //       ? prev.favorites.filter((photoId) => photoId !== id)
  //       : [...prev.favorites, id];
  //     return { ...prev, favorites: updatedFavorites };
  //   });
  // };

  // const setPhotoSelected = (photo) => {
  //   setState((prev) => {
  //     return { ...prev, selectedPhoto: photo, modal: true };
  //   });
  // };

  // const onClosePhotoDetailsModal = () => {
  //   setState((prev) => {
  //     return { ...prev, selectedPhoto: null, modal: false };
  //   });
  // };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photosByTopics,
  };
}
