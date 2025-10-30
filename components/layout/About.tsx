"use client";
import Section from "../common/Section";
import Wrapper from "../common/Wrapper";
import "../../assets/css/main.css";
import icon from "../../assets/img/icon.png";
import Image from "next/image";
import { useScrollRevealAbout } from "@/hooks/useScrollReveal";

const Aboutpage = () => {
  useScrollRevealAbout();
  return (
    <>
      <Wrapper id="about-page" className="bg-[#F7F0D7] w-full">
        <Section className="about-section mx-auto max-w-[1080px] relative flex py-40 px-10">
          <div className="about-left w-1/2">
            <div className="heading justify-end flex flex-row items-center gap-8">
              <span className="h-[3px] bg-black w-1/3"></span>
              <h1 className="text-5xl font-bold py-5 text-black">About</h1>
            </div>
            <div className="body text-justify text-black">
              Hi, I’m Brandon — the creator behind nice2strangers. This brand
              started with one simple idea: make someone’s day a little better,
              and have a good laugh doing it. With a hidden camera, a bit of
              boldness, and a lot of kindness, I hit the streets to turn
              everyday moments into something memorable — whether it’s helping
              strangers in need, offering a surprise gift, or just cracking a
              joke with someone who looks like they could use a smile.
              <br />
              <br />
              At its core, nice2strangers is about spreading good energy in a
              world that often forgets how powerful small acts of kindness can
              be. It’s not about going viral — it’s about being real.
              <br />
              <br />
              This site is where you can dive deeper into what we do, support
              the mission through merch, or get in touch for collabs and content
              ideas. Thanks for being here — and for being nice to strangers.
            </div>
          </div>
          <div className="about-right w-1/2 flex justify-center items-center">
            <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] w-full">
              <Image
                src={icon}
                alt=""
                fill
                className="object-contain" // or object-cover depending on what you want
              />
            </div>
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default Aboutpage;
