import { useState, useEffect } from "react";
import { FaCreditCard, FaMoneyBill, FaClipboardCheck, FaQrcode } from 'react-icons/fa';
import Loader from "./Loader"; // Import the Loader component

const Payment = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., API call)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto w-[75%] p-8">
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <>
                    <h1 className="text-4xl font-bold mb-6 text-center">Оплата</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <FaMoneyBill className="text-3xl mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold mb-2">При получении заказа</h2>
                            <p>Вы всегда можете оплатить заказ при получении: наличными или с помощью банковской карты.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <FaCreditCard className="text-3xl mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold mb-2">Банковская карта</h2>
                            <p>Онлайн оплатить заказ с помощью: Visa, MasterCard, American Express, JSB, Diners Club, Мир и др.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <FaClipboardCheck className="text-3xl mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold mb-2">Безналичный расчет</h2>
                            <p>Оплатить с помощью банковского перевода (по счету), для юридических лиц, так и для физических лиц.</p>
                        </div>
                    </div>
                    <div className='flex mt-5 content-center m-auto justify-between w-[68%] gap-6 '>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <FaQrcode className="text-3xl mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold mb-2">Кредит</h2>
                            <p>Возможность приобрести товар в кредит. Подробнее об условиях и банках партнерах читайте в разделе «Кредит».</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <FaQrcode className="text-3xl mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold mb-2">QR-Код (СБП)</h2>
                            <p>Система быстрых платежей. Вы можете оплатить заказ, отсканировав QR-код в мобильном приложении вашего банка.</p>
                        </div>
                    </div>
                    <div className='w-[75%] pt-16'>
                        <h1 className="text-4xl font-bold mb-6">Система быстрых платежей (QR-Код)</h1>
                        <p className="mb-4">
                            Платежи по QR-коду через СБП максимально удобны для онлайн-оплаты покупок, они быстрее классических карточных платежей.
                            Так, на сайте «Сибирь Колесо» покупателю достаточно выбрать способ оплаты через СБП.
                            После того, как на экране будет сформирован QR-код, отсканируйте его смартфоном через мобильное приложение своего банка
                            и завершите уже в нем операцию. Подчеркиваем, банк плательщика должен быть участником СБП, а также поддерживать
                            в собственном мобильном приложении оплату по QR-кодам. Деньги со счета будут перечислены мгновенно после совершения оплаты.
                        </p>

                        <h2 className="text-3xl font-bold mb-4">Безопасность онлайн платежей</h2>
                        <p className="mb-4">
                            Оплата происходит через авторизационный сервер Процессингового центра Банка с использованием банковских кредитных карт следующих платежных систем:
                            VISA International, MasterCard World Wide.
                        </p>
                        <p className="mb-4">
                            Для оплаты покупки Вы будете перенаправлены на платежный шлюз ОАО "Сбербанк России" для ввода реквизитов Вашей карты.
                            Пожалуйста, приготовьте Вашу пластиковую карту заранее. Соединение с платежным шлюзом и передача информации осуществляется в защищенном
                            режиме с использованием протокола шифрования SSL.
                        </p>
                        <p className="mb-4">
                            В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard Secure Code
                            для проведения платежа также может потребоваться ввод специального пароля. Способы и возможности получения паролей для совершения
                            интернет-платежей Вы можете уточнить в банке, выпустившем карту.
                        </p>
                        <p className="mb-4">
                            Настоящий сайт поддерживает 128-битное шифрование. Конфиденциальностью сообщаемой информации обеспечивается ОАО "Сбербанк России".
                            Введенная информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ.
                            Проведение платежа на сайте "Сбербанк России". Введенная информация не соответствует требованиям платежных систем Visa Int.
                            и MasterCard Europe Sprl.
                        </p>
                        <p>
                            Политика обработки персональных данных.
                        </p>
                    </div>
                    <div className='w-[75%] pt-16'>
                        <h1 className="text-4xl font-bold mb-6">Возврат дисков</h1>
                        <p className="mb-4">
                            Перед монтажом шин на диск (в течение 2-х недель после покупки) обязательно примерьте диск на автомобиль.
                            Убедитесь, что диск ни за что не задевает (тормозной механизм, стойки подвески и т.д.).
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">Проверьте:</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>что диск точно центрируется (без люфта) на ступице автомобиля.</li>
                            <li>что (если на автомобиле болты) чтобы они не были слишком длинные, дабы предотвратить повреждение ручного тормоза и датчиков ABS.</li>
                            <li>что ступичные колпачки не вываливают заглушку диска, а крепеж не препятствует закрыванию крышки.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mb-4">Во избежание потери колес на ходу:</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>проверьте, крепеж должен соответствовать посадочным отверстиям на диске (сфера, конус или шайба).</li>
                            <li>проверьте, колесные болты или гайки закручиваются минимум на пять витков резьбы.</li>
                            <li>проверьте что все 4 диска одного цвета, одинаковой сверловки, одинакового диаметра и ширины.</li>
                        </ul>

                        <p className="mb-4">
                            Необходимо устанавливать диски как на переднюю, так и на заднюю ось. Возврат возможен только в товарном виде при сохранении заводской упаковки.
                            Данные правила не служат для ущемления прав покупателей, а наоборот, служат для предотвращения спорных и конфликтных ситуаций.
                            Например, если факт неосответствия выяснится после проведения шиномонтажных работ на стороннем сервисе, Вам придется оплатить их стоимость,
                            а потом заплатить за обратную перевозку.
                        </p>

                        <p>
                            Просим отнестись с пониманием к таким фактам, что диски универсальные, а не оригинальные, производитель оставляет за собой право замены сферы болта (гайки) на конус, и наоборот.
                            Ни один даже самый полный каталог не содержит такой информации, как критична внутренняя форма диска и его совместимость с тормозными механизмами, особенно на тонких моделях а/м.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Payment;