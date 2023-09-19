import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./page/booksPage/BooksPage";
import BookPage from "./page/bookPage/BookPage";

function App() {
  return (
    <Routes>
      <Route path="/book" element={<BooksPage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="*" element={<BooksPage />} />
    </Routes>
  );
}

export default App;
