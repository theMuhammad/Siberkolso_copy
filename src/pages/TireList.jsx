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
        />
      ))}
    </div>
  );
};

export default TireList;