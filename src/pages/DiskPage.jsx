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
    const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products
    const handleChange = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        const allTires = [
            { name: "Viatti", model: "Brina Nordico V-522 88T", size: "185 / 65 / R15", price: "4 405", image: "path/to/image1.jpg" },
            { name: "Sailun(Dynamo)", model: "SNOW-H MWS01 101H", size: "235 / 55 / R19", price: "8 975", image: "path/to/image2.jpg" },
            { name: "Cordiant", model: "Snow-Cross 92T", size: "185 / 65 / R15", price: "4 465", image: "path/to/image3.jpg" },
            { name: "LingLong", model: "Green-Max Winter Grip 2 103T", size: "245 / 45 / R20", price: "14 975", image: "path/to/image4.jpg" },
            { name: "Arivo", model: "ICE CLAW ARW8 105T", size: "235 / 55 / R19", price: "9 975", image: "path/to/image5.jpg" },
        ];

        const results = allTires.filter(tire => {
            return (
                (params.width ? tire.size.includes(params.width) : true) &&
                (params.diameter ? tire.size.includes(params.diameter) : true) &&
                (params.manufacturer ? tire.name.includes(params.manufacturer) : true)
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

    return (
        <>
            <div className="disk-page w-full bg-[#282828] p-6 shadow-lg ">
                <div className="max-w-[1140px] mx-auto">
                    <ButtonGroup />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
                        {["Сверловка", "Диаметр", "Ширина Диска", "DIA", "Вылет", "Производитель"].map((label, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                <h3 className="py-4 px-5 text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer">
                                    {label}
                                </h3>
                                <OpenSelect
                                    options={
                                        index === 0 ? [
                                            "10.5", "12.5", "135", "145", "155", "165", "175", "185",
                                            "195", "205", "215", "225", "235", "245", "255", "265",
                                            "275", "285", "295", "305", "315", "325", "335",
                                        ] : index === 1 ? [
                                            "25", "30", "31", "35", "40", "45", "50", "55", "60",
                                            "65", "70", "75", "80", "85",
                                        ] : index === 2 ? [
                                            "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19",
                                            "R20", "R21", "R22", "R23", "R24",
                                        ] : index === 3 ? [
                                            "APTANY", "Altenzo", "Antares", "Aplus", "Arivo"
                                        ] : index === 4 ? [
                                            "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19",
                                            "R20", "R21", "R22", "R23", "R24",
                                        ] : [
                                            "25", "30", "31", "35", "40", "45", "50", "55", "60",
                                            "65", "70", "75", "80", "85",
                                        ]
                                    }
                                    name={index === 0 ? "width" : index === 1 ? "diameter" : index === 2 ? "diskWidth" : index === 3 ? "manufacturer" : index === 4 ? "offset" : "manufacturer"}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                    <GroupBtn />
                </div>
                <div className="w-full flex justify-center mb-4">
                    <button
                        className="px-6 bg-gray-600 text-sm text-white py-3 rounded-md hover:bg-gray-500 transition duration-300"
                        onClick={handleSearch}
                    >
                        Поиск
                    </button>
                    <button
                        className="ml-4 px-6 flex items-center gap-2 text-sm text-white  py-3 rounded-md  transition duration-300"
                        onClick={handleReset}
                    >
                        <MdCancel /> Сбросить
                    </button>
                </div>


            </div>
            <div className="mt-6 bbg-[#fcfcfc] p-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="border bg-white cursor-pointer flex flex-col items-center p-4">
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
        </>
    );
} 