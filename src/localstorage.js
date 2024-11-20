const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}
const saveBooksToLocalStorage = (id) =>{
    const storedBooks = getStoredBooks();
    const exitBooks = storedBooks.find(bookId => bookId === id);
    if (!exitBooks){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks));
    }
}



const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wishlist');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}
const saveWistListToLocalStorage = (id) =>{
    const wishList = getStoredWishList();
    const exitWishList = wishList.find(WihsId => WihsId === id);
    if (!exitWishList){
        wishList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishList));
    }
}

export { saveBooksToLocalStorage, getStoredBooks,saveWistListToLocalStorage, getStoredWishList };