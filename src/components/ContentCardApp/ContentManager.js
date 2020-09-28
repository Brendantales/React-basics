import React from "react";
import "./ContentCardStyle.css";

function ContentManager(props) {
  return (
    <div>
      <img src={props.imgUrl} className="contentCardStyle" />
      <h3>{props.name}</h3>
      <p>{props.region}</p>
      <a href={props.contactUrl}> {props.contactName} </a>
    </div>
  );
}

export default ContentManager;
