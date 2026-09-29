import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-slate-500"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 hover:text-indigo-600"
      >
        <Home size={15} />
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span
            key={`${item.label}-${index}`}
            className="flex items-center gap-1.5"
          >
            <ChevronRight size={15} className="text-slate-400" />

            {item.path && !isLast ? (
              <Link to={item.path} className="hover:text-indigo-600">
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? "text-slate-900" : ""}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
