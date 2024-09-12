import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container w-[75%] mx-auto flex justify-between">
                <div className="flex flex-col">
                    <Link to="/tires" className="cursor-pointer hover:text-orange-500 duration-200 font-bold" onClick={scrollToTop}>Шины</Link>
                    <Link to="/wheels" className="cursor-pointer hover:text-orange-500 duration-200 font-bold" onClick={scrollToTop}>Диски</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/about" className="cursor-pointer hover:text-orange-500 duration-200" onClick={scrollToTop}>О компании</Link>
                    <Link to="/contacts" className="cursor-pointer hover:text-orange-500 duration-200" onClick={scrollToTop}>Контакты</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/payment" className="cursor-pointer hover:text-orange-500 duration-200" onClick={scrollToTop}>Оплата</Link>
                    <Link to="/delivery" className="cursor-pointer hover:text-orange-500 duration-200" onClick={scrollToTop}>Доставка</Link>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-400 text-sm">
                <p>© 2024 Сибирь Колесо, все права защищены.</p>
                <p>Товар резервируется после оплаты.</p>
            </div>
        </footer>
    );
}

export default Footer;