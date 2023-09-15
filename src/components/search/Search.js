import React, { useEffect, useState } from "react";

import GoogleService from "../../services/GoogleService";

import "./search.scss";

function Search({ booksing }) {
  const googleService = new GoogleService();

  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!text) {
      return;
    }
    searchInput();
  }, [text]);

  const onChange = (e) => {
    setText((item) => (item = e.target.value));
  };

  function searchInput() {
    googleService.getSearchBooks(text).then(onBooksLoaded).catch(onError);
  }

  const onBooksLoaded = (newBooks) => {
    booksing(newBooks);
  };

  const onError = () => {
    console.log("Массив пуст");
  };

  return (
    <div className="search">
      <input
        value={text}
        onChange={onChange}
        className="search__input"
        type="text"
        placeholder="Search books..."
      />
    </div>
  );
}

export default Search;
