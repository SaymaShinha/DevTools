import { Link } from "react-router-dom";
import { Code2, Mail, GitBranchPlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Code2 size={20} />
              </span>

              <span className="text-lg font-bold text-slate-900">DevTools</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Free online developer tools for formatting, encoding, converting,
              testing, and working with everyday technical data directly in your
              browser.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Built for developers, students, writers, and technical users.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Tools</h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/tools"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  All Tools
                </Link>
              </li>

              <li>
                <Link
                  to="/tools/json-formatter"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  JSON Formatter
                </Link>
              </li>

              <li>
                <Link
                  to="/tools/base64-encoder"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Base64 Encoder
                </Link>
              </li>

              <li>
                <Link
                  to="/tools/regex-tester"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Regex Tester
                </Link>
              </li>

              <li>
                <Link
                  to="/tools/word-counter"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Word Counter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Information
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-of-use"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Terms of Use
                </Link>
              </li>

              <li>
                <Link
                  to="/cookie-policy"
                  className="text-slate-600 hover:text-indigo-600"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevTools. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@khanraiyanm@gmail.com"
              className="text-slate-500 transition hover:text-indigo-600"
              aria-label="Email DevTools"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-slate-900"
              aria-label="GitHub"
            >
              <GitBranchPlus size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
