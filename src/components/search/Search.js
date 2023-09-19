import React, { useEffect, useState } from "react";

import GoogleService from "../../services/GoogleService";

import "./search.scss";

function Search({
  booksing,
  setLoading,
  setError,
  setBooks,
  setText,
  text,
  setStartTotal,
}) {
  const googleService = new GoogleService();

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
    setLoading(true);
    setStartTotal(10);
    googleService
      .getSearchBooks(text, 0, 10)
      .then(onBooksLoaded)
      .catch(onError);
  }

  const onBooksLoaded = (newBooks) => {
    setLoading(false);
    setError(false);
    booksing(newBooks);
  };

  const onError = (e) => {
    setBooks([]);
    setLoading(false);
    setError(true);
    console.log(e);
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
