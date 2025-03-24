import { useLoaderData, useParams } from "react-router-dom";
import {
  addToRokoLSCart,
  addToRokoLSWishList,
} from "../utility/addToRokoMariDB";

const RokomariDetail = () => {
  const loadRokomariBooks = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const matchedBook = loadRokomariBooks.find((books) => books.bookId === id);

  const {
    bookName,
    author,
    review,
    banglaReview,
    bookId: currentId,
  } = matchedBook;

  const handleAddToCart = (id) => {
    addToRokoLSCart(id);
  };

  const handleAddToWishList = (id) => {
    addToRokoLSWishList(id);
  };

  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-16 sm:text-6xl">
            {bookName}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">{review}</p>
          <p>Author: {author}</p>
          <small className="mt-2">Review: {banglaReview}</small>
          <br />
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              onClick={() => handleAddToCart(currentId)}
              className="relative btn btn-lg inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Add To Cart
              </span>
            </a>
            <a
              onClick={() => handleAddToWishList(currentId)}
              className="relative btn btn-lg inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Add To WishList
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={matchedBook.image}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default RokomariDetail;
