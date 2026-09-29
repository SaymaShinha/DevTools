import { useState } from "react";
import { Braces, AlertCircle } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/html-encoder",
    "/tools/json-formatter",
    "/tools/text-case-converter",
  ].includes(tool.path),
);

function formatHtml(html) {
  const normalized = html.replace(/>\s+</g, "><").replace(/</g, "\n<").trim();

  const tokens = normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let indent = 0;
  const result = [];

  const voidTags = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);

  tokens.forEach((token) => {
    const closing = /^<\//.test(token);
    const openingMatch = token.match(/^<([a-zA-Z0-9-]+)/);
    const tagName = openingMatch?.[1]?.toLowerCase();

    if (closing) {
      indent = Math.max(0, indent - 1);
    }

    result.push(`${"  ".repeat(indent)}${token}`);

    const selfClosing =
      /\/>$/.test(token) || (tagName && voidTags.has(tagName));

    const isOpening = /^<[^!/][^>]*>$/.test(token) && !closing && !selfClosing;

    if (isOpening) {
      indent += 1;
    }
  });

  return result.join("\n");
}

export default function HtmlFormatter() {
  const [input, setInput] = useState(
    `<div><h1>Hello</h1><p>Welcome to DevTools.</p></div>`,
  );
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    if (!input.trim()) {
      setOutput("");
      setError("Enter HTML to format.");
      return;
    }

    try {
      setOutput(formatHtml(input));
      setError("");
    } catch {
      setOutput("");
      setError("Unable to format the supplied HTML.");
    }
  };

  return (
    <>
      <SEO
        title="HTML Formatter - Format HTML Online"
        description="Format and indent HTML markup online with a browser-based HTML formatter."
        canonical="/tools/html-formatter"
      />

      <ToolLayout
        title="HTML Formatter"
        description="Beautify and indent HTML markup to make nested elements easier to read and edit."
        intro={
          <>
            <p>
              HTML Formatter adds line breaks and indentation to HTML markup so
              that nested elements are easier to understand. Readable markup can
              make debugging, code review, and maintenance much simpler.
            </p>

            <p className="mt-5">
              This lightweight formatter is designed for common HTML markup and
              runs directly in your browser.
            </p>
          </>
        }
        howToUse={[
          "Paste your HTML into the editor.",
          "Click Format HTML.",
          "Review the indented output.",
          "Copy the formatted markup when ready.",
        ]}
        features={[
          {
            title: "Readable indentation",
            description: "Nested elements are displayed with visual hierarchy.",
          },
          {
            title: "Fast formatting",
            description: "Format markup immediately without uploading a file.",
          },
          {
            title: "Browser-based",
            description: "The formatter works locally in the browser.",
          },
          {
            title: "Copy output",
            description: "Copy formatted HTML with one click.",
          },
        ]}
        example={
          <div className="p-5">
            <pre className="rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
              {`<div>
  <h1>Hello</h1>
  <p>Welcome to DevTools.</p>
</div>`}
            </pre>
          </div>
        }
        aboutTitle="What Is HTML Formatting?"
        aboutContent={
          <>
            <p>
              HTML formatting is the process of arranging markup with consistent
              indentation and line breaks. HTML itself generally does not
              require indentation to represent its structure, but humans benefit
              greatly from readable formatting.
            </p>

            <p>
              Properly formatted HTML makes parent-child relationships between
              elements easier to identify and can make structural problems
              easier to diagnose.
            </p>

            <p>
              Formatting is different from validation. A formatter can improve
              presentation, while a dedicated HTML validator checks the markup
              against HTML rules.
            </p>
          </>
        }
        useCases={[
          {
            title: "Code review",
            description: "Make HTML changes easier to inspect and discuss.",
          },
          {
            title: "Debugging",
            description: "Improve visibility into nested markup structures.",
          },
          {
            title: "Learning HTML",
            description:
              "Understand the hierarchy of HTML elements more easily.",
          },
          {
            title: "Maintenance",
            description: "Keep manually edited markup readable.",
          },
        ]}
        faqItems={faqData["html-formatter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            rows={14}
            spellCheck={false}
            className="w-full rounded-xl bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Paste HTML here..."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={format}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Braces size={17} />
              Format HTML
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
                <h2 className="font-semibold">Formatted HTML</h2>
                <CopyButton text={output} />
              </div>

              <pre className="max-h-[500px] overflow-auto rounded-xl bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200">
                {output}
              </pre>
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
