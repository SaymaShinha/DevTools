import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedTools({ tools = [] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {tools.map((tool) => (
        <Link
          key={tool.slug}
          to={`/tools/${tool.slug}`}
          className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">{tool.name}</h3>

              <p className="mt-1 text-sm text-slate-500">{tool.description}</p>
            </div>

            <ArrowRight
              size={18}
              className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
