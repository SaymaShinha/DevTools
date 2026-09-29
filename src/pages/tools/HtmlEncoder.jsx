import { useState } from "react";
import { Code2 } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/html-formatter",
    "/tools/url-encoder",
    "/tools/json-formatter",
  ].includes(tool.path),
);

function encodeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function HtmlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    setOutput(encodeHtml(input));
  };

  return (
    <>
      <SEO
        title="HTML Encoder - Encode HTML Online"
        description="Encode HTML special characters into HTML entities with a free browser-based HTML encoder."
        canonical="/tools/html-encoder"
      />

      <ToolLayout
        title="HTML Encoder"
        description="Convert HTML-sensitive characters into HTML entities for safe text representation."
        intro={
          <>
            <p>
              HTML Encoder converts characters that have special meaning in HTML
              into entity representations. This allows markup-like text to be
              displayed as text rather than interpreted as HTML.
            </p>

            <p className="mt-5">
              Common characters include the ampersand, less-than sign,
              greater-than sign, quotation marks, and apostrophes.
            </p>
          </>
        }
        howToUse={[
          "Paste the HTML or text you want to encode.",
          "Click Encode HTML.",
          "Review the entity-encoded result.",
          "Copy the result for use in your document or code.",
        ]}
        features={[
          {
            title: "HTML entity conversion",
            description:
              "Converts common HTML-sensitive characters into entities.",
          },
          {
            title: "Readable result",
            description: "Makes markup-like content displayable as text.",
          },
          {
            title: "Browser-based",
            description: "Encoding is performed locally in your browser.",
          },
          {
            title: "Copy support",
            description: "Copy the encoded result quickly.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <pre className="rounded-xl bg-slate-950 p-4 text-sm text-slate-200">
                {`<div>Hello & welcome</div>`}
              </pre>

              <pre className="rounded-xl bg-slate-950 p-4 text-sm text-slate-200">
                {`&lt;div&gt;Hello &amp; welcome&lt;/div&gt;`}
              </pre>
            </div>
          </div>
        }
        aboutTitle="What Is HTML Encoding?"
        aboutContent={
          <>
            <p>
              HTML uses certain characters as part of its markup syntax. For
              example, the less-than character can begin an HTML element.
            </p>

            <p>
              HTML entities provide an alternative representation for these
              characters. This is useful when text needs to be displayed
              literally instead of interpreted as markup.
            </p>

            <p>
              Encoding should be considered as part of a broader output handling
              strategy. Applications should use appropriate contextual escaping
              and security practices when handling untrusted input.
            </p>
          </>
        }
        useCases={[
          {
            title: "Documentation",
            description:
              "Display HTML examples as text in technical documentation.",
          },
          {
            title: "Code examples",
            description:
              "Show markup syntax without the browser interpreting it.",
          },
          {
            title: "Web development",
            description:
              "Understand how HTML-sensitive characters are represented.",
          },
          {
            title: "Testing",
            description: "Quickly create entity-encoded test values.",
          },
        ]}
        faqItems={faqData["html-encoder"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={9}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="<div>Hello & welcome</div>"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={encode}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Code2 size={17} />
              Encode HTML
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
                <h2 className="font-semibold">Encoded Result</h2>
                <CopyButton text={output} />
              </div>

              <textarea
                value={output}
                readOnly
                rows={9}
                className="w-full rounded-xl bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-200 outline-none"
              />
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
