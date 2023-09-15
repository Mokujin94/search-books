import { useState } from "react";
import BookCard from "./components/bookCard/BookCard";
import Search from "./components/search/Search";

function App() {
  const [books, setBooks] = useState([]);

  const createBooks = (newBooks) => {
    setBooks((books) => (books = newBooks));
  };

  return (
    <div className="App">
      <h1 className="title">Searching books</h1>
      <Search booksing={createBooks} />
      <div className="books__wrapper">
        {books.map(({ title, descr, image }, i) => {
          return <BookCard key={i} title={title} descr={descr} image={image} />;
        })}
      </div>
    </div>
  );
}

export default App;
