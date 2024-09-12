import { useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { TbSnowflake } from "react-icons/tb";
import { GiStitchedWound } from "react-icons/gi";

const GroupBtn = () => {
    const [activeButton, setActiveButton] = useState(2);
    const [showThirdButton, setShowThirdButton] = useState(true); 

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);

        if (buttonIndex === 2) {
            setShowThirdButton(true);
        } else if (buttonIndex !== 3) {
            setShowThirdButton(false);
        }
    };

    return (
        <div className="flex gap-x-6 mb-4">
            <button
                className={`flex gap-x-2 items-center py-2 ${activeButton === 1 ? "text-white" : "text-[#808080]"
                    } hover:text-white duration-300`}
                onClick={() => handleButtonClick(1)}
            >
                <AiOutlineSun />
                <h3>Летние шины</h3>
            </button>

            <button
                className={`flex gap-x-2 items-center py-2 ${activeButton === 2 ? "text-white" : "text-[#808080]"
                    } hover:text-white duration-300`}
                onClick={() => handleButtonClick(2)}
            >
                <TbSnowflake />
                <h3>Зимние шины</h3>
            </button>

            {showThirdButton && (
                <button
                    className={`flex gap-x-2 items-center py-2 ${activeButton === 3 ? "text-white" : "text-[#808080]"
                        } hover:text-white duration-300`}
                    onClick={() => handleButtonClick(3)}
                >
                    <GiStitchedWound />
                    <h3>Шипованные</h3>
                </button>
            )}
        </div>
    );
};

export default GroupBtn;
