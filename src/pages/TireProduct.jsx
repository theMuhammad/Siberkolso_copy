import { Link } from "react-router-dom";

const TireProduct = ({ id, name, model, size, price, originalPrice }) => {
  return (
    <Link
      to={`/tire/${id}`} // Add id to the link for SingleCartPage
      className="border bg-white cursor-pointer shadow-md rounded p-4 flex flex-col items-center"
    >
      <div className="bg-gray-200 w-32 h-32 mb-2 flex items-center justify-center">
        {/* Placeholder for the tire image */}
        <span className="text-gray-400">Image</span>
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{model}</p>
      <p>{size}</p>
      <p className="text-lg font-semibold">{price} ₽</p>
      {originalPrice && (
        <p className="text-red-500 line-through">{originalPrice} ₽</p>
      )}
    </Link>
  );
};

export default TireProduct;