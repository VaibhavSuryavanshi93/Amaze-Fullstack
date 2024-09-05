import React from "react";

const product = (props) => {
  return (
    <div className="product" data-category="men" data-href="men.html">
      <div className="sale">Sale!</div>
      <img loading="lazy" src={props.img} alt={props.alt} />
      <div className="info">
        <h3>{props.name}</h3>
        <p>{props.gender}</p>
        <p className="price">{props.price}</p>
        <div className="sizes">
          <div className="size blue"></div>
          <div className="size green"></div>
          <div className="size brown"></div>
        </div>
      </div>
    </div>
  );
};

export default product;
