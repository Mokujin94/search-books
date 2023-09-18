import { useState } from "react";
import BookCard from "./components/bookCard/BookCard";
import Search from "./components/search/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const createBooks = (newBooks) => {
    setBooks((books) => (books = newBooks));
  };

  const content = !loading && !error ? books.map(({ title, descr, image }, i) => {
    return <BookCard key={i} title={title} descr={descr} image={image} />;
  }) : null;

  const wasError = !loading && error ? <p className="error">Не найдено</p> : null;
  const onLoading = loading && !error ? <p className="loading">Загрузка...</p> : null;

  return (
    <div className="App">
      <h1 className="title">Searching books</h1>
      <Search booksing={createBooks} setLoading={setLoading} setError={setError} />
      <div className="books__wrapper">
        {wasError}
        {onLoading}
        {content}
      </div>
    </div>
  );
}

export default App;
