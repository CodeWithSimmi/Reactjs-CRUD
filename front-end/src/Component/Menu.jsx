import React from "react";
import { menu_list } from "../menulist";

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="bg-[#17180c] py-16 px-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Explore Our Menu</h1>
      <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
        Discover our delicious menu! Click on any category to explore further.
        Each item is crafted to perfection to delight your taste buds.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className="group flex flex-col items-center cursor-pointer"
          >
            <div
              className={`w-28 h-28 rounded-full shadow-lg overflow-hidden border-4 ${
                category === item.menu_name
                  ? "border-blue-500"
                  : "border-transparent"
              } group-hover:border-blue-500 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 ease-in-out`}
            >
              <img
                className="w-full h-full object-cover"
                src={item.menu_image}
                alt={item.menu_name}
              />
            </div>
            <p
              className={`mt-4 text-lg font-semibold ${
                category === item.menu_name ? "text-blue-500" : "text-gray-200"
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-12 border-t-2 border-gray-600 opacity-50" />
    </div>
  );
};

export default Exploremenu;
