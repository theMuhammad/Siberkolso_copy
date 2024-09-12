import GroupBtn from "./GroupBtn";
import ButtonGroup from "./ButtonGroup";
import OpenSelect from "./OpenSelect";
import { useState } from "react";

export default function TirePage() {
    const [params, setParams] = useState({
        width: "",
        height: "",
        diameter: "",
        manufacturer: "",
    });
    const [activeButton, setActiveButton] = useState(1); // Default active button

    const handleChange = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex); // Set active button
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

    return (
        <div className="tire-page w-full bg-[#282828] p-4 shadow-md ">
            <div className="max-w-[1140px] mx-auto">
                <ButtonGroup activeButton={activeButton} onButtonClick={handleButtonClick} />
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                        <h3 className="py-5 hover:text-orange-500 text-[#666666] bg-white rounded-t-md px-4 text-[13px] duration-300">
                            Ширина
                        </h3>
                        <OpenSelect
                            options={[
                                "10.5",
                                "12.5",
                                "135",
                                "145",
                                "155",
                                "165",
                                "175",
                                "185",
                                "195",
                                "205",
                                "215",
                                "225",
                                "235",
                                "245",
                                "255",
                                "265",
                                "275",
                                "285",
                                "295",
                                "305",
                                "315",
                                "325",
                                "335",
                            ]}
                            onChange={handleChange}
                            disabled={activeButton === 2} // Disable if "По автомобилям" is active
                        />
                    </div>
                    <div>
                        <h3 className="py-5 px-4 text-[#666666] hover:text-orange-500 text-[13px] rounded-t-md bg-white duration-300">
                            Высота
                        </h3>
                        <OpenSelect
                            options={[
                                "25",
                                "30",
                                "31",
                                "35",
                                "40",
                                "45",
                                "50",
                                "55",
                                "60",
                                "65",
                                "70",
                                "75",
                                "80",
                                "85",
                            ]}
                            onChange={handleChange}
                            disabled={activeButton === 2} // Disable if "По автомобилям" is active
                        />
                    </div>
                    <div>
                        <h3 className="py-5 px-4 text-[#666666] hover:text-orange-500 text-[13px] rounded-t-md bg-white duration-300">
                            Диаметр
                        </h3>
                        <OpenSelect
                            options={[
                                "R12",
                                "R13",
                                "R14",
                                "R15",
                                "R16",
                                "R17",
                                "R18",
                                "R19",
                                "R20",
                                "R21",
                                "R22",
                                "R23",
                                "R24",
                            ]}
                            onChange={handleChange}
                            disabled={activeButton === 2} // Disable if "По автомобилям" is active
                        />
                    </div>
                    <div>
                        <h3 className="py-5 px-4 text-[#666666] hover:text-orange-500 text-[13px] rounded-t-md bg-white duration-300">
                            Производитель
                        </h3>
                        <OpenSelect
                            options={["APTANY", "Altenzo", "Antares", "Aplus", "Arivo"]}
                            onChange={handleChange}
                            disabled={activeButton === 2} // Disable if "По автомобилям" is active
                        />
                    </div>
                </div>
                <GroupBtn />
            </div>
            <div className="w-full flex justify-center">
                <button className="px-6 bg-[#666666] text-sm text-white py-3 rounded-md hover:bg-gray-600">
                    Поиск
                </button>
            </div>
        </div>
    );
}