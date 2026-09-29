import { useMemo, useState } from "react";
import { Search, ShieldCheck, Zap, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ToolCard from "../components/ToolCard.jsx";
import SEO from "../components/SEO.jsx";
import { tools } from "../data/tools.js";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return tools;

    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(value) ||
        tool.description.toLowerCase().includes(value) ||
        tool.category.toLowerCase().includes(value),
    );
  }, [search]);

  return (
    <>
      <SEO
        title="DevTools - Free Online Developer Tools"
        description="Free browser-based developer tools including JSON Formatter, Base64 Encoder, URL Encoder, Regex Tester, UUID Generator and more."
        canonical="https://devtools-toolkit.vercel.app/"
      />

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-300">
                <Zap size={15} />
                Fast browser-based tools
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Simple tools for
                <span className="block text-indigo-400">
                  modern developers.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Format JSON, encode URLs, generate UUIDs, test regular
                expressions and perform everyday developer tasks without
                installing software.
              </p>

              <div className="mt-8 flex max-w-2xl items-center rounded-xl border border-slate-700 bg-slate-900 p-2">
                <Search size={20} className="ml-3 text-slate-500" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search developer tools..."
                  className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
          id="tools"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Developer Toolkit
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                All tools
              </h2>

              <p className="mt-2 text-slate-500">
                Useful utilities for everyday development work.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-semibold text-slate-900">No tools found.</p>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term.
              </p>
            </div>
          )}
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Built for simplicity
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Useful tools without unnecessary complexity.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Feature
                icon={Zap}
                title="Fast"
                text="Tools run directly in your browser with no waiting for a server."
              />

              <Feature
                icon={Lock}
                title="Browser-based"
                text="Most processing happens locally in your browser."
              />

              <Feature
                icon={ShieldCheck}
                title="No account required"
                text="Use the tools without creating an account or signing in."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 font-bold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}
