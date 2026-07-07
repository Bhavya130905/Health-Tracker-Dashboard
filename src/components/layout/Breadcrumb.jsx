import { Link, useLocation } from "react-router-dom";
import { ChevronRight, House } from "lucide-react";
import breadcrumbNames from "../../constants/breadCrumbConfig.js";

function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  if (pathnames.length === 0) {
    return (
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-sm"
      >
        <House
          size={18}
          className="mr-2 text-blue-600"
        />

        <span className="font-semibold text-slate-700">
          Dashboard
        </span>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm"
    >
      <Link
        to="/"
        className="flex items-center text-slate-500 transition hover:text-blue-600"
      >
        <House size={17} />
      </Link>

      {pathnames.map((segment, index) => {
        const route =
          "/" +
          pathnames
            .slice(0, index + 1)
            .join("/");

        const isLast =
          index === pathnames.length - 1;

        return (
          <div
            key={route}
            className="flex items-center gap-2"
          >
            <ChevronRight
              size={16}
              className="text-slate-400"
            />

            {isLast ? (
              <span className="font-semibold text-slate-700">
                {breadcrumbNames[segment] ??
                  segment}
              </span>
            ) : (
              <Link
                to={route}
                className="text-slate-500 transition hover:text-blue-600"
              >
                {breadcrumbNames[segment] ??
                  segment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;