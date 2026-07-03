import PersonalInfo from "./PersonalInfo.jsx";
import BodyMetrics from "./BodyMetrics.jsx";
import ActivityGoals from "./ActivityGoals.jsx";

function ProfileForm() {
  return (
    <div className="space-y-6">
      <PersonalInfo />

      <BodyMetrics />

      <ActivityGoals />
    </div>
  );
}

export default ProfileForm;