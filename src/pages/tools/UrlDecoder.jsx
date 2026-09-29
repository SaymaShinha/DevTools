import { useState } from "react";
import { Link2, AlertCircle } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/url-encoder",
    "/tools/base64-decoder",
    "/tools/html-encoder",
  ].includes(tool.path),
);

export default function UrlDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const decode = () => {
    if (!input) {
      setOutput("");
      setError("Enter URL-encoded text.");
      return;
    }

    try {
      setOutput(decodeURIComponent(input));
      setError("");
    } catch {
      setOutput("");
      setError("The input contains an invalid percent-encoded sequence.");
    }
  };

  return (
    <>
      <SEO
        title="URL Decoder - Decode URLs Online"
        description="Decode percent-encoded URL text online with a browser-based URL decoder."
        canonical="/tools/url-decoder"
      />

      <ToolLayout
        title="URL Decoder"
        description="Decode percent-encoded text and URL components into readable characters."
        intro={
          <>
            <p>
              URL Decoder reverses percent encoding by converting encoded
              sequences such as <code>%20</code> and <code>%26</code> back into
              their corresponding characters.
            </p>

            <p className="mt-5">
              It is useful when inspecting URLs, query strings, API requests,
              logs, and text copied from systems that encode URL components.
            </p>
          </>
        }
        howToUse={[
          "Paste the encoded URL component or text.",
          "Click Decode URL.",
          "Review the readable result.",
          "Copy the decoded value when needed.",
        ]}
        features={[
          {
            title: "Percent decoding",
            description: "Converts percent-encoded sequences into characters.",
          },
          {
            title: "Error detection",
            description: "Reports malformed percent-encoded input.",
          },
          {
            title: "Simple interface",
            description: "Paste, decode, and copy without additional software.",
          },
          {
            title: "Browser-based",
            description: "The conversion is performed directly in the browser.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                Hello%20World%20%26%20Developers
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                Hello World &amp; Developers
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is URL Decoding?"
        aboutContent={
          <>
            <p>
              URL decoding translates percent-encoded sequences back into
              characters. Percent encoding is used because URLs have syntax
              rules that make some characters unsuitable or ambiguous in certain
              positions.
            </p>

            <p>
              When debugging web applications, you may encounter encoded values
              in browser addresses, server logs, API requests, or application
              data.
            </p>

            <p>
              The decoded result should be treated according to its context.
              Decoding text does not validate that the resulting URL or value is
              safe or meaningful.
            </p>
          </>
        }
        useCases={[
          {
            title: "URL debugging",
            description:
              "Inspect encoded values while troubleshooting links and requests.",
          },
          {
            title: "API development",
            description:
              "Read encoded query parameter values during development.",
          },
          {
            title: "Log analysis",
            description: "Turn encoded URL components into more readable text.",
          },
          {
            title: "Web development",
            description: "Understand how URL components are represented.",
          },
        ]}
        faqItems={faqData["url-decoder"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            rows={8}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Paste encoded URL text..."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={decode}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Link2 size={17} />
              Decode URL
            </button>

            <ClearButton
              onClick={() => {
                setInput("");
                setOutput("");
                setError("");
              }}
              disabled={!input && !output}
            />
          </div>

          {error && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {output && (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold">Decoded Result</h2>
                <CopyButton text={output} />
              </div>

              <textarea
                value={output}
                readOnly
                rows={7}
                className="w-full rounded-xl bg-slate-950 p-4 text-sm leading-7 text-slate-200 outline-none"
              />
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
