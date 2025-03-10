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
        <h1 className="text-4xl font-bold mb-4 text-blue-500">MC Digital Product</h1>
        <p className="text-lg max-w-2xl">
            Welcome to our company! We specialize in providing top-notch solutions to
            meet all your needs.
        </p>
        <Link to="/products">
            <button className="mt-6 px-6 py-3 bg-white hover:bg-gray-200 rounded-lg text-black text-lg">
                Get Started
            </button>
        </Link>
    </div>
);
};

export default LandingPage;
