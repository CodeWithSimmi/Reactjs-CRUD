import React from 'react';
import { menu_list } from '../menulist';

const Exploremenu = ({ category, setCategory }) => {



  return (
    <div className="bg-gray-100 py-10 px-4" id="explore-menu">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Explore Our Menu
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit
        voluptatum recusandae excepturi totam doloribus, labore iusto,
        praesentium necessitatibus autem eveniet laudantium debitis deserunt
        voluptatibus nisi sapiente velit tempora incidunt.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            className="group flex flex-col items-center cursor-pointer"
          >
            <img
              className={`w-24 h-24 rounded-full border-4 ${
                category === item.menu_name
                  ? 'border-indigo-500'
                  : 'border-red-400'
              } transition-transform transform group-hover:scale-105`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p
              className={`mt-2 font-medium text-lg ${
                category === item.menu_name ? 'text-indigo-500' : 'text-gray-700'
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-8 border-gray-300" />
    </div>
  );
};

export default Exploremenu;
