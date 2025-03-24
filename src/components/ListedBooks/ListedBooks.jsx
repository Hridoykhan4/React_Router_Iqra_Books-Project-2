import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const wishArr = [];
    for (const element of storedWishList) {
      const findWish = allBooks.find((book) => book.bookId === element);
      wishArr.push(findWish);
    }

    setWishList(wishArr);

    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, [allBooks]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No. of Pages") {
      const sortedReadListByPage = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadListByPage);
      const sortedWishListByPage = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishList(sortedWishListByPage);
    }
    if (sortType === "publisherYear") {
      const sortedByRelease = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortedByRelease);
      const sortedWishByRelease = [...wishList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setWishList(sortedWishByRelease);
    }

    if (sortType === "Rating") {
      const sortedReadListByRating = [...readList].sort(
        (a, b) => a.rating - b.rating
      );
      setReadList(sortedReadListByRating);
      const sortedWishListByRating = [...wishList].sort(
        (a, b) => b.rating - a.rating
      );
      setWishList(sortedWishListByRating);
    }
  };

  return (
    <div>
      <h3 className="text-3xl my-7">List Books</h3>
      <div className="flex justify-center my-5">
        <details className="dropdown">
          <summary className="btn bg-green-600 text-white m-1">
            {sort ? `Sort By ${sort}` : "Sort By"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSort("Rating")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("No. of Pages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleSort("publisherYear")}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        {readList.length <= 0 && wishList.length <= 0 && (
          <div className="h-[100px] font-bold text-center text-3xl flex justify-center items-center">
            Not any book is added !!!
          </div>
        )}

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">WishList books: {wishList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
