"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";
import logo from "../../../assets/img/logo.png";
import { ApiRoutes } from "../../../constants/constants";
import axios from "axios";
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchCartCount = async () => {
      if (!userId) return; // no user, no cart
      try {
        const response = await axios.get(ApiRoutes.Orders.getCartCount(userId));
        // Expected response payload: { cartCount: number } or { CartCount: number }
        const count = response.data.cartCount ?? response.data.CartCount ?? 0;
        setCartCount(count);
      } catch (error) {
        console.error("Failed to fetch cart count:", error);
      }
    };

    fetchCartCount();
  }, []);

  return (
    <header className="sticky top-0 w-full z-[9999]">
      <div
        className={`w-full transition-all duration-300 bg-white ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Official Bar */}
        <div
          className={`bg-[#f5c518] text-center font-grotesk font-semibold text-black 
          transition-all duration-300 overflow-hidden 
          max-h-20 opacity-100 py-3
          text-sm
        `}
        >
          The ONLY Official Nice2strangers Merch Store
        </div>

        {/* Navbar */}
        <nav className="max-w-[1280px] mx-auto flex items-center px-6 py-4 font-poppins font-light bg-white text-black">
          {/* Left: Logo (20%) */}
          <div className="basis-[20%] flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <Image src={logo} alt="Logo" className="h-12 w-12" />
            </Link>
          </div>

          {/* Center: Links (60%) */}
          <ul className="basis-[60%] hidden md:flex justify-center gap-8 text-lg font-normal">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition">
                Shoes
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-500 transition"
              >
                Caps
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-500 transition"
              >
                T-Shirts
              </Link>
            </li>
          </ul>

          {/* Right: Icons (20%) */}
          <ul className="basis-[20%] hidden md:flex justify-end gap-6 text-2xl items-center">
            <li className="flex items-center">
              <Link
                href="/login"
                className="hover:text-yellow-500 transition flex items-center"
              >
                <FaUser />
              </Link>
            </li>
            <li className="relative flex items-center">
              <Link
                href="/dashboard"
                className="hover:text-yellow-500 transition flex items-center relative"
              >
                <HiOutlineShoppingCart className="text-2xl" />

                {cartCount > 0 && (
                  <span
                    className="absolute -top-1.5 -right-2 bg-red-500 text-white 
          text-[10px] font-semibold rounded-full w-4 h-4 
          flex items-center justify-center leading-none"
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <RiMenuFill />
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
            <Link href="/" className="block hover:text-yellow-500">
              Home
            </Link>
            <Link href="/about" className="block hover:text-yellow-500">
              About
            </Link>
            <Link href="/services" className="block hover:text-yellow-500">
              Services
            </Link>
            <Link href="/watch" className="block hover:text-yellow-500">
              Watch
            </Link>
            <Link href="/contact" className="block hover:text-yellow-500">
              Contact
            </Link>
            <Link
              href="/shop"
              className="flex items-center gap-2 hover:text-yellow-500"
            >
              <HiOutlineShoppingCart /> Shop
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
