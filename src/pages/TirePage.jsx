import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import OpenSelect from "./OpenSelect";
import GroupBtn from "./GroupBtn";
import { MdCancel } from "react-icons/md";

export default function DiskPage() {
    const [params, setParams] = useState({
        width: "",
        height: "",
        diameter: "",
        manufacturer: "",
    });
    const [activeButton, setActiveButton] = useState(1); // Default active button
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isOpen, setIsOpen] = useState({
        width: false,
        height: false,
        diameter: false,
        manufacturer: false,
    });

    const allDisks = [
        { name: "Viatti", model: "Brina Nordico V-522 88T", size: "185 / 65 / R15", price: "4 405", image: "path/to/image1.jpg" },
        { name: "Sailun(Dynamo)", model: "SNOW-H MWS01 101H", size: "235 / 55 / R19", price: "8 975", image: "path/to/image2.jpg" },
        { name: "Cordiant", model: "Snow-Cross 92T", size: "185 / 65 / R15", price: "4 465", image: "path/to/image3.jpg" },
        { name: "LingLong", model: "Green-Max Winter Grip 2 103T", size: "245 / 45 / R20", price: "14 975", image: "path/to/image4.jpg" },
        { name: "Arivo", model: "ICE CLAW ARW8 105T", size: "235 / 55 / R19", price: "9 975", image: "path/to/image5.jpg" },
        { name: "Roadcruza", model: "RA1100", size: "215 / 65 / R16", price: "7 975", image: "path/to/image6.jpg" },
        { name: "Sailun", model: "Atrezzo Eco 86T", size: "185 / 65 / R14", price: "3 150", image: "path/to/image7.jpg" },
    ];

    const handleChange = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        // Reset params if switching buttons
        if (buttonIndex === 1) {
            setParams({
                width: "",
                height: "",
                diameter: "",
                manufacturer: "",
            });
        }
    };

    const handleSearch = () => {
        const results = allDisks.filter(disk => {
            return (
                (params.width ? disk.size.includes(params.width) : true) &&
                (params.diameter ? disk.size.includes(params.diameter) : true) &&
                (params.manufacturer ? disk.name.includes(params.manufacturer) : true)
            );
        }).slice(0, 5);

        setFilteredProducts(results);
    };

    const handleReset = () => {
        setFilteredProducts([]);
        setParams({
            width: "",
            height: "",
            diameter: "",
            manufacturer: "",
        });
    };

    const toggleSection = (section) => {
        setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="disk-page w-full bg-[#282828] p-4 shadow-md">
            <div className="max-w-[1140px] mx-auto">
                <ButtonGroup activeButton={activeButton} onButtonClick={handleButtonClick} />
                <div className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {["width", "height", "diameter", "manufacturer"].map((param) => (
                            <div key={param}>
                                <h3
                                    className="py-5 hover:text-orange-500 text-[#666666] bg-white rounded-t-md px-4 text-[13px] duration-300 cursor-pointer"
                                    onClick={() => toggleSection(param)}
                                >
                                    {param.charAt(0).toUpperCase() + param.slice(1)}
                                </h3>
                                {isOpen[param] && (
                                    <OpenSelect
                                        options={
                                            param === "width" ? [
                                                "10.5", "12.5", "135", "145", "155", "165", "175", "185",
                                                "195", "205", "215", "225", "235", "245", "255", "265",
                                                "275", "285", "295", "305", "315", "325", "335",
                                            ] : param === "height" ? [
                                                "25", "30", "31", "35", "40", "45", "50", "55", "60",
                                                "65", "70", "75", "80", "85",
                                            ] : param === "diameter" ? [
                                                "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19",
                                                "R20", "R21", "R22", "R23", "R24",
                                            ] : [
                                                "APTANY", "Altenzo", "Antares", "Aplus", "Arivo"
                                            ]
                                        }
                                        onChange={handleChange}
                                        name={param}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <GroupBtn />
                <div className="w-full flex gap-8 justify-center mb-4">
                    <button
                        className="px-6 bg-[#666666] text-sm text-white py-3 rounded-md hover:bg-gray-600"
                        onClick={handleSearch}
                    >
                        Поиск
                    </button>
                    <button
                        className="px-6 flex items-center content-center gap-2 bg-[#666666] text-sm text-white py-3 rounded-md hover:bg-gray-600"
                        onClick={handleReset}
                    >
                        <MdCancel /> Сбросить
                    </button>
                </div>
            </div>
            <div className="mt-4 bg-white p-4 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="border bg-white cursor-pointer flex flex-col items-center rounded-md shadow-md p-4">
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                                <h4 className="font-bold text-lg">{product.name}</h4>
                                <p className="text-gray-700">{product.model}</p>
                                <p className="text-gray-700">{product.size}</p>
                                <p className="text-lg font-bold">{product.price} ₽</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">Нет доступных продуктов</p>
                    )}
                </div>
            </div>
        </div>
    );
}