import FAQ from "../../components/layout/FAQ";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const FAQsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-20 sm:mt-12">
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default FAQsPage;
