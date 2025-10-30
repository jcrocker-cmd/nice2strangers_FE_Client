import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ServiceHeaderProps {
  title: string;
  image: StaticImageData;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background image */}
      <Image src={image} alt={title} className="w-full h-full object-cover" />

      {/* Dark overlay with gradient for style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Centered heading */}
      <h1 className="absolute text-3xl md:text-5xl font-extrabold text-white text-center px-4 drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default ServiceHeader;
