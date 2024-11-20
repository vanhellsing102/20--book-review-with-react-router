import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const ReadBooksCardDetails = ({book}) => {
    const {image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = book;
    return (
        <div className="border rounded-xl w-full p-8 mt-6 flex md:flex-row flex-col gap-5">
            <div>
                <img className="bg-slate-300 p-10 rounded-lg" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p>By : {author}</p>
                <div className="flex justify-between gap-14">
                    <div className="flex gap-3">
                        <p className="font-bold">Tag: </p>
                        {
                            tags.map((tag, index) => <p className="text-[#23BE0A]" key={index}>#{tag}</p>)
                        }
                    </div>
                    <div>
                        <p className="flex justify-center items-center gap-3"><CiLocationOn className="text-xl" />Year of publishing : {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-8 items-center border-b pb-5">
                    <p className="flex  items-center gap-3"><MdManageAccounts className="text-xl"/> Publisher : {publisher}</p>
                    <p className="flex items-center gap-3"><RiPagesLine className="text-xl" />Page : {totalPages}</p>
                </div>
                <div className="flex items-center gap-5">
                    <p className="bg-slate-300 rounded-[30px] px-2 text-[#328EFF] py-1">Category: {category}</p>
                    <p className="rounded-[30px] px-2 text-[#FFAC33] bg-red-100 py-1">Ratings: {rating}</p>
                    <button className="bg-[#23BE0A] text-white font-semibold px-2 rounded-[30px] py-1">View Details</button>
                </div>
            </div>
        </div>
    );
};

ReadBooksCardDetails.propTypes = {
    book: PropTypes.object.isRequireds
}

export default ReadBooksCardDetails;