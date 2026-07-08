import { getProgressColor } from "../../../utils/goalHelpers";

function GoalProgressRing({ value, color }) {
  const radius = 38;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex h-24 w-24 items-center justify-center">
      <svg
        width="90"
        height="90"
        className="-rotate-90"
      >
        <circle
          cx="45"
          cy="45"
          r={normalizedRadius}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="transparent"
        />

        <circle
          cx="45"
          cy="45"
          r={normalizedRadius}
          stroke={getProgressColor(color)}
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.8s ease",
          }}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-slate-700 text-sm font-bold dark:fill-white"
          transform="rotate(90 45 45)"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
}

export default GoalProgressRing;