import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ imageData }) => {
  const { username, imageSource, id, location, profile } = imageData;
  return (
    <div>
      <img src={imageSource} alt="image" />
      <img src={profile} alt="profile" />
      <p>{username}</p>
      <p>
        {location.city} {location.country}
      </p>
    </div>
  );
};

export default PhotoListItem;
