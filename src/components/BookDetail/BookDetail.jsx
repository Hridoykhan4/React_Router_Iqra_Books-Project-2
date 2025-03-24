import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../utility/addToDB";

const BookDetail = () => {

  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const { image, bookId: currentBookId } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="my-12 space-y-3">
      <h3>Book Details: {currentBookId}</h3>
      <img className="w-36" src={image} alt="" />
      <div className="flex gap-3">
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-outline btn-accent"
        >
          Mark as Read
        </button>
        <button
          onClick={() => handleWishList(id)}
          className="btn btn-accent"
        >
          Add To Wish List
        </button>
      </div>
    </div>
  );
};

export default BookDetail;

/* 
/* 
{
    "bookId": 6,
    "bookName": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "image": "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 310,
    "rating": 4.9,
    "category": "Fantasy",
    "tags": [
        "Adventure",
        "Epic"
    ],
    "publisher": "Allen & Unwin",
    "yearOfPublishing": 1937
}
*/
