import { useState } from "react";
import Card from "../components/ui/Card.jsx";
import Input from "../components/ui/Input.jsx";
import { calculateBMI, getBMICategory } from "../utils/healthCalculations.js";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);

  const handleCalculate = () => {
    if (!weight || !height) return;
    const calculatedBmi = calculateBMI(Number(weight), Number(height));
    setBmi(calculatedBmi);
    setCategory(getBMICategory(calculatedBmi));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Health Calculator</h1>
      <Card>
        <div className="space-y-6">
          <Input
            label="Weight (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <Input
            label="Height (cm)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            onClick={handleCalculate}
            className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold"
          >
            Calculate BMI
          </button>

          {bmi !== null && (
            <div className="mt-6 rounded-xl bg-slate-50 p-6 text-center dark:bg-slate-800">
              <p className="text-5xl font-bold text-blue-600">{bmi}</p>
              <p className="mt-2 text-xl font-medium">{category?.label}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Calculator;