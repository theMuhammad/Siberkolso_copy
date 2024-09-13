import TireMahsulotlari from "./TireProduct";
import { tires } from "../utils";

const TireList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {tires.map((tire) => (
        <TireMahsulotlari
          key={tire.id}
          id={tire.id}
          name={tire.name}
          model={tire.model}
          size={tire.size}
          price={tire.price}
          originalPrice={tire.originalPrice} // Add this line if available
        />
      ))}
    </div>
  );
};

export default TireList;