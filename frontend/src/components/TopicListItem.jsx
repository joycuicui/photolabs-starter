import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onClickTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => onClickTopic(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
