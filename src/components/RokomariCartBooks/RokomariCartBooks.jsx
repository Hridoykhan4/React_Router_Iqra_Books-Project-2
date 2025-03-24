import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getRokomariBooks,
  removeFromRokomariCart,
} from "../utility/addToRokoMariDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
const RokomariCartBooks = () => {
  const [books, setBooks] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const getAddCart = getRokomariBooks();

    const listedCartBooks = allBooks.filter((book) =>
      getAddCart.includes(book.bookId)
    );
    setBooks(listedCartBooks);
  }, [allBooks]);

  const handleRemove = (id) => {
    removeFromRokomariCart(id);
    const getAddCart = getRokomariBooks();
    const listedCartBooks = allBooks.filter((book) =>
      getAddCart.includes(book.bookId)
    );
    setBooks(listedCartBooks);
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Cart List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-3 font-semibold text-2xl">{`${
            books.length
              ? "Books: " + books.length
              : "Currently No Book is the cart"
          }`}</h2>
          {books.map((book) => (
            <Book
              handleRemove={handleRemove}
              fromReadList={true}
              book={book}
              key={book.bookId}
            ></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RokomariCartBooks;
