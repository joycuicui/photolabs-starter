import { useEffect, useReducer, useState } from "react";

export const ACTIONS = {
  UPDATE_FAVORITES: "UPDATE_FAVORITES",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SELECT_TOPIC: "SELECT_TOPIC",
  SHOW_ALL_PHOTOS: "SHOW_ALL_PHOTOS",
  SET_ALL_PHOTOS: "SET_ALL_PHOTOS",
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

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };

    case ACTIONS.SET_ALL_PHOTOS:
      return { ...state, allPhotos: action.payload };

    case ACTIONS.SHOW_ALL_PHOTOS:
      return { ...state, selectedTopic: null };

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
    selectedTopic: null,
    allPhotos: [],
  });

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_ALL_PHOTOS, payload: data })
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

  const handleClickTopic = (topicId) => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });
    photosByTopics(topicId);
  };

  const handleClickLogo = () => {
    dispatch({ type: ACTIONS.SHOW_ALL_PHOTOS });
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

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    handleClickTopic,
    handleClickLogo,
  };
}
