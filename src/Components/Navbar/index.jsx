"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "Projects", path: "/projects" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          CosmoCode
        </Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>

        {/* Menu */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center gap-6 w-full md:w-auto bg-slate-900 md:bg-transparent ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="px-4 py-2 hover:text-slate-300 block"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
