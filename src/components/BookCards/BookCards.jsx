import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const BookCards = () => {

    const books = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl font-bold py-9 text-center">Books {books.length}</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                {
                    books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookCards;