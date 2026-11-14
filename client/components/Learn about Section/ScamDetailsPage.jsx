import { useParams } from "react-router-dom";
import ScamDetails from "./ScamDetails";
import { scamData } from "../../Data/scamData";

const ScamDetailsPage = () => {
  const { category } = useParams();

  const scam = scamData.find(
    (item) => item.id.toLowerCase() === category?.toLowerCase()
  );

  if (!scam) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-[#263653] bg-[#111827] p-6">
        <p className="text-lg font-semibold text-slate-300">
          Scam category not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <ScamDetails scam={scam} />
    </div>
  );
};

export default ScamDetailsPage;