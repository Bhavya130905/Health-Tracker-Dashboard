import { Inbox } from "lucide-react";

function EmptyState({
  title = "Nothing Here Yet",
  description = "Content will appear soon.",
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
      <Inbox
        size={60}
        className="text-slate-400"
      />

      <h2 className="mt-6 text-2xl font-bold dark:text-white">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;