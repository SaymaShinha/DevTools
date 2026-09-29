import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <Link to={`/tools/${tool.slug}`} className="tool-card group block p-6">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Icon size={22} />
        </div>

        <ArrowRight
          size={18}
          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-600"
        />
      </div>

      <div className="mt-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {tool.category}
        </span>

        <h3 className="mt-2 text-lg font-bold text-slate-900">{tool.name}</h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {tool.description}
        </p>
      </div>
    </Link>
  );
}
