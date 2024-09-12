const TireProduct = ({ name, model, size, price }) => {
    return (
        <div className="border bg-white cursor-pointer shadow-md rounded p-4 flex flex-col items-center">
            <div className="bg-gray-200 w-32 h-32 mb-2 flex items-center justify-center">
                {/* Placeholder for the tire image */}
                <span className="text-gray-400">Image</span>
            </div>
            <h3 className="font-bold">{name}</h3>
            <p>{model}</p>
            <p>{size}</p>
            <p className="text-lg font-semibold">{price} ₽</p>
        </div>
    );
};

export default TireProduct