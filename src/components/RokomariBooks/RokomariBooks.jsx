import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const RokomariBooks = () => {
  const allBooks = useLoaderData();

  return (
    <div>
      <h3 className="text-center text-2xl font-semibold underline">
        <span className="bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text italic font-bold">
          Rokomari
        </span>{" "}
        Books
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {allBooks.map((book) => (
          <Book key={book.bookId} fromRokoMari={true} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default RokomariBooks;
/* 
 {
    "bookId": 1,
    "bookName": "হাবলুদের জন্য প্রোগ্রামিং",
    "author": "ঝংকার মাহবুব",
    "image": "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/00ea58560_112222.jpg",
    "review": "হাবলুদদের জন্য অত্যন্ত উপকারী বই, নতুনদের জন্য সুপারিশ করা হচ্ছে।",
    "banglaReview": "হাবলুদদের জন্য অত্যন্ত উপকারী বই, নতুনদের জন্য সুপারিশ করা হচ্ছে।",
    "totalPages": 250,
    "rating": 4.5,
    "category": "প্রোগ্রামিং",
    "tags": ["হাবলুদ", "শিক্ষা"],
    "publisher": "রকমারি প্রকাশন",
    "yearOfPublishing": 2019
  },
*/
