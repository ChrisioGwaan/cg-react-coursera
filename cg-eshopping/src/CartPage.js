import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalItems,
    getTotalCost,
  } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      <div className="flex justify-between max-w-lg mx-auto bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg">
          Total Items: <strong>{getTotalItems()}</strong>
        </p>
        <p className="text-lg">
          Total Cost: <strong>${getTotalCost().toFixed(2)}</strong>
        </p>
      </div>

      {getTotalItems() === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
          {Object.values(cart).map((plant) => (
            <li
              key={plant.id}
              className="border-b py-4 flex items-center justify-between"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-16 h-16 object-cover rounded-md"
              />

              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{plant.name}</h3>
                <p className="text-gray-600">${plant.price.toFixed(2)} each</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(plant.id)}
                  className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  -
                </button>
                <span className="px-3">{plant.quantity}</span>
                <button
                  onClick={() => increaseQuantity(plant.id)}
                  className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(plant.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-6">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-lg mb-4"
          onClick={() => setShowPopup(true)}
        >
          Checkout
        </button>

        <br />

        <Link to="/products">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg">
            Continue Shopping
          </button>
        </Link>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-600">
              Checkout functionality is under development.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
