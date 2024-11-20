import { useNavigate } from "react-router-dom";

const Banner = () => {

    const naviGate = useNavigate();
    const handleViewList = () =>{
        naviGate('/listed-book');
    }
    
    return (
        <div className="flex md:flex-row flex-col bg-slate-300 p-32 justify-between items-center">
            <div>
                <h1 className="text-6xl font-bold mb-6">Books to freshen up <br /> your bookshelf</h1>
                <button onClick={handleViewList} className="bg-[#23BE0A] px-3 py-2 text-white rounded-lg">View The List</button>
            </div>
            <div>
                <img src="src/components/Banner/pngwing 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;