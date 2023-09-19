import { useState } from "react";
import BookCard from "../../components/bookCard/BookCard";
import Search from "../../components/search/Search";
import BookSkeleton from "../../components/bookSkeleton/BookSkeleton";
import GoogleService from "../../services/GoogleService";
import { Link } from "react-router-dom";

function BooksPage() {
  const googleService = new GoogleService();

  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [startTotal, setStartTotal] = useState(10);
  const [maxTotal, setMaxTotal] = useState(10);

  const createBooks = (newBooks) => {
    setBooks((books) => (books = newBooks));
  };

  const moreBooks = (newBooks) => {
    setBooks((books) => [...books, ...newBooks]);
  };
  const skeletonArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  const moreBooksLoaded = () => {
    setStartTotal((startTotal) => startTotal + 10);
    googleService
      .getSearchBooks(text, startTotal, maxTotal)
      .then((res) => moreBooks(res))
      .catch(onError);
  };

  const onError = (e) => {
    setBooks([]);
    setLoading(false);
    setError(true);
    console.log(e);
  };

  const content =
    !loading && !error
      ? books.map(({ id, title, descr, image }, i) => {
          return (
            <Link className="book__link" to={"/book/" + id}>
              <BookCard key={id} title={title} descr={descr} image={image} />
            </Link>
          );
        })
      : null;

  const wasError =
    !loading && error ? <p className="error">Не найдено</p> : null;

  const onLoading =
    loading && !error
      ? skeletonArr.map(({ id }) => {
          return <BookSkeleton key={id} />;
        })
      : null;

  return (
    <div className="App">
      <h1 className="title">Searching books</h1>
      <Search
        booksing={createBooks}
        setLoading={setLoading}
        setError={setError}
        setBooks={setBooks}
        setText={setText}
        text={text}
        setStartTotal={setStartTotal}
      />
      <div className="books__wrapper">
        {wasError}
        {text ? onLoading : null}
        {text ? content : null}
      </div>
      {text && !loading && !error ? (
        <button className="loadmore" onClick={moreBooksLoaded}>
          more
        </button>
      ) : null}
    </div>
  );
}

export default BooksPage;
