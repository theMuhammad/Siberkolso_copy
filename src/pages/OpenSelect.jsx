import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const OpenSelect = ({ name, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [hoveredOption, setHoveredOption] = useState(null); // Hover holatini boshqarish

    const handleSelect = (option) => {
        if (selectedOption === option) {
            setSelectedOption(null); // 2-marta bosishda tanlovni bekor qilish
        } else {
            setSelectedOption(option); // 1-marta bosishda tanlash
        }
        onChange(option); // Parent komponentga qiymatni uzatish
    };

    return (
        <div className="w-full bg-white border h-[265px] overflow-auto rounded-b-md ">
            <ul>
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`flex items-center text-[#666666] py-4 cursor-pointer ${selectedOption === option
                                ? "bg-[#FF5200]" // Tanlangan holatda
                                : "hover:bg-[#e1e1e1]" // Hover holatida
                            }`}
                        onClick={() => handleSelect(option)} // Tanlash uchun faqat onClick
                        onMouseEnter={() => setHoveredOption(option)} // Hover boshlanishi
                        onMouseLeave={() => setHoveredOption(null)} // Hover tugashi
                    >
                        <label
                            htmlFor={`${name}-${option}`}
                            className="text-[13px] ml-3 cursor-pointer flex-grow"
                        >
                            {option}
                        </label>
                        {selectedOption === option &&
                            (hoveredOption === option ? (
                                <FaTimes size={16} className="text-white mr-2 font-normal" />
                            ) : (
                                <FaCheck size={16} className="text-white mr-2 font-normal" />
                            ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OpenSelect;
