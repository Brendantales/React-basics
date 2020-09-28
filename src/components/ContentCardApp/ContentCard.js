import React from "react";
import "./ContentCardStyle.css";
import ContentManager from "./ContentManager";

function ContentCard() {
  return (
    <div>
      <ContentManager
        imgUrl="https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_960_720.jpg"
        name="Pyreenees mountain range"
        region="Spain and France"
        contactUrl="https//www.google.com"
        contactName="Google"
      />
      <ContentManager
        imgUrl="https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg"
        name="Scotland mountain ranges"
        region="Scotland"
        contactUrl="https//www.google.com"
        contactName="Google"
      />
    </div>
  );
}

export default ContentCard;
