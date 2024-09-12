import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FiX } from "react-icons/fi"; // Menu and X icons
import { PiTireBold } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { CartContext } from "../../pages/CartProvider"; // Import CartContext

const ArrowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Control drawer and button
  };

  const toggleCartDrawer = () => {
    if (cartItems.length > 0) {
      setIsDrawerOpen(!isDrawerOpen); // Toggle cart drawer
    }
  };

  const togglerefresh = () => {
    window.location.reload();
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  //   const handleRemoveItem = (productId) => {
  //     removeFromCart(productId);
  //   };

  return (
    <>
      <header className="bg-white py-7 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          <div className="flex gap-x-14">
            <Link
              to="/"
              className="font-bold text-xl flex items-center gap-x-3"
            >
              <img src="/logo.png" className="w-[34px] h-[34px]" alt="logo" />
              Сибирь Колесо
            </Link>
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
              //   disabled={cartItems.length === 0}
            >
              <span className="material-symbols-outlined size-5 mb-2 text-lg hover:text-[#FF5601] text-[#8e8e8e] duration-300">
                <MdShoppingCart />
              </span>
              {cartItems.length > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer for main button */}
      <div
        className={`fixed left-0 right-0 top-15 bg-white border-t border-slate-200 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "33vh" }} // Drawer height is 1/3 of the screen
      >
        <div className="w-[75%] m-auto py-5 flex justify-between items-center">
          <Link
            to="/tires"
            className="flex hover:text-orange-600 cursor-pointer flex-col items-center mb-4 duration-500"
            onClick={handleLinkClick}
          >
            <span className="text-7xl pb-3">
              <PiTireBold />
            </span>
            <span className="text-lg font-semibold">Шины</span>
            <span className="text-sm">36 655 моделей</span>
          </Link>
          <Link
            to="/wheels"
            className="flex flex-col hover:text-orange-600 duration-500 cursor-pointer items-center mb-4"
            onClick={handleLinkClick}
          >
            <span className="text-7xl pb-3">
              <GiCarWheel />
            </span>
            <span className="text-lg font-semibold">Диски</span>
            <span className="text-sm">11 144 модели</span>
          </Link>
          <div className="flex flex-col items-start mb-2">
            <Link
              to="/about"
              className="hover:text-orange-600 cursor-pointer mb-1"
              onClick={handleLinkClick}
            >
              О компании
            </Link>
            <Link
              to="/contacts"
              className="hover:text-orange-600 cursor-pointer mb-1"
              onClick={handleLinkClick}
            >
              Контакты
            </Link>
          </div>
          <div className="flex flex-col items-start mb-2">
            <Link
              to="/payment"
              className="hover:text-orange-600 cursor-pointer mb-1"
              onClick={handleLinkClick}
            >
              Оплата
            </Link>
            <Link
              to="/delivery"
              className="hover:text-orange-600 cursor-pointer mb-1"
              onClick={handleLinkClick}
            >
              Доставка
            </Link>
          </div>
          <div className="mt-4 text-center">
            <h2 className="font-bold">Единая справочная</h2>
            <p className="text-3xl">8 800 775-10-50</p>
            <p>+7 (383) 388-55-32</p>
          </div>
        </div>
      </div>

      {isDrawerOpen && (

        <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Cart</h2>
            <button
              onClick={togglerefresh}
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


