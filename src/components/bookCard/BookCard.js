import React from "react";
import "./bookCard.scss";

function BookCard({ title, descr, image }) {
  return (
    <div className="bookCard">
      <img src={image} alt="" />
    </div>
  );
}

export default BookCard;
