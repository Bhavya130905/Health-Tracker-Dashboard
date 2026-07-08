import { useState } from "react";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import { useHistory } from "../../context/HistoryContext.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function HealthRecordForm() {
  const { profile } = useHealth();
  const { addRecord } = useHistory();

  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    weight: profile.weight,
    water: "",
    sleep: "",
    calories: "",
    steps: "",
    notes: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    addRecord({
      ...form,
      weight: Number(form.weight),
      water: Number(form.water),
      sleep: Number(form.sleep),
      calories: Number(form.calories),
      steps: Number(form.steps),
    });

    setForm({
      date: new Date().toISOString().split("T")[0],
      weight: profile.weight,
      water: "",
      sleep: "",
      calories: "",
      steps: "",
      notes: "",
    });
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">
        Log Today's Health
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Input
          label="Date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <Input
          label="Weight (kg)"
          type="number"
          min="0"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />

        <Input
          label="Water Intake (L)"
          type="number"
          min="0"
          step="0.1"
          name="water"
          value={form.water}
          onChange={handleChange}
        />

        <Input
          label="Sleep (Hours)"
          type="number"
          min="0"
          step="0.5"
          name="sleep"
          value={form.sleep}
          onChange={handleChange}
        />

        <Input
          label="Calories"
          type="number"
          min="0"
          name="calories"
          value={form.calories}
          onChange={handleChange}
        />

        <Input
          label="Steps"
          type="number"
          min="0"
          name="steps"
          value={form.steps}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Workout, cheat meal, feeling energetic..."
          />
        </div>

        <div className="md:col-span-2">
          <Button type="submit">
            Save Record
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default HealthRecordForm;