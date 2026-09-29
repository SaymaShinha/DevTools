import { useState } from "react";
import { Link2 } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/url-decoder",
    "/tools/html-encoder",
    "/tools/base64-encoder",
    "/tools/slug-generator",
  ].includes(tool.path),
);

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    if (!input) {
      setOutput("");
      return;
    }

    setOutput(encodeURIComponent(input));
  };

  return (
    <>
      <SEO
        title="URL Encoder - Encode URLs Online"
        description="Encode URL text and query parameter values using a fast browser-based URL encoder."
        canonical="/tools/url-encoder"
      />

      <ToolLayout
        title="URL Encoder"
        description="Encode text for safe use in URLs, query parameters, and other URL components."
        intro={
          <>
            <p>
              URL encoding converts characters that have special meanings in a
              URL into percent-encoded sequences. This is especially useful when
              text contains spaces, punctuation, or characters reserved by URL
              syntax.
            </p>

            <p className="mt-5">
              This tool uses the browser's standard URI component encoding
              behavior, making it useful for preparing individual values that
              will be inserted into a URL.
            </p>
          </>
        }
        howToUse={[
          "Enter the text or URL component you want to encode.",
          "Click Encode URL.",
          "Copy the encoded result.",
          "Use the result as the appropriate URL component.",
        ]}
        features={[
          {
            title: "Percent encoding",
            description:
              "Converts characters into URL-safe percent-encoded sequences.",
          },
          {
            title: "Fast conversion",
            description: "Encoding happens instantly in the browser.",
          },
          {
            title: "Copy result",
            description:
              "Copy the encoded value without manually selecting it.",
          },
          {
            title: "No server required",
            description: "The browser performs the encoding locally.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold">Original</p>
                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                  Hello World & Developers
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold">Encoded</p>
                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                  Hello%20World%20%26%20Developers
                </div>
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is URL Encoding?"
        aboutContent={
          <>
            <p>
              URLs have a defined syntax in which some characters have special
              meanings. URL encoding allows data to be represented without
              accidentally changing the intended structure of a URL component.
            </p>

            <p>
              For example, a space can be represented as <code>%20</code>. Other
              reserved or non-ASCII characters can also be represented using
              percent encoding.
            </p>

            <p>
              Encoding is particularly important when dynamically constructing
              URLs from user-entered values, search terms, identifiers, and
              query parameters.
            </p>
          </>
        }
        useCases={[
          {
            title: "Query parameters",
            description:
              "Encode search terms and other values before inserting them into URLs.",
          },
          {
            title: "API requests",
            description: "Prepare parameter values for HTTP requests.",
          },
          {
            title: "Web development",
            description:
              "Handle user-generated text safely within URL components.",
          },
          {
            title: "Debugging",
            description:
              "Understand how special characters are represented in URLs.",
          },
        ]}
        faqItems={faqData["url-encoder"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Enter text to encode..."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={encode}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Link2 size={17} />
              Encode URL
            </button>

            <ClearButton
              onClick={() => {
                setInput("");
                setOutput("");
              }}
              disabled={!input && !output}
            />
          </div>

          {output && (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">Encoded Result</h2>
                <CopyButton text={output} />
              </div>

              <textarea
                value={output}
                readOnly
                rows={7}
                className="w-full rounded-xl bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-200 outline-none"
              />
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
