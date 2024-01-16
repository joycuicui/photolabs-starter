import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  topics,
  isFavPhotoExist,
  onClickTopic,
  onClickLogo,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className={`top-nav-bar ${isDarkMode ? "dark" : ""}`}>
      <span
        className={`top-nav-bar__logo ${isDarkMode ? "dark" : ""}`}
        onClick={onClickLogo}
      >
        PhotoLabs
      </span>
      <TopicList
        topics={topics}
        onClickTopic={onClickTopic}
        isDarkMode={isDarkMode}
      />
      <div className="button-container">
        <button
          className={`mode ${isDarkMode ? "dark" : ""}`}
          onClick={toggleDarkMode}
        >
          DarkMode
        </button>
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
