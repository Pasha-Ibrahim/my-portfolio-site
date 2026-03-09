import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-blue-900 via-purple-900 to-pink-900 text-white px-6 text-center"
    >
      <img
        src="/profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-white"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-6">CosmoCode</h1>

      <p className="text-gray-200 max-w-2xl text-lg md:text-2xl">
        I exist inside a coded universe, I am a code inside it, and I code
        myself.
      </p>

      <div className="mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
