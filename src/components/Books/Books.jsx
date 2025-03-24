import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [counter, setCounter] = useState(4);
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
        {books.slice(0, counter).map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>

      {counter > 4 ? (
        ""
      ) : (
        <div
          onClick={() => setCounter(books.length)}
          className="text-center my-8"
        >
          <button className="bg-gradient-to-t from-sky-700 to-sky-500 btn text-white px-9 py-2">
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;
