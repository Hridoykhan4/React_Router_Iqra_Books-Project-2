import { useEffect, useState } from "react";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">Books</h2>

        </div>
    );
};

export default Books;