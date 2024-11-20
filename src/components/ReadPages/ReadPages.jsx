import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../localstorage";
import { useEffect, useState } from "react";
import CustomeBarChart from "../CustomeBarChart/CustomeBarChart";

const ReadPages = () => {
    const books = useLoaderData();
    const [barChartBooks, setBarChartBooks] = useState([]);
    useEffect( () =>{
        const storedReadBooks = getStoredBooks();
        if(books.length > 0){
            const exitsBooks = books.filter(book => storedReadBooks.includes(book.bookId));
            setBarChartBooks(exitsBooks);
        }

    },[books])

    return (
        <div>
            <h1 className="font-bold text-4xl text-center">Read to Pages</h1>
            <CustomeBarChart barChartBooks={barChartBooks}></CustomeBarChart>
        </div>
    );
};

export default ReadPages;