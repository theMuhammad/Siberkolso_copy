import { useState, useEffect } from "react";
import TireList from "./TireList";
import Loader from "./Loader"; // Import the Loader component

const TirePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., API call)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="tire-page w-full bg-[#f5f5f5] p-4 shadow-md">
            <div className="max-w-[1140px] mx-auto">
                {loading ? (
                    <Loader /> // Show loader while loading
                ) : (
                    <>
                        <h1 className="text-black font-bold text-2xl mb-4">Tire Products</h1>
                        <TireList />
                    </>
                )}
            </div>
        </div>
    );
};

export default TirePage;