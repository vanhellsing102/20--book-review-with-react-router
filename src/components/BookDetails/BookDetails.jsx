import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBooksToLocalStorage, saveWistListToLocalStorage } from '../../localstorage';

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const parseBookId = parseInt(bookId);
    const book = books.find(book => book.bookId === parseBookId)
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;


    const handleRead = (id) =>{
        const storedBooks = getStoredBooks();
        const exitBooks = storedBooks.find(bookId => bookId === id);
        if (!exitBooks) {
            toast.success('Books Added to Read List');
            saveBooksToLocalStorage(id);
        }
        else{
            toast.error('You have already read this books');
        }    
    }

    const handleWishList = (id) =>{
        const storedBooks = getStoredBooks();
        const exitBooks = storedBooks.find(bookId => bookId === id);
        if(!exitBooks){
            toast.success('Books Added to WihsList');
            saveWistListToLocalStorage(id);
        }
        else{
            toast.error('Books Added to Read List');
            saveBooksToLocalStorage(id);
        }
    }


    return (
        <div className="flex md:flex-row flex-col justify-center gap-36 items-center py-10">
           <div className="flex justify-center items-center bg-slate-400 p-16 rounded-xl">
                <img className="w-[200px]" src={image} alt="" />
           </div>
           <div>
                <div className="border-b py-3">
                    <h1 className="font-bold text-4xl">{bookName}</h1>
                    <p>By : {author}</p>
                </div>
                <p className="border-b py-3">{category}</p>
                <p className="font-bold">Review: <span className="font-normal">{review}</span></p>
                <div className="flex gap-4 py-5 border-b">
                    {
                        tags.map((tag, index) => <p className="text-[#23BE0A]" key={index}>#{tag}</p>)
                    }
                </div>
                <div className="flex gap-10 items-center py-2">
                    <div>
                        <p>Number of pages</p>
                        <p>Publisher</p>
                        <p>Year of publishing</p>
                        <p>Rating</p>
                    </div>
                    <div className="font-bold">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className=" font-bold gap-7 flex py-5">
                    <button onClick={() => handleRead(parseBookId)} className="rounded-lg border-2 border-black py-2 px-5 hover:bg-[#23BE0A]">Read</button>
                    <button onClick={() =>handleWishList(parseBookId)} className="rounded-lg bg-[#50B1C9] border-2 border-black py-2 px-5 hover:bg-white">Wishlist</button>
                    <Toaster position='top-right'/>
                </div>
           </div>
        </div>
    );
};

export default BookDetails;