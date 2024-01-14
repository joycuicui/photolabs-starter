import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onClickTopic }) => {
  const mappedTopics = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title}
        onClickTopic={onClickTopic}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{mappedTopics}</div>;
};

export default TopicList;
