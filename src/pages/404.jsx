import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        noIndex
      />

      <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-slate-50 px-4 py-20">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <SearchX size={38} strokeWidth={1.7} />
          </div>

          {/* Error */}
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Error 404
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Page not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            The page you're looking for may have been moved, deleted, or the
            address may be incorrect.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <Home size={18} />
              Go to homepage
            </Link>

            <Link
              to="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Browse tools
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-500">
              Looking for something useful?
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
              <Link
                to="/tools/json-formatter"
                className="text-slate-600 hover:text-indigo-600"
              >
                JSON Formatter
              </Link>

              <Link
                to="/tools/base64-encoder"
                className="text-slate-600 hover:text-indigo-600"
              >
                Base64 Encoder
              </Link>

              <Link
                to="/tools/regex-tester"
                className="text-slate-600 hover:text-indigo-600"
              >
                Regex Tester
              </Link>

              <Link
                to="/tools/word-counter"
                className="text-slate-600 hover:text-indigo-600"
              >
                Word Counter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
