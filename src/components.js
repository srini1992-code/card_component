import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function components({ imageSrc, name, date, content }) {
  const style = { width: "60px", height: "75px", borderRadius: "0px" };

  return (
    <div className="components">
      <div className="content__image">
        <Avatar src={imageSrc} style={style} />
      </div>
      <div className="content__data">
        <div className="content__title">
          <h2 className="title">{name}</h2>
          <span className="date">Today at {date}</span>
        </div>
        <div className="content__body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
