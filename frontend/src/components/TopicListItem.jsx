import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onClickTopic, isDarkMode }) => {
  return (
    <div className="topic-list__item" onClick={() => onClickTopic(id)}>
      <span className={isDarkMode ? "dark" : ""}>{title}</span>
    </div>
  );
};

export default TopicListItem;
