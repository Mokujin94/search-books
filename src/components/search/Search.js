import React, { useEffect, useState } from "react";

import GoogleService from "../../services/GoogleService";

import "./search.scss";

function Search({ booksing, setLoading, setError }) {
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
    setLoading(true);
    googleService.getSearchBooks(text).then(onBooksLoaded).catch(onError);
    
  }

  const onBooksLoaded = (newBooks) => {
    setLoading(false);
    setError(false)
    booksing(newBooks);
  };

  const onError = (e) => {
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
