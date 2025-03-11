import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-white text-center p-5"
      style={{
        backgroundImage: "url('images/2023-07-12_12.42.44.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#8cfa9e" }}>
        CG Plant Store 🍀
      </h1>
      <p className="text-lg max-w-2xl">
        Step right up for the finest botanical shenanigans! Our plants gossip
        less than coworkers and require fewer coffee breaks.
      </p>
      <Link to="/products">
        <button
          className="mt-6 px-6 py-3 hover:bg-gray-200 rounded-lg text-lg"
          style={{ color: "#ff91b5" }}
        >
          Grab Your Green Goodies
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
