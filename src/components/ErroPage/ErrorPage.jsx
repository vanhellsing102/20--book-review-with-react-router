import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const naviGate = useNavigate();
    const handleGoBack = () =>{
        naviGate(-1);
    }
    return (
        <div className="text-center mt-40">
            <h1 className="font-bold text-5xl text-red-800">Oops !!!</h1>
            <button onClick={handleGoBack} className="px-5 py-2 mt-10 bg-[#23BE0A] text-white rounded-xl">Go Back</button>
        </div>
    );
};

export default ErrorPage;