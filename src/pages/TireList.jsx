import TireMahsulotlari from "./TireProduct"

const  TireList = () => {
    const tires = [
        { name: "Viatti", model: "Brina Nordico V-522 88T", size: "185 / 65 / R15", price: "4 405" },
        { name: "Sailun(Dynamo)", model: "SNOW-H MWS01 101H", size: "235 / 55 / R19", price: "8 975" },
        { name: "Cordiant", model: "Snow-Cross 92T", size: "185 / 65 / R15", price: "4 465" },
        { name: "LingLong", model: "Green-Max Winter Grip 2 103T", size: "245 / 45 / R20", price: "14 975" },
        { name: "Arivo", model: "ICE CLAW ARW8 105T", size: "235 / 55 / R19", price: "9 975" },
        { name: "Roadcruza", model: "RA1100", size: "215 / 65 / R16", price: "7 975" },
        { name: "Sailun", model: "Atrezzo Eco 86T", size: "185 / 65 / R14", price: "3 150" },
        { name: "Roadking", model: "ARGOS 5500 95T", size: "225 / 45 / R18", price: "7 975" },
        { name: "Viatti", model: "Brina Nordico V-522 88T", size: "185 / 65 / R15", price: "4 405" },
        { name: "Sailun(Dynamo)", model: "SNOW-H MWS01 101H", size: "235 / 55 / R19", price: "8 975" },
        { name: "Cordiant", model: "Snow-Cross 92T", size: "185 / 65 / R15", price: "4 465" },
        { name: "LingLong", model: "Green-Max Winter Grip 2 103T", size: "245 / 45 / R20", price: "14 975" },
        { name: "Arivo", model: "ICE CLAW ARW8 105T", size: "235 / 55 / R19", price: "9 975" },
        { name: "Roadcruza", model: "RA1100", size: "215 / 65 / R16", price: "7 975" },
        { name: "Sailun", model: "Atrezzo Eco 86T", size: "185 / 65 / R14", price: "3 150" },
        { name: "Roadking", model: "ARGOS 5500 95T", size: "225 / 45 / R18", price: "7 975" },
        { name: "Viatti", model: "Brina Nordico V-522 88T", size: "185 / 65 / R15", price: "4 405" },
        { name: "Sailun(Dynamo)", model: "SNOW-H MWS01 101H", size: "235 / 55 / R19", price: "8 975" },
        { name: "Cordiant", model: "Snow-Cross 92T", size: "185 / 65 / R15", price: "4 465" },
        { name: "LingLong", model: "Green-Max Winter Grip 2 103T", size: "245 / 45 / R20", price: "14 975" },
        { name: "Arivo", model: "ICE CLAW ARW8 105T", size: "235 / 55 / R19", price: "9 975" },
        { name: "Roadcruza", model: "RA1100", size: "215 / 65 / R16", price: "7 975" },
        { name: "Sailun", model: "Atrezzo Eco 86T", size: "185 / 65 / R14", price: "3 150" },
        { name: "Roadking", model: "ARGOS 5500 95T", size: "225 / 45 / R18", price: "7 975" },
        { name: "Roadking", model: "ARGOS 5500 95T", size: "225 / 45 / R18", price: "7 975" },

    ];

    return (
        <div className="grid   grid-cols-5 gap-4">
            {tires.map((tire, index) => (
                <TireMahsulotlari
                    key={index}
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