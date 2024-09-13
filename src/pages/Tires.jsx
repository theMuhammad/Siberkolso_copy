import { useState, useEffect } from "react";
import TireList from "./TireList";
import Loader from "./Loader"; // Import the Loader component

const TirePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=" tire-page w-full bg-[#f5f5f5] p-4 md:p-6 lg:p-8 shadow-md">
            <div className="max-w-[1140px] mx-auto">
                {loading ? (
                    <Loader /> 
                ) : (
                    <>
                        <h1 className="text-black font-bold text-xl md:text-2xl lg:text-3xl mb-10 text-start">
                            Tire Products
                        </h1>
                        <TireList />
                    </>
                )}
            </div>
        </div>
    );
};

export default TirePage;