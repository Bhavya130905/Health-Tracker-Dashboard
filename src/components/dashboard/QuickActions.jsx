import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";

function QuickActions() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <Button>Calculate BMI</Button>

        <Button>Add Water</Button>

        <Button>Update Weight</Button>

        <Button>Export Report</Button>
      </div>
    </Card>
  );
}

export default QuickActions;