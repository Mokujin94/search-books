import React, { useEffect, useState } from "react";

import GoogleService from "../../services/GoogleService";

import "./search.scss";

function Search({ booksing, setLoading, setError, setBooks }) {
  const googleService = new GoogleService();

  const [text, setText] = useState("");

  useEffect(() => {
    setBooks([])
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
    googleService.getSearchBooks(text, 40, 40).then((res) => onBooksLoaded(res)).catch(onError);
    
  }

  const onBooksLoaded = (newBooks) => {
    setBooks([])
    setLoading(false);
    setError(false)
    booksing(newBooks);
  };

  const onError = (e) => {
    setBooks([])
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
