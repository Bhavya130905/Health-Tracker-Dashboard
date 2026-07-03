import Card from "../ui/Card.jsx";
import Input from "../ui/Input.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function PersonalInfo() {
  const { profile, updateProfile } = useHealth();

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Full Name"
          value={profile.name}
          onChange={(e) =>
            updateProfile({
              name: e.target.value,
            })
          }
        />

        <Input
          label="Age"
          type="number"
          value={profile.age}
          onChange={(e) =>
            updateProfile({
              age: Number(e.target.value),
            })
          }
        />

        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            value={profile.gender}
            onChange={(e) =>
              updateProfile({
                gender: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option value="male">Male</option>

            <option value="female">
              Female
            </option>
          </select>
        </div>
      </div>
    </Card>
  );
}

export default PersonalInfo;