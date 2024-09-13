import { useNavigate } from "react-router-dom";

const TireProduct = ({ id, name, model, size, price, originalPrice }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/tire/${id}`); 
  };

  return (
    <p
      onClick={handleClick} 
      className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer h-96 p-3 flex flex-col justify-between items-center"
    >
      <div className="bg-gray-200 w-40 h-52 mb-2 flex items-center justify-center">
        <span className="text-gray-400">Image</span>
      </div>
      <div className="text-start ">
        <h3 className="font-bold">{name}</h3>
        <p>{model}</p>
        <p>{size}</p>
      </div>
      <p className="text-lg font-semibold">{price} ₽</p>
      {originalPrice && (
        <p className="text-red-500 line-through">{originalPrice} ₽</p>
      )}
    </p>
  );
};

export default TireProduct;