import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../utility/addToDB";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const allBooksData = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadData = getStoredReadList();
    const readItems = [];

    if (allBooksData.length) {
      for (const e of storedReadData) {
        const matchedBook = allBooksData.find((book) => book.bookId === e);
        if (matchedBook) {
          readItems.push({
            name: `${matchedBook.bookName} (${matchedBook.yearOfPublishing})`,
            publishedYear: matchedBook.yearOfPublishing,
          });
        }
      }

      setReadList(readItems);
    }
  }, [allBooksData]);

  return (
    <div>
      {readList.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={readList}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="publishedYear" barSize={60} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DashBoard;
