import Button from "../ui/Button.jsx";
import { useHealth } from "../../context/HealthContext.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";

import { generateReportData } from "../../utils/reportGenerator.js";
import { exportHealthReport } from "../../services/pdfService.js";

function ReportButton() {
  const health = useHealth();
  const { records } = useHistory();

  function handleExport() {
    const report = generateReportData({
      ...health,
      records,
    });

    exportHealthReport(report);
  }

  return (
    <Button onClick={handleExport}>
      Download Health Report
    </Button>
  );
}

export default ReportButton;