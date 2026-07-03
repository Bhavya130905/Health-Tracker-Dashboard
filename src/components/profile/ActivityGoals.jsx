import Card from "../ui/Card.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function ActivityGoals() {
  const { profile, updateProfile } = useHealth();

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Lifestyle & Goal
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Activity Level
          </label>

          <select
            value={profile.activity}
            onChange={(e) =>
              updateProfile({
                activity: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option value="sedentary">
              Sedentary
            </option>

            <option value="light">
              Lightly Active
            </option>

            <option value="moderate">
              Moderately Active
            </option>

            <option value="active">
              Active
            </option>

            <option value="veryActive">
              Very Active
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Goal
          </label>

          <select
            value={profile.goal}
            onChange={(e) =>
              updateProfile({
                goal: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option value="lose">
              Lose Weight
            </option>

            <option value="maintain">
              Maintain Weight
            </option>

            <option value="gain">
              Gain Muscle
            </option>
          </select>
        </div>
      </div>
    </Card>
  );
}

export default ActivityGoals;