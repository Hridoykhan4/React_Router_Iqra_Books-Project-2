export const getRokomariBooks = () => {
  const rokStored = localStorage.getItem("rokomari-books");
  return rokStored ? JSON.parse(rokStored) : [];
};

export const addToRokoLSCart = (id) => {
  const storedBooks = getRokomariBooks();
  if (storedBooks.includes(id)) {
    alert("");
  } else {
    storedBooks.push(id);
    localStorage.setItem("rokomari-books", JSON.stringify(storedBooks));
  }
};

export const getRokomariWishBooks = () => {
  const rokStored = localStorage.getItem("rokomari-books-wish");
  return rokStored ? JSON.parse(rokStored) : [];
};

export const addToRokoLSWishList = (id) => {
  const storedBooks = getRokomariWishBooks();
  if (storedBooks.includes(id)) {
    alert("");
  } else {
    storedBooks.push(id);
    localStorage.setItem("rokomari-books-wish", JSON.stringify(storedBooks));
  }
};

export const removeFromRokomariCart = (id) => {
  const cart = getRokomariBooks();
  const remaining = cart.filter((c) => c !== id);
  localStorage.setItem("rokomari-books", JSON.stringify(remaining));
};
