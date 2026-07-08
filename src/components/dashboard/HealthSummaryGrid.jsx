import healthSummary from "../../constants/healthSummary";
import HealthSummaryCard from "./HealthSummaryCard";
import StaggerContainer from "../ui/StaggerContainer";

function HealthSummaryGrid() {
  return (
    <StaggerContainer
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {healthSummary.map((item) => (
        <HealthSummaryCard
          key={item.id}
          item={item}
        />
      ))}
    </StaggerContainer>
  );
}

export default HealthSummaryGrid;