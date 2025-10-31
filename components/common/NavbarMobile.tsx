import Link from "next/link";
import logo from "../../assets/img/logo.png";
import Image from "next/image";

interface NavbarMobileMenuProps {
  toggleMenu: () => void;
}

const NavbarMobile = ({ toggleMenu }: NavbarMobileMenuProps) => {
  return (
    <>
      <div className="fullscreen-menu">
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" className="w-[100px] h-[100px]" />
        </Link>
        <button className="close-button" onClick={toggleMenu}>
          ✕
        </button>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <a href="/dashboard" onClick={toggleMenu}>
              Account
            </a>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
