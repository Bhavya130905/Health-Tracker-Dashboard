import Skeleton from "./Skeleton";

function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <Skeleton className="h-4 w-28" />

          <Skeleton className="h-8 w-24" />
        </div>

        <Skeleton className="h-14 w-14 rounded-2xl" />
      </div>

      <Skeleton className="mt-6 h-2 w-full rounded-full" />

      <div className="mt-5 flex justify-between">
        <Skeleton className="h-4 w-24" />

        <Skeleton className="h-4 w-14" />
      </div>
    </div>
  );
}

export default SkeletonCard;