import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import topics from "../mocks/topics.js";
import photos from "../mocks/photos.js";

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};
export default HomeRoute;
