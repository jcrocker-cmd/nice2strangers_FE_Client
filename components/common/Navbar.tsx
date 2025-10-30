"use client";
import "../../assets/css/navbar.css";
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "./Section";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";
// State
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import { toggleMenu, closeMenu } from "../../state/navbar/navbarSlice";

import { RiMenuFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);
  const [isSticky, setIsSticky] = useState(false);
  // const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: 0.4, // Try lowering to 0.4 or raising to 0.8 if needed
      }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Section className={`navbar-wrapper ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar mx-auto max-w-[1080px] px-10 ">
        <ul className="nav-left flex w-1/2 justify-end navbar-links">
          <li
            className={`nav-link ${
              activeSection === "carousel-page" ? "active" : ""
            }`}
            onClick={() => scrollToSection("home-page")}
          >
            Home
          </li>
          <li
            className={`nav-link ${
              activeSection === "about-page" ? "active" : ""
            }`}
            onClick={() => scrollToSection("about-page")}
          >
            About
          </li>
          <li
            className={`nav-link ${
              activeSection === "services-page" ? "active" : ""
            }`}
            onClick={() => scrollToSection("services-page")}
          >
            Services
          </li>
        </ul>

        {/* <div className="logo-wrapper"> */}
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
        {/* </div> */}
        <ul className="nav-right flex w-1/2 navbar-links">
          <li
            className={`nav-link ${
              activeSection === "watch-page" ? "active" : ""
            }`}
            onClick={() => scrollToSection("watch-page")}
          >
            Watch
          </li>
          <li
            className={`nav-link ${
              activeSection === "contact-page" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contact-page")}
          >
            Contact
          </li>

          <Link
            href="/shop"
            className="shop-button flex items-center gap-1 text-black"
          >
            <FaCartShopping />
            Shop
          </Link>
        </ul>
        <button
          className="navbar-toggle cursor-pointer text-black"
          onClick={() => dispatch(toggleMenu())}
        >
          <RiMenuFill className="text-black" />
        </button>

        <div className="navbar-logo">
          <Image src={logo} alt="Logo" />
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      {isOpen && <NavbarMobile toggleMenu={() => dispatch(closeMenu())} />}
    </Section>
  );
}

export default Navbar;
