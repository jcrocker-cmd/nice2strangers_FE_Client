import Navbar from "./Navbar";
import Footer from "@/components/common/Footer";
import Services from "@/components/layout/Services";

export const metadata = {
  title: "Services | New Jersey",
  description:
    "Full-service creative and tech solutions in New Jersey — including drone services, social media consulting, content creation, video editing, and custom software development.",
  keywords:
    "creative agency New Jersey, drone services NJ, social media consulting, video editing services, software development NJ, content creation",
};

export default function AllServices() {
  return (
    <>
      <Navbar />

      <div className="mt-30 md:mt-30 sm:mt-30 px-6 py-10 max-w-[1080px] mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          We provide a complete range of digital and creative services including
          drone aerial photography and videography, social media consulting,
          content creation, video editing, and software solutions. Our team
          delivers high-quality work tailored to elevate your brand and bring
          your vision to life. Proudly based in New Jersey and serving clients
          locally and beyond.
        </p>
      </div>

      <Services />
      <Footer></Footer>
    </>
  );
}
