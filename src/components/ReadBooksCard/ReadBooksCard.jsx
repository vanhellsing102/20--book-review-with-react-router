import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../localstorage";
import { useEffect, useState } from "react";
import ReadBooksCardDetails from "../ReadBooksCardDetails/ReadBooksCardDetails";


const ReadBooksCard = () => {
    
    const books = useLoaderData();
    const [booksDetails, setBooksDetails] = useState([]);
    useEffect(() =>{
        const storedBooks = getStoredBooks();
        const displayBooks = [];
        for (const id of storedBooks) {
            const book  = books.find(book => book.bookId === id);
            if (book) {
                displayBooks.push(book);
            }
        }
        setBooksDetails(displayBooks); 
    }, [books]);
    
    
    return (
        <div>
            {
                booksDetails.map(book => <ReadBooksCardDetails key={book.bookId} book={book}></ReadBooksCardDetails>)
            }
        </div>
    );
};

export default ReadBooksCard;