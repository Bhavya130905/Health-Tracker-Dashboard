// Health-Tracker-Dashboard-main/src/services/pdfService.js
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportHealthReport(report) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(26);
  doc.setTextColor(37, 99, 235);
  doc.text("VitalSync", 20, 25);
  
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text("Health Report", 20, 35);
  doc.text(`Generated: ${report.generatedAt}`, pageWidth - 80, 35);

  // Profile
  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text("Personal Profile", 20, 55);

  autoTable(doc, {
    startY: 60,
    head: [["Field", "Value"]],
    body: [
      ["Name", report.profile.name],
      ["Age", report.profile.age + " years"],
      ["Gender", report.profile.gender],
      ["Height", report.profile.height + " cm"],
      ["Weight", report.profile.weight + " kg"],
    ],
    theme: "striped",
    headStyles: { fillColor: [37, 99, 235] }
  });

  // Metrics
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Health Metric", "Value", "Note"]],
    body: [
      ["BMI", report.metrics.bmi, report.metrics.bmiCategory],
      ["BMR", report.metrics.bmr + " kcal/day", "Basal Metabolic Rate"],
      ["Daily Calories", report.metrics.calories + " kcal", "Recommended"],
      ["Water Intake", report.metrics.water + " L", "Daily Target"],
      ["Health Score", report.metrics.healthScore + "/100", "Overall"],
    ],
    theme: "striped",
    headStyles: { fillColor: [37, 99, 235] }
  });

  // Recent Records
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Date", "Weight (kg)", "Water (L)", "Sleep (hrs)", "Calories", "Steps"]],
    body: report.recentRecords.slice(0, 8).map(r => [
      r.date,
      r.weight,
      r.water,
      r.sleep,
      r.calories,
      r.steps.toLocaleString()
    ]),
    theme: "striped",
    headStyles: { fillColor: [37, 99, 235] }
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.text("© VitalSync • Built with ❤️ for better health", 20, doc.internal.pageSize.getHeight() - 15);

  doc.save(`VitalSync_Report_${new Date().toISOString().slice(0,10)}.pdf`);
}