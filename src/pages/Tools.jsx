import { useMemo, useState } from "react";
import { Search, Wrench } from "lucide-react";
import { tools } from "../data/tools.js";
import ToolCard from "../components/ToolCard.jsx";

export default function Tools() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!Array.isArray(tools)) {
      return [];
    }

    if (!value) {
      return tools;
    }

    return tools.filter((tool) => {
      const name = tool?.name?.toLowerCase() || "";
      const description = tool?.description?.toLowerCase() || "";
      const category = tool?.category?.toLowerCase() || "";

      return (
        name.includes(value) ||
        description.includes(value) ||
        category.includes(value)
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Wrench size={16} />
              Developer Toolkit
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Developer Tools
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Format JSON, encode URLs, generate UUIDs, test regular
              expressions, and perform everyday developer tasks directly in your
              browser.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-2xl items-center rounded-xl border border-slate-200 bg-white shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
              <Search size={20} className="ml-4 shrink-0 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search developer tools..."
                className="w-full bg-transparent px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400"
                aria-label="Search developer tools"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mr-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Developer Toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            All Tools
          </h2>

          <p className="text-slate-500">
            Useful browser-based utilities for everyday development work.
          </p>
        </div>

        {/* Results count */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {filteredTools.length}{" "}
            {filteredTools.length === 1 ? "tool" : "tools"} available
          </p>
        </div>

        {/* Tool Cards */}
        {filteredTools.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Search size={22} className="text-slate-400" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              No tools found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Show all tools
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
