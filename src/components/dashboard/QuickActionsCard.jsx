import Card from "../../ui/Card";
import SectionHeader from "../../ui/SectionHeader";

function QuickActionsCard({
  title,
  children,
}) {
  return (
    <Card className="p-6">
      <SectionHeader title={title} />

      {children}
    </Card>
  );
}

export default QuickActionsCard;