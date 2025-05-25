import { useState } from "react";

function OrderStatus({ onChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Pending", "Fullfilled"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onChange && onChange(filter);
  };

  return (
    <section className="inline-flex gap-2 bg-mainBg py-2 px-2 rounded-xl text-md">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`py-1 rounded-lg px-6 transition-all duration-150 ${
            activeFilter === filter
              ? "bg-blackBg text-white"
              : "bg-whiteBg text-blackBg"
          }`}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}

export default OrderStatus;
