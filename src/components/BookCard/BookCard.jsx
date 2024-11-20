import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {

    const {image, tags, bookName, author, category, rating, bookId} = book;

    return (
        <Link to={`/${bookId}`}>
            <div className="border border-black rounded-2xl p-6 flex flex-col gap-2">
                <div className="flex justify-center bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={image} alt="" />
                </div>
                <div className="flex text-[#23BE0A] gap-5 ">
                    {
                        tags.map((tag,index) => <p className="bg-[#F3F3F3] rounded-3xl p-2" key={index}>{tag}</p>)
                    }
                </div>
                <h2 className="font-bold text-2xl">{bookName}</h2>
                <p className="text-[16px] font-medium text-[#131313]">By : {author}</p>
                <hr />
                <div className="flex justify-between items-center">
                    <p>{category}</p>
                    <p className="flex justify-center items-center gap-3">{rating} <CiStar className="text-xl"></CiStar></p>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BookCard;