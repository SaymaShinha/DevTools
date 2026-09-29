import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

function formatHTML(html) {
  let formatted = html.replace(/>\s*</g, "><").replace(/</g, "\n<").trim();

  const lines = formatted.split("\n");
  let indent = 0;

  return lines
    .map((line) => {
      line = line.trim();

      if (/^<\//.test(line)) {
        indent = Math.max(indent - 1, 0);
      }

      const result = "  ".repeat(indent) + line;

      if (
        /^<[^!/][^>]*>$/.test(line) &&
        !/<\/[^>]+>$/.test(line) &&
        !/\/>$/.test(line) &&
        !/^<(input|img|br|hr|meta|link)\b/i.test(line)
      ) {
        indent++;
      }

      return result;
    })
    .join("\n");
}

export default function HtmlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <ToolLayout
      title="HTML Formatter"
      slug="html-formatter"
      category="HTML"
      description="Format and beautify HTML code into a more readable, consistently indented structure."
      howToUse={[
        "Paste your HTML into the editor.",
        "Click Format HTML.",
        "Review the formatted HTML.",
        "Copy the result into your project if needed.",
      ]}
      features={[
        {
          title: "Readable indentation",
          description: "Organize HTML with consistent indentation.",
        },
        {
          title: "Browser-based",
          description: "Formatting happens directly in your browser.",
        },
        {
          title: "Fast formatting",
          description: "Format small and medium HTML snippets quickly.",
        },
        {
          title: "Simple interface",
          description: "Designed for everyday development tasks.",
        },
      ]}
      example={{
        input: "<div><h1>Hello</h1><p>Welcome</p></div>",
        output: "<div>\n  <h1>Hello</h1>\n  <p>Welcome</p>\n</div>",
      }}
      whatIs={{
        title: "HTML formatting",
        paragraphs: [
          "HTML formatting organizes markup using line breaks and indentation so developers can understand the document structure more easily.",
          "Readable HTML is easier to inspect, maintain, debug, and review.",
          "This tool provides lightweight browser-based formatting for common HTML snippets.",
        ],
      }}
      useCases={[
        "Cleaning copied HTML snippets.",
        "Making minified HTML easier to read.",
        "Reviewing markup during development.",
        "Preparing HTML examples for documentation.",
      ]}
      faqs={[
        {
          question: "What is an HTML Formatter?",
          answer:
            "An HTML Formatter organizes HTML markup with indentation and line breaks to make the document easier to read and maintain.",
        },
        {
          question: "How do I format HTML?",
          answer:
            "Paste your HTML into the editor and click Format. The tool will organize the markup into a more readable structure.",
        },
        {
          question: "Does formatting change my HTML content?",
          answer:
            "Formatting primarily changes whitespace and indentation. It should not intentionally change the structure of valid HTML.",
        },
        {
          question: "Can I format minified HTML?",
          answer:
            "Yes. An HTML formatter can add indentation and line breaks to minified or compressed markup.",
        },
        {
          question: "Does the HTML Formatter upload my code?",
          answer:
            "No. The browser-based formatter can process your HTML locally without sending it to a server.",
        },
      ]}
      relatedTools={[
        {
          name: "HTML Encoder",
          slug: "html-encoder",
          description: "Encode HTML special characters.",
        },
        {
          name: "JSON Formatter",
          slug: "json-formatter",
          description: "Format JSON data.",
        },
      ]}
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="<div><h1>Hello</h1></div>"
          spellCheck="false"
          className="min-h-[260px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        <button
          onClick={() => setOutput(formatHTML(input))}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Format HTML
        </button>

        <pre className="min-h-[260px] overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-300">
          {output || "// Formatted HTML will appear here"}
        </pre>
      </div>
    </ToolLayout>
  );
}
