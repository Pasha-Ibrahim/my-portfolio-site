import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

      <h2 className="text-2xl mt-4">Səhifə tapılmadı</h2>

      <p className="text-gray-500 mt-2 text-center max-w-md">
        Axtardığın səhifə mövcud deyil və ya silinib.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 rounded-xl transition duration-300"
      >
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
};

export default NotFound;
