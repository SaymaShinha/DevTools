import { Link, NavLink } from "react-router-dom";
import { Code2, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const toolLinks = [
  {
    label: "JSON Formatter",
    path: "/tools/json-formatter",
  },
  {
    label: "JSON Validator",
    path: "/tools/json-validator",
  },
  {
    label: "Base64 Encoder",
    path: "/tools/base64-encoder",
  },
  {
    label: "URL Encoder",
    path: "/tools/url-encoder",
  },
  {
    label: "Text Case Converter",
    path: "/tools/text-case-converter",
  },
  {
    label: "Word Counter",
    path: "/tools/word-counter",
  },
  {
    label: "UUID Generator",
    path: "/tools/uuid-generator",
  },
];

function navClass({ isActive }) {
  return `text-sm font-medium transition ${
    isActive ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
  }`;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Code2 size={21} />
          </span>

          <span className="text-lg font-bold tracking-tight text-slate-900">
            DevTools
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => setToolsOpen((value) => !value)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Tools
              <ChevronDown
                size={16}
                className={`transition ${toolsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {toolsOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                {toolLinks.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    onClick={() => setToolsOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-indigo-600"
                  >
                    {tool.label}
                  </Link>
                ))}

                <Link
                  to="/tools"
                  onClick={() => setToolsOpen(false)}
                  className="mt-1 block rounded-lg border-t border-slate-100 px-3 py-3 text-sm font-semibold text-indigo-600"
                >
                  View all tools →
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </NavLink>

            <button
              type="button"
              onClick={() => setToolsOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Tools
              <ChevronDown
                size={16}
                className={`transition ${toolsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {toolsOpen && (
              <div className="ml-3 border-l border-slate-200 pl-3">
                {toolLinks.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    {tool.label}
                  </Link>
                ))}

                <Link
                  to="/tools"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-sm font-semibold text-indigo-600"
                >
                  View all tools →
                </Link>
              </div>
            )}

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
