import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">PashaDev</h2>
            <p className="text-sm leading-6">
              Modern və performanslı web tətbiqlər hazırlayıram. Full Stack
              inkişaf yolundayam.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
              >
                <Github size={20} />
              </Link>

              <Link
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} PashaDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
