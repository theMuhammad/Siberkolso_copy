import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartProvider"; // CartContext import
import { tires } from "../utils";

const SingleCartPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Add to cart function from context

  // Find the tire with the corresponding id
  const tire = tires.find((tire) => tire.id === id);

  // If no tire found, handle the case
  if (!tire) {
    return <p>Tire not found!</p>;
  }

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addToCart(tire); // Adding the tire to the cart
  };

  return (
    <main className="container min-h-[90vh] mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        {tire.name} - {tire.model}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src={tire.imageUrl}
            alt={tire.name}
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right side - Tire details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              {tire.name}
            </h2>
            <p className="mt-1 text-3xl font-medium">{tire.model}</p>
            <p className="mt-8">{tire.size}</p>
            <p className="mt-24 text-3xl font-bold flex flex-col text-black">
              <span className="text-black text-xs font-light">
                Цена (при заказе на сайте):
              </span>
              {tire.price} сум
            </p>
          </div>

          <button
            className="mb-20 px-6 py-3 text-sm max-w-44 bg-[#FF5601] text-white rounded hover:bg-[#e04f00] transition duration-300"
            onClick={handleAddToCart} // Add to cart functionality
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </main>
  );
};

export default SingleCartPage;
