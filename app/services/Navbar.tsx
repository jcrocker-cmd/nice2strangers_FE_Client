"use client";
import "../../assets/css/navbar.css";
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "../../components/common/Section";
import NavbarMobile from "./NavbarMobile";
import NavbarDropDown from "../../components/common/NavbarDropDown";
import { servicesItems } from "../../components/data/navbarDropDown";
// State
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import { toggleMenu, closeMenu } from "../../state/navbar/navbarSlice";

import { RiMenuFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className={`navbar-wrapper ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar mx-auto max-w-[1080px] px-10 ">
        {/* LEFT */}
        <ul className="nav-left flex w-1/2 justify-end navbar-links">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="text-black">
            <NavbarDropDown
              title="Services"
              dropitems={servicesItems}
              activePath="/about-us"
            />
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>

        {/* RIGHT */}
        <ul className="nav-right flex w-1/2 navbar-links">
          <li>
            <Link href="/watch" className="nav-link">
              Watch
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          <Link
            href="/shop"
            className="shop-button flex items-center gap-1 text-black"
          >
            <FaCartShopping />
            Shop
          </Link>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggle cursor-pointer text-black"
          onClick={() => dispatch(toggleMenu())}
        >
          <RiMenuFill className="text-black" />
        </button>

        <div className="navbar-logo">
          <Image src={logo} alt="Logo" className="h-16 w-auto" />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && <NavbarMobile toggleMenu={() => dispatch(closeMenu())} />}
    </Section>
  );
}

export default Navbar;
