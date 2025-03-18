import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 p-6 border border-black/30 shadow-sm">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[200px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((tag, i) => (
              <button
                className="bg-green-100 px-4 py-2 font-medium text-green-700 rounded-md"
                key={i}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="border-t border-black/50 border-dashed"></div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="flex justify-between">
            <div className="badge font-semibold badge-outline">{category}</div>
            Rating: {rating} {rating > 4.7 && `✔`}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

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
