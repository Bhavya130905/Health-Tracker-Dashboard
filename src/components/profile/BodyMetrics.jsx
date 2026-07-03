import Card from "../ui/Card.jsx";
import Input from "../ui/Input.jsx";
import { useHealth } from "../../context/HealthContext.jsx";

function BodyMetrics() {
  const { profile, updateProfile } = useHealth();

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Body Metrics
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Height (cm)"
          type="number"
          value={profile.height}
          onChange={(e) =>
            updateProfile({
              height: Number(e.target.value),
            })
          }
        />

        <Input
          label="Weight (kg)"
          type="number"
          value={profile.weight}
          onChange={(e) =>
            updateProfile({
              weight: Number(e.target.value),
            })
          }
        />
      </div>
    </Card>
  );
}

export default BodyMetrics;