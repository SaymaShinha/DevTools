import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">DevTools</h3>

            <p className="mt-3 max-w-md text-sm leading-7">
              Simple, fast and useful browser-based tools for developers,
              writers and designers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Tools</h4>

            <div className="mt-4 space-y-2 text-sm">
              <Link
                className="block hover:text-white"
                to="/tools/json-formatter"
              >
                JSON Formatter
              </Link>

              <Link
                className="block hover:text-white"
                to="/tools/base64-encoder"
              >
                Base64 Encoder
              </Link>

              <Link className="block hover:text-white" to="/tools/word-counter">
                Word Counter
              </Link>

              <Link className="block hover:text-white" to="/tools/regex-tester">
                Regex Tester
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>

            <div className="mt-4 space-y-2 text-sm">
              <Link className="block hover:text-white" to="/about">
                About
              </Link>

              <Link className="block hover:text-white" to="/contact">
                Contact
              </Link>

              <Link className="block hover:text-white" to="/privacy-policy">
                Privacy Policy
              </Link>

              <Link className="block hover:text-white" to="/terms-of-use">
                Terms of Use
              </Link>

              <Link className="block hover:text-white" to="/cookie-policy">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm">
          © {new Date().getFullYear()} DevTools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
