import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";

const ArrowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart state

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header className="bg-white py-7 border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          {/* Other header content */}
          <button
            className={`flex items-center content-center cursor-pointer ${
              cartItems.length === 0 ? "text-gray-400" : "text-black"
            } hover:text-[#FF5601] duration-300`}
            disabled={cartItems.length === 0} // Disable if no items
          >
            <MdShoppingCart />
            {cartItems.length > 0 && (
              <span className="ml-2">{cartItems.length}</span>
            )}
          </button>
        </div>
      </header>
      {/* Drawer for menu */}
    </>
  );
};

export default ArrowButton;
