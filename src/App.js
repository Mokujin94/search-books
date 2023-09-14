import BookCard from "./components/bookCard/BookCard";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <h1 className="title">Searching books</h1>
      <Search/>
      <div className="books__wrapper">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </div>
    </div>
  );
}

export default App;
