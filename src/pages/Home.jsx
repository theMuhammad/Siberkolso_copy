import TireSelection from "./AllTiredPage";
import { LuRussianRuble } from "react-icons/lu";
import { PiTireLight, PiFlagBannerFoldFill } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
const benefitsData = [
    {
        icon: <LuRussianRuble className="text-5xl" />,
        title: "Низкие цены",
        description: "Мы несомненно можем похвастаться низкими ценами на нашу продукцию. Ведь мы являемся официальными дилерами производителей."
    },
    {
        icon: <PiTireLight className="text-5xl " />,
        title: "Широкий ассортимент",
        description: "Мы представляем продукцию более 30 фирм-поставщиков товаров и их производителей. Оперативно подберем шины и диски, идеально подходящие именно Вам."
    },
    {
        icon: <PiFlagBannerFoldFill className="text-5xl" />,
        title: "Профессионализм",
        description: "Наши продавцы-консультанты с удовольствием ответят на все интересующие Вас вопросы, окажут помощь в правильном подборе товара."
    }
];

const Benefits = () => {
    return (
        <>
            <TireSelection />

            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-6">Наши преимущества</h2>
                <p className="text-center text-gray-600 mb-10">
                    Покупая шины и диски в Сибирь Колесо, Вы убедитесь, что сотрудничать с нами не только выгодно, <br /> но и чрезвычайно удобно. Не случайно наш интернет-магазин имеет большое количество<br /> постоянных клиентов,  с которыми мы благотворно работаем вот уже много лет.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="bg-white hover:shadow-2xl  hover:bg-slate-50 duration-500 p-6 rounded-lg shadow-xl cursor-pointer text-center">
                            <div className="mb-4 flex  items-center gap-8">{benefit.icon}<h3 className="text-xl font-semibold mb-2">{benefit.title}</h3></div>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-6xl w-[100%] mb-5 mx-auto p-6  ">
                <h1 className="text-4xl font-bold mb-4">
                    Сибирь-Колесо — купите шины и диски любой конфигурации в Новосибирске
                </h1>
                <p className="mb-6">
                    Правильно подобранные, наилучшего качества шины и диски — это залог безопасности в пути при плохой погоде, разбитых дорогах и форс-мажорных обстоятельствах. Магазин шин в Новосибирске множество. Но широкий выбор и максимальную надежность предоставляет именно «Сибирь-Колесо»!
                </p>

                <h2 className="text-2xl font-semibold mb-4">Шины и диски в Новосибирске</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 shadow-xl rounded-2xl hover:shadow-2xl cursor-pointer hover:bg-slate-50 duration-500 bg-white">
                        <h3 className="font-bold flex items-center gap-8 mb-2"><span className="text-5xl"><GiCarWheel /></span>Качество нашей продукции</h3>
                        <p>
                            Продажа шин в Новосибирске производится с предоставлением сертификатов соответствия качества от производителей. Компания «Сибирь-Колесо» является официальным дистрибьютором и поставщиком более 30 мировых брендов, производящих шины и диски...
                        </p>
                    </div>
                    <div className="p-4 shadow-xl rounded-2xl hover:shadow-2xl cursor-pointer hover:bg-slate-50 duration-500 bg-white">
                        <h3 className="font-bold flex items-center  gap-8  mb-2"><span className="text-5xl"><BsFillPatchCheckFill /></span>Приемлемые цены</h3>
                        <p>
                            Мы реализуем как летние, так и зимние шины любых размеров и конфигураций для легковых, внедорожников и грузовых авто, а также колесные диски...
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Представляем лучших производителей мира</h2>
                <div className="flex justify-between mt-6">
                    <div className="flex-1 text-center">
                        <p>Brand 1</p>

                        {/* <img src="path/to/logo1.png" alt="Brand 1" className="mx-auto" /> */}
                    </div>
                    <div className="flex-1 text-center">
                        <p>Brand 2</p>

                        {/* <img src="path/to/logo2.png" alt="Brand 2" className="mx-auto" /> */}
                    </div>
                    <div className="flex-1 text-center">
                        <p>Brand 3</p>
                        {/* <img src="path/to/logo3.png" alt="Brand 3" className="mx-auto" /> */}
                    </div>
                    <div className="flex-1 text-center">
                        <p>Brand 4</p>
                        {/* <img src="path/to/logo4.png" alt="Brand 4" className="mx-auto" /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;