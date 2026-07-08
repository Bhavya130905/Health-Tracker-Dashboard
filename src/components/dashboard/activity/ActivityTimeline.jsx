import activityData from "../../../constants/activityData";

import ActivityCard from "./ActivityCard";
import ActivityItem from "./ActivityItem";

function ActivityTimeline() {
  return (
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
  );
}

export default ActivityTimeline;