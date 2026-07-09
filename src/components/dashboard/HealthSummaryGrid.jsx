import healthSummary from "../../constants/healthSummary";

import HealthSummaryCard from "./HealthSummaryCard";

import StaggerContainer from "../ui/StaggerContainer";

function HealthSummaryGrid() {
  return (
    <StaggerContainer
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
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