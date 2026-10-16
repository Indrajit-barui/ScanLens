import { useParams } from "react-router-dom";
import ScamDetails from "./ScamDetails";
import { scamData } from "../../Data/scamData";
const ScamDetailsPage = () => {
  const { category } = useParams();

  const scam = scamData.find(
    (item) => item.id.toLowerCase() === category.toLowerCase()
  );

  if (!scam) {
    return <div>Scam category not found.</div>;
  }

  return (
<ScamDetails scam={scam} />
  );
};

export default ScamDetailsPage;

