import React, { useState } from "react";
import { useCart } from "./CartContext";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10.9, category: "Succulents", image: "/images/aloe.jpeg" },
  { id: 2, name: "Cactus", price: 12.9, category: "Succulents", image: "/images/cactus.jpeg" },
  { id: 3, name: "Snake Plant", price: 15.9, category: "Air Purifiers", image: "/images/snake.jpeg" },
  { id: 4, name: "Peace Lily", price: 18.8, category: "Air Purifiers", image: "/images/peace.jpeg" },
  { id: 5, name: "Fiddle Leaf Fig", price: 28.9, category: "Decorative", image: "/images/fig.jpeg" },
  { id: 6, name: "Bamboo Palm", price: 19.9, category: "Decorative", image: "/images/bamboo.jpeg" },
  { id: 7, name: "Hydrangea", price: 12, category: "Decorative", image: "/images/Hydrangea.jpeg" },
  { id: 8, name: "Green Rose", price: 22, category: "Decorative", image: "/images/green_rose.jpeg" },
];

const ProductListing = () => {
  const { cart, addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-end mb-4">
        <span className="ml-2 text-lg">{cart.length}</span>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Houseplants for Sale</h1>

      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img src={plant.image} alt={plant.name} className="w-32 h-32 object-cover rounded-md mb-3" />
                  <h3 className="text-lg font-semibold">{plant.name}</h3>
                  <p className="text-gray-600">${plant.price}</p>
                  <button
                    onClick={() => {
                      addToCart(plant);
                      setAddedToCart((prev) => ({ ...prev, [plant.id]: true }));
                    }}
                    disabled={addedToCart[plant.id]}
                    className={`mt-3 px-4 py-2 rounded-md text-white ${
                      addedToCart[plant.id] ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {addedToCart[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
