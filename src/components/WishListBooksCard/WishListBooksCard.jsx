import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../localstorage";
import { useEffect, useState } from "react";
import WishListBooksCardDetails from "../WishListBooksCardDetails/WishListBooksCardDetails";

const WishListBooksCard = () => {

    const books = useLoaderData();
    const [wishListBooks, setWishListBooks] = useState([]);
    useEffect( () =>{
        const storedWishList = getStoredWishList();
        if(storedWishList.length > 0){
            const exiteWishList = books.filter(book => storedWishList.includes(book.bookId));
            setWishListBooks(exiteWishList);
        }       
    }, [books])
    
    
    return (
        <div>
            {
                wishListBooks.map(book => <WishListBooksCardDetails key={book.bookId} book={book}></WishListBooksCardDetails>)
            }
        </div>
    );
};

export default WishListBooksCard;