"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import type { DropdownItemProps } from "../data/navbarDropDown";
import "../../assets/css/navabardropdown.css";

interface DropdownProps {
  title: string;
  dropitems: DropdownItemProps[];
  activePath: string;
}

const NavbarDropDown: React.FC<DropdownProps> = ({
  title,
  dropitems,
  activePath,
}) => {
  const pathname = usePathname();

  return (
    <li className={`dropdown ${pathname === activePath ? "active" : ""}`}>
      <Link href={activePath}>
        <span className="dropdown-toggle">
          {title.toUpperCase()}
          <span className="arrow">
            <MdKeyboardArrowDown />
          </span>
        </span>
      </Link>
      <ul className="dropdown-menu w-fit">
        {dropitems.map((item, index) => (
          <span key={index}>
            <Link href={item.link} className="whitespace-nowrap">
              {item.label}
            </Link>
          </span>
        ))}
      </ul>
    </li>
  );
};

export default NavbarDropDown;
