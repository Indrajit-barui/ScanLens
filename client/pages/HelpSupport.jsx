import HelpHeader from "../components/helpSupport/HelpHeader";
import HelpCards from "../components/helpSupport/HelpCards";
import FAQSection from "../components/helpSupport/FAQSection";

const HelpSupport = () => {
  return (
    <div className="min-h-screen space-y-6 bg-[#0B1120] p-6">
      <HelpHeader />

      <HelpCards />

      <FAQSection />
    </div>
  );
};

export default HelpSupport;