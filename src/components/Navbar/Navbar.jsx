import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { PiTireBold } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { CartContext } from "../../pages/CartProvider";
import Logo from "../../../public/Logo.png";

const ArrowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartDrawer = () => {
    if (cartItems.length > 0) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white py-7 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          <div className="flex gap-x-14">
            <div
              onClick={() => handleLinkClick("/")}
              className="font-bold text-xl flex items-center gap-x-3 cursor-pointer"
            >
              <img src={Logo} className="w-[150%] h-[44px]" alt="logo" />
            </div>
            <span className="h-[34px] w-[1px] bg-slate-300"></span>
            <div className="flex items-center gap-x-7">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-x-3 text-[13px] group duration-300"
              >
                {isOpen ? (
                  <FiX
                    size={20}
                    className="text-[#333] group-hover:text-[#FF5601] -mr-[6px]"
                  />
                ) : (
                  <div className="hamburger-menu">
                    <div className="line w-full bg-[#333] group-hover:bg-[#FF5601] transition-all duration-300 ease"></div>
                    <div className="line w-full bg-[#333] group-hover:bg-[#FF5601] transition-all duration-300 ease"></div>
                    <div className="line w-full bg-[#333] group-hover:bg-[#FF5601] transition-all duration-300 ease group-hover:w-1/2"></div>
                  </div>
                )}
                <span className="group-hover:text-[#FF5601]">Меню</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-x-11">
            <span className="h-[34px] w-[1px] bg-slate-300"></span>
            <button
              onClick={toggleCartDrawer}
              className="flex items-center content-center cursor-pointer text-black hover:text-[#FF5601] duration-300"
            >
              <MdShoppingCart className="text-lg hover:text-[#FF5601] text-[#8e8e8e] duration-300" />
              {cartItems.length > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed left-0 right-0 top-15 bg-white border-t border-slate-200 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ height: "33vh" }}
      >
        <div className="w-[75%] m-auto py-5 flex gap-5 items-center">
          <div className="flex justify-between w-[25%]">
            <p className="flex hover:text-orange-600 cursor-pointer flex-col items-center mb-4 duration-500">
              <span className="text-7xl pb-3">
                <PiTireBold />
              </span>
              <span className="text-lg font-semibold">Шины</span>
              <span className="text-sm">36 655 моделей</span>
            </p>
            <p className="flex flex-col hover:text-orange-600 duration-500 cursor-pointer items-center mb-4">
              <span className="text-7xl pb-3">
                <GiCarWheel />
              </span>
              <span className="text-lg font-semibold">Диски</span>
              <span className="text-sm">11 144 модели</span>
            </p>
          </div>
          <div className="border-l-4 rounded border-gray-300 h-40 mx-auto"></div>

          <div className="flex items-center justify-between w-[55%]">
            <div className="flex flex-col justify-between items-start mb-2">
              <p className="hover:text-orange-600 cursor-pointer mb-1">
                О компании
              </p>
              <p className="hover:text-orange-600 cursor-pointer mb-1">
                Контакты
              </p>
            </div>
            <div className="flex flex-col items-start mb-2">
              <p className="hover:text-orange-600 cursor-pointer mb-1">
                Оплата
              </p>
              <p className="hover:text-orange-600 cursor-pointer mb-1">
                Доставка
              </p>
            </div>
            <div className="mt-4 text-center">
              <h2 className="font-bold">Единая справочная</h2>
              <p className="text-3xl">8 800 775-10-50</p>
              <p>+7 (383) 388-55-32</p>
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Cart</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-2xl hover:text-orange-600 duration-500"
            >
              <FiX />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-4 border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.price} сум</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiX />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default ArrowButton;