import React from "react";

const News = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <img src={props.img} />
      <p>{props.text}</p>
    </article>
  );
};

export default News;
