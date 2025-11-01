import ServiceHeader from "../../../components/common/DroneHeader";
import ContactForm from "../../../components/layout/Inquiry/DroneServices";
import Footer from "../../../components/common/Footer";
import Navbar from "../Navbar";

export const metadata = {
  title: "Drone Services in New Jersey | Aerial Photography & Videography",
  description:
    "Professional drone services in New Jersey for real estate, events, construction, and cinematic productions. aerial photography & videography.",
  keywords:
    "drone services New Jersey, NJ drone photography, aerial videography NJ, real estate drone NJ, FPV drone NJ",
};

const DroneServicesPage = () => {
  return (
    <div className="font-grotesk">
      <Navbar />
      <div className="mt-20 md:mt-16 sm:mt-12">
        <ServiceHeader title="Drone Services" />
      </div>

      <section className="max-w-[1080px] mx-auto px-6 py-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Our drone services deliver breathtaking aerial photography and
          videography to elevate your projects. Whether it’s real estate,
          events, construction site monitoring, wedding events or cinematic
          productions, we provide high-quality aerial shots with precision and
          creativity. Safety and professionalism are always our top priorities.
          We are proudly based in New Jersey and serve clients across and
          outside the area.
        </p>
      </section>

      <div className="bg-gray-100 py-12">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DroneServicesPage;
