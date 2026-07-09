import quickActions from "../../../constants/quickActions";

import FadeInSection from "../../ui/FadeInSection";

import ActionButton from "./ActionButton";
import QuickActionsCard from "./QuickActionsCard";

function QuickActions() {
  return (
    <FadeInSection>
      <QuickActionsCard title="Quick Actions">
        <div
          className="
            grid
            gap-4
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {quickActions.map((action) => (
            <ActionButton
              key={action.id}
              action={action}
            />
          ))}
        </div>
      </QuickActionsCard>
    </FadeInSection>
  );
}

export default QuickActions;