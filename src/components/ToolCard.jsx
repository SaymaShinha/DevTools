import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <Link
      to={tool.path}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {Icon && <Icon size={22} />}
        </div>

        <ArrowRight
          size={19}
          className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
        />
      </div>

      <h2 className="mt-5 text-lg font-semibold text-slate-900">{tool.name}</h2>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
        {tool.description}
      </p>

      <span className="mt-5 text-sm font-semibold text-indigo-600">
        Open tool
      </span>
    </Link>
  );
}
