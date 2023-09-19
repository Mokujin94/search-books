import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GoogleService from "../../services/GoogleService";
import arrow from "../../image/arrow.png";
import "./bookPage.scss";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const googleService = new GoogleService();

  useEffect(() => {
    googleService.getBook(id).then((res) => setBook(res));
  }, []);
  return (
    <div className="bookPage">
      <div className="container">
        <Link to="/books" className="bookPage__link">
          <img src={arrow} alt="icon" className="bookPage__arrow" />
          Back to search
        </Link>
        <div className="bookPage__info">
          <div className="bookPage__avatar">
            <img src={book.avatar} alt="avatar" className="bookPage__img" />
          </div>
          <div className="bookPage__text">
            <h1 className="bookPage__author">{book.author}</h1>
            <h1 className="bookPage__title">{book.title}</h1>
            <p className="bookPage__descr">{book.descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
