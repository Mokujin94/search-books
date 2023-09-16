import React, { useState } from "react";
import "./bookCard.scss";

function BookCard({ title, descr, image }) {
  return (
    <div className="bookCard">
      <div className="bookCard__image">
        <img src={image} alt="title" className="bookCard__image-item" />
      </div>
      <h1 className="bookCard__title">{title}</h1>
      <p className="bookCard__descr">{descr}</p>
    </div>
  );
}

export default BookCard;
