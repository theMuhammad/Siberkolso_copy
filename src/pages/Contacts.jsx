import { useState, useEffect } from "react";
import Loader from "./Loader"; // Import the Loader component

const Contacts = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="m-auto w-[90%] md:w-[75%]">
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <div className="container mx-auto justify-center flex p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-6 text-center">Контакты</h1>
                            <div className="mb-6">
                                <p className="text-lg">Единая справочная:</p>
                                <p className="text-2xl md:text-3xl font-semibold">8 800 775 1050</p>
                                <p className="text-gray-500 font-semibold">+7 (383) 388-55-32</p>
                                <p className="text-lg font-bold">info@sibirkoleso.ru</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold">Сибирь-Колесо, головной офис</h2>
                                <p>630088, Россия, г. Новосибирск, ул. Петухова, 35, корпус 8</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2"></h2>
                                <p>Индивидуальный предприниматель Панфилов Сергей Александрович</p>
                                <p>Почтовый адрес: 630077, г. Новосибирск, ул. Печатикова, 9, кв. 256.</p>
                                <p>Фактический адрес: 630088, г. Новосибирск, ул. Петухова, 35, корпус 8.</p>
                                <p>ИНН: 540861752310</p>
                                <p>ОГРНИП: 309547331600022</p>
                                <p>Расчетный счет: 40802810094450031010 в Сибирском банке ПАО «Сбербанк»</p>
                                <p>БИК: 045004641</p>
                                <p>Кор. счет: 30101810150000000641</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2"></h2>
                                <p>Индивидуальный предприниматель Панфилов Александр Александрович</p>
                                <p>Почтовый адрес: 630088, г. Новосибирск, ул. Приморская, 26, кв. 62.</p>
                                <p>Фактический адрес: 630088, г. Новосибирск, ул. Приморская, 26, кв. 62.</p>
                                <p>ИНН: 540861750648</p>
                                <p>ОГРНИП: 305547350300412</p>
                                <p>Расчетный счет: 40802810052320000000 в филиале ПАО «БАНК УРАЛСИБ» в г. Новосибирске.</p>
                                <p>БИК: 045004725</p>
                                <p>Кор. счет: 30101810150000000725</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contacts;