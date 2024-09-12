import TireSelection from "./AllTiredPage";
import { LuRussianRuble } from "react-icons/lu";
import { PiTireLight, PiFlagBannerFoldFill } from "react-icons/pi";


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
                    Покупая шины и диски в Сибирь Колесо, Вы убедитесь, что сотрудничать с нами не только выгодно, но и чрезвычайно удобно. Не случайно наш интернет-магазин имеет большое количество постоянных клиентов, с которыми мы благотворно работаем вот уже много лет.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Benefits;