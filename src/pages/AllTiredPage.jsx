import { useState } from "react";
import TirePage from "./TirePage";
import DiskPage from "./DiskPage";

const TirePages = () => {
  const [activeTab, setActiveTab] = useState("tires"); // Default tab is "tires"

  return (
    <div className="mt-5">
      <div className="">
        {/* Tabs */}
        <div className="flex justify-center ">
          <button
            className={`text-lg font-semibold px-4 py-2 ${activeTab === "tires" ? "border-b-2 border-black text-black" : "text-black"}`}
            onClick={() => setActiveTab("tires")}
          >
            Шины
          </button>
          <button
            className={`text-lg font-semibold px-4 py-2 ${activeTab === "disks" ? "border-b-2 border-black text-black" : "text-black"}`}
            onClick={() => setActiveTab("disks")}
          >
            Диски
          </button>
        </div>

        {/* Content */}
        <div className=" w-full">
          {activeTab === "tires" ? <TirePage /> : <DiskPage />}
        </div>
      </div>
    </div>
  );
};

export default TirePages;