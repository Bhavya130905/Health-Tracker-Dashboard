import { useEffect, useState } from "react";

function EditRecordModal({
  isOpen,
  record,
  onSave,
  onCancel,
}) {
  const [form, setForm] = useState(record);

  useEffect(() => {
    setForm(record);
  }, [record]);

  if (!isOpen || !record) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "notes"
          ? value
          : value === ""
          ? ""
          : Number(value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.weight ||
      !form.water ||
      !form.sleep ||
      !form.calories ||
      !form.steps
    )
      return;

    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          Edit Health Record
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 md:grid-cols-2"
        >
          <input
            className="rounded-xl border p-3"
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            placeholder="Weight"
          />

          <input
            className="rounded-xl border p-3"
            name="water"
            type="number"
            step="0.1"
            value={form.water}
            onChange={handleChange}
            placeholder="Water"
          />

          <input
            className="rounded-xl border p-3"
            name="sleep"
            type="number"
            step="0.5"
            value={form.sleep}
            onChange={handleChange}
            placeholder="Sleep"
          />

          <input
            className="rounded-xl border p-3"
            name="calories"
            type="number"
            value={form.calories}
            onChange={handleChange}
            placeholder="Calories"
          />

          <input
            className="rounded-xl border p-3"
            name="steps"
            type="number"
            value={form.steps}
            onChange={handleChange}
            placeholder="Steps"
          />

          <textarea
            className="rounded-xl border p-3 md:col-span-2"
            rows={4}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes"
          />

          <div className="flex justify-end gap-3 md:col-span-2">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecordModal;