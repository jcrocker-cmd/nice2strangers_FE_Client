import "../../assets/css/main.css";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface ServicesCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: StaticImageData;
  className?: string;
  title?: string;
  description?: string;
  link?: string;
}

const ServicesCard = ({
  icon,
  className,
  title,
  description,
  link,
}: ServicesCardProps) => {
  return (
    <>
      <Link href={link || "#"}>
        <div className="services-card flex justify-center cursor-pointer">
          <div
            className={`w-[350px] rounded-xl px-10 py-10 flex gap-6 text-white relative items-start ${className}`}
          >
            {/* Image wrapper */}

            <Image
              src={icon}
              alt="Service Icon"
              className="w-18 pendulum-icon"
            />

            {/* Text content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold leading-tight">
                {(title ?? "").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p className="text-sm leading-snug text-white/80">
                {(description ?? "").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <button className="bg-[#E1A451] text-white font-bold text-sm py-2 px-4 mt-3 rounded w-fit cursor-pointer ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServicesCard;
