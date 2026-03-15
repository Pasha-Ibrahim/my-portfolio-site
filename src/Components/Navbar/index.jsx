"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);

  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "Projects", path: "/projects" },
  ];

  // Panel xaricinə klikləyəndə bağlamaq
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-slate-900 text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          CosmoCode
        </Link>

        {/* Hamburger */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>

        {/* Menu for medium+ screens */}
        <div className="hidden md:flex md:flex-row md:items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="px-4 py-2 hover:text-slate-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Slide-in Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Panel başlığı */}
        <div className="px-6 py-4 border-b border-slate-700 text-2xl font-bold">
          CosmoCode
        </div>

        {/* Panel linkləri */}
        <div className="flex flex-col mt-4 gap-6 px-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="text-lg hover:text-slate-300"
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
