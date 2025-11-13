import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close when clicking outside the menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node | null;
      if (
        open &&
        menuRef.current &&
        target &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close on window resize above md
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
    return () => (document.body.style.overflow = "");
  }, [open]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/place/destinations", label: "Domestic" },
    { to: "/place/hotels", label: "International" },
    { to: "/place/gallery", label: "Place" },
    { to: "/packages/domestic", label: "Packages" },
    { to: "/contact", label: "Contact Us" },
    { to: "/contact", label: "+91-8506922777" },
  ];

  return (
    <header className="w-full bg-gradient-to-b from-sky-900 to-sky-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo (left) */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.gif"
              alt="Jingle Holiday Bazar"
              className="h-26 w-26 rounded-full object-cover mt-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold text-white">
            {navLinks.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="hover:text-yellow-400 transition"
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/pay"
              className="bg-yellow-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              PAY NOW
            </Link>
          </nav>

          {/* Mobile Right area: PAY (optional small) + burger */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Small pay button (mobile) */}
            <Link
              to="/pay"
              className="hidden sm:inline-block bg-yellow-400 hover:bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold transition"
            >
              PAY
            </Link>

            {/* Hamburger */}
            <button
              ref={btnRef}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 text-white text-2xl"
            >
              {/* simple accessible icon */}
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        ref={menuRef}
        className={`md:hidden transform transition-[max-height,opacity] duration-300 ease-in-out origin-top w-full bg-sky-800 text-white shadow-lg overflow-hidden ${
          open ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={"m-" + l.to + l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block w-full px-4 py-3 text-lg font-medium hover:bg-sky-700 transition rounded"
              >
                {l.label}
              </Link>
            ))}

            <div className="px-4 pt-2">
              <Link
                to="/pay"
                onClick={() => setOpen(false)}
                className="block text-center bg-yellow-400 hover:bg-blue-500 text-sky-900 font-semibold px-4 py-2 rounded-md transition"
              >
                PAY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
