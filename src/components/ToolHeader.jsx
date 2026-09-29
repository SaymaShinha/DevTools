import { Wrench } from "lucide-react";

export default function ToolHeader({ title, description }) {
  return (
    <div className="mb-10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
        <Wrench size={15} />
        Online Developer Tool
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
