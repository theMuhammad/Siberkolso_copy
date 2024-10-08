import { useState, useEffect } from "react";
import DiskImage from "../assets/batch_3.jpg";
import Loader from "./Loader"; // Import the Loader component

const AboutCompany = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto p-4 md:p-8">
            {loading ? (
                <Loader />             ) : (
                <>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">О компании</h1>
                    <p className="mb-6 text-base md:text-lg">
                        Склад: «Сибирь Колесо». Мы представляем вашему вниманию широкий выбор зимних и летних шин.
                        Наш ассортимент постоянно обновляется и пополняется. Обращайтесь в нашу компанию и убедитесь,
                        что сотрудничать с нами не только выгодно и удобно, но и очень приятно.
                        Не случайно наш магазин имеет много постоянных клиентов с которыми мы работаем вот уже много лет.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">Широкий ассортимент</h2>
                            <p className="text-base md:text-lg">
                                Наша компания предлагает все виды моделей шин, как для спокойной езды в населенном пункте,
                                так и для быстрой и надежной езды при высокой скорости за городом.
                                Являясь официальным дилером многих всемирно известных производителей дисков,
                                мы предлагаем качественную продукцию по низким ценам.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">Профессионализм</h2>
                            <p className="text-base md:text-lg">
                                Теперь не нужны «носить» по всему городу в поисках подходящих шин,
                                достаточно позвонить по нашему номеру телефона.
                                Наш сайт функционирует круглосуточно, мы принимаем заказы по всей России,
                                предоставляя детальную консультацию по всем интересующим вопросам.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center my-6">
                        <img src={DiskImage} alt="Store Interior" className="w-[65%] min-w-[85%] " />
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Магазин «Сибирь-Колесо»</h1>
                        <p className="mb-4 text-base md:text-lg">
                            Мы всегда готовы выслушать ваши пожелания и замечания по работе нашего магазина, для этого вам нужно позвонить по телефону:
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">8 800 775 1050</h2>
                        <p className="text-base md:text-lg">(звонок бесплатный)</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default AboutCompany;