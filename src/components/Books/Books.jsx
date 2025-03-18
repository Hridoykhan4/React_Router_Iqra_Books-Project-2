import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mt-7 mb-4 md:text-3xl lg:text-4xl text-center font-bold">
        Books
      </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            books.map((book) => <Book key={book.bookId} book={book}></Book>)
        }
    </div>

    </div>
  );
};

export default Books;
