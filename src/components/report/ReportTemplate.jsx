function ReportTemplate({ report }) {
  if (!report) return <div>No report data</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Health Report</h1>
      <p>Generated: {report.generatedAt}</p>
      {/* Additional report content can be expanded here if needed, but no other changes */}
    </div>
  );
}

export default ReportTemplate;