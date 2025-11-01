"use client";

import Wrapper from "../common/Wrapper";
import Section from "../common/Section";
import "../../assets/css/main.css";
// import "../../assets/css/mediaquery.css";
import card1 from "../../assets/img/s-icon-1.png";
import card2 from "../../assets/img/s-icon-2.png";
import card3 from "../../assets/img/s-icon-3.png";
import card4 from "../../assets/img/s-icon-4.png";
import ServiceCard from "../common/ServicesCard";
import Link from "next/link";
import DroneServiceCard from "../common/ServiceCardDrone";
import { useScrollRevealServices } from "@/hooks/useScrollReveal";

const Services = () => {
  useScrollRevealServices();
  return (
    <Wrapper
      id="services-page"
      className="services-wrapper w-full py-20 bg-[#F5E3A1] text-black"
    >
      <Section className="services-section h-1/2 max-w-[1080px] mx-auto px-10 py-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-10 text-black text-center ">
          Services
        </h1>
        <div className="services-container flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 md:gap-5 items-center">
            <ServiceCard
              link="/services/social-media-consulting"
              className="bg-[#775A70] card"
              icon={card1}
              title={`Social\nMedia\nConsulting`}
              description={`Lorem ipsum\nDolor lorem `}
            ></ServiceCard>
            <ServiceCard
              link="/services/social-media-creation"
              className="bg-[#699094] card"
              icon={card2}
              title={`Social\nMedia\nCreation`}
              description={`Lorem ipsum\nDolor lorem `}
            ></ServiceCard>
          </div>
          {/* Drone Service Card alone */}
          <div className="w-full flex justify-center items-center">
            <DroneServiceCard />
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-5 items-center">
            <ServiceCard
              link="/services/video-editing"
              className="bg-[#1D484D] card"
              icon={card3}
              title={`Social\nMedia\nEditing`}
              description={`Lorem ipsum\nDolor lorem `}
            ></ServiceCard>
            <ServiceCard
              link="/services/software-solutions"
              className="bg-[#CB7346] card"
              icon={card4}
              title={`Software &\nTech\nSolutions`}
              description={`Lorem ipsum\nDolor lorem `}
            ></ServiceCard>
          </div>
        </div>

        <div className="services-button flex flex-col justify-center items-center mt-12">
          <h1 className="mb-4 md:text-2xl sm:text-base">
            Ready to elevate your business?
          </h1>
          <button className="bg-[#E1A451] cursor-pointer text-white font-bold text-sm py-2 px-4 rounded w-fit hover:bg-[#c8954e]">
            <Link href="/services">LEARN MORE</Link>
          </button>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Services;
