import SkeletonCard from "../ui/SkeletonCard";
import Skeleton from "../ui/Skeleton";

function DashboardLoader() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="grid gap-6 lg:grid-cols-3">
        <SkeletonCard />

        <div className="lg:col-span-2">
          <SkeletonCard />
        </div>
      </div>

      {/* Health Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">
        <Skeleton className="h-96 rounded-3xl" />

        <Skeleton className="h-96 rounded-3xl" />

        <div className="xl:col-span-2">
          <Skeleton className="h-96 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default DashboardLoader;