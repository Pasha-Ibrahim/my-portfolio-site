import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
        Xoş Gəlmisən 👋
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
        Bu mənim <span className="font-semibold text-gray-900">Next.js</span>{" "}
        ilə hazırladığım şəxsi veb səhifəmdir. Burada modern frontend
        texnologiyaları ilə hazırladığım layihələri və özüm haqqında məlumatları
        paylaşacağam.
      </p>

      <div className="mt-10 flex gap-5">
        <Link
          href="/about"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition duration-300 shadow"
        >
          Haqqımda
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-200 transition duration-300"
        >
          Əlaqə
        </Link>
      </div>
    </div>
  );
};

export default Home;
