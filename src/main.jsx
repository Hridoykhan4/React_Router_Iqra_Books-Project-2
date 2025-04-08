import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import DashBoard from "./components/DashBoard/DashBoard";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import RokomariBooks from "./components/RokomariBooks/RokomariBooks";
import RokomariDetail from "./components/RokomariDetail/RokomariDetail";
import RokomariCartBooks from "./components/RokomariCartBooks/RokomariCartBooks";
import CartProvider from "./Provider/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rokomaribooks",
        element: <RokomariBooks></RokomariBooks>,
        loader: () => fetch("/bookData2.json"),
      },
      {
        path: "/rokomarilistedbooks",
        element: <RokomariCartBooks></RokomariCartBooks>,
        loader: () => fetch("/bookData2.json"),
      },
      {
        path: "/rokoBookDetail/:bookId",
        element: <RokomariDetail></RokomariDetail>,
        loader: () => fetch("/bookData2.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: async () => {
          const res = await fetch("/booksData.json");
          if (!res.ok) {
            throw new Error("Failed To Fetch Data");
          }
          return res.json();
        },
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: async () => {
          const response = await fetch("/booksData.json");
          if (!response.ok) {
            throw new Error("Failed to fetch book data");
          }
          return response.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </StrictMode>
);
