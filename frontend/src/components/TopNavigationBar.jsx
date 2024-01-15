import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  topics,
  isFavPhotoExist,
  onClickTopic,
  onClickLogo,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={onClickLogo}>
        PhotoLabs
      </span>
      <TopicList topics={topics} onClickTopic={onClickTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
