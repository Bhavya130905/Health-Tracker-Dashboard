import { useNavigate } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";

function QuickActions() {
  const { addRecord } = useHistory();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-3">
      <Button 
        onClick={() => addRecord({
          date: new Date().toLocaleDateString(),
          weight: 68,
          water: 2.8,
          sleep: 7.5,
          calories: 2100,
          steps: 8500,
          notes: "Quick log",
        })}
      >
        Quick Log Today
      </Button>
      
      <Button variant="secondary" onClick={() => navigate("/analytics")}>
        View Full Report
      </Button>
    </div>
  );
}

export default QuickActions;