import { useState, useEffect } from "react";
import WheelsList from "./TireList"; // Ensure this points to the correct component
import Loader from "./Loader"; // Import the Loader component

const Wheels = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., API call)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="wheels-page w-full bg-[#f5f5f5] p-4 shadow-md">
            <div className="max-w-[1140px] mx-auto">
                {loading ? (
                    <Loader /> // Show loader while loading
                ) : (
                    <>
                        <h1 className="text-black font-bold text-2xl mb-10 text-start">Wheels Products</h1>
                        <WheelsList />
                    </>
                )}
            </div>
        </div>
    );
}

export default Wheels;