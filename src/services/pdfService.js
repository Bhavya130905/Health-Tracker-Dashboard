import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportHealthReport(report) {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("VitalSync Health Report", 20, 20);

  doc.setFontSize(12);

  doc.text(
    `Generated: ${report.generatedAt}`,
    20,
    32
  );

  doc.text("Profile", 20, 48);

  autoTable(doc, {
    startY: 52,

    head: [["Field", "Value"]],

    body: [
      ["Name", report.profile.name],
      ["Age", report.profile.age],
      ["Gender", report.profile.gender],
      ["Height", report.profile.height],
      ["Weight", report.profile.weight],
    ],
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,

    head: [["Health Metrics", "Value"]],

    body: [
      ["BMI", report.metrics.bmi],
      ["Category", report.metrics.bmiCategory],
      ["BMR", report.metrics.bmr],
      ["Calories", report.metrics.calories],
      ["Water", report.metrics.water],
      ["Health Score", report.metrics.healthScore],
    ],
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,

    head: [["Weekly Summary", "Value"]],

    body: [
      [
        "Average Weight",
        report.summary.averageWeight,
      ],
      [
        "Average Water",
        report.summary.averageWater,
      ],
      [
        "Average Sleep",
        report.summary.averageSleep,
      ],
      [
        "Average Steps",
        report.summary.averageSteps,
      ],
    ],
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,

    head: [
      [
        "Date",
        "Weight",
        "Water",
        "Sleep",
        "Calories",
        "Steps",
      ],
    ],

    body: report.recentRecords.map((r) => [
      r.date,
      r.weight,
      r.water,
      r.sleep,
      r.calories,
      r.steps,
    ]),
  });

  doc.save("VitalSync-Health-Report.pdf");
}