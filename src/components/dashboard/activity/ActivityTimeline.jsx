import activityData from "../../../constants/activityData";
import Card from "../../ui/Card";
import SectionHeader from "../../ui/SectionHeader";
import ActivityCard from "./ActivityCard";
import ActivityItem from "./ActivityItem";

function ActivityTimeline() {
  return (
    <Card className="p-6">
  <SectionHeader
    title="Recent Activity"
    subtitle="Your latest health events"
  />
    <ActivityCard title="Recent Activity">
      <div>
        {activityData.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </ActivityCard>
    </Card>
  );
}

export default ActivityTimeline;