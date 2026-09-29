import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Minimize2, Wand2 } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/json-validator",
    "/tools/html-formatter",
    "/tools/url-encoder",
    "/tools/text-case-converter",
  ].includes(tool.path),
);

const sampleJson = `{
  "name": "DevTools",
  "type": "developer-tool",
  "features": ["formatting", "validation"],
  "active": true
}`;

export default function JsonFormatter() {
  const [input, setInput] = useState(sampleJson);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setOutput("");
      setError(err.message || "Invalid JSON.");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (err) {
      setOutput("");
      setError(err.message || "Invalid JSON.");
    }
  };

  const isValid = useMemo(() => {
    if (!input.trim()) return false;

    try {
      JSON.parse(input);
      return true;
    } catch {
      return false;
    }
  }, [input]);

  return (
    <>
      <SEO
        title="JSON Formatter - Format JSON Online"
        description="Format and beautify JSON online with readable indentation. Validate JSON syntax and minify JSON directly in your browser."
        canonical="/tools/json-formatter"
      />

      <ToolLayout
        title="JSON Formatter"
        description="Format, beautify, and minify JSON data with a fast browser-based JSON formatter."
        intro={
          <>
            <p>
              JSON Formatter is a browser-based utility for turning compact or
              difficult-to-read JSON into a clearly structured format. Proper
              indentation makes nested objects, arrays, properties, and values
              much easier to inspect.
            </p>

            <p className="mt-5">
              You can also use the formatter to minify valid JSON when you need
              a compact representation. Processing happens directly in the
              browser, so you can work with JSON without setting up a server
              just for formatting.
            </p>
          </>
        }
        howToUse={[
          "Paste your JSON into the input editor.",
          "Click Format JSON to create an indented version.",
          "Review the result and copy it when you are ready.",
          "Use Minify JSON when you need a compact representation.",
        ]}
        features={[
          {
            title: "Readable indentation",
            description:
              "Nested JSON objects and arrays are displayed with consistent indentation.",
          },
          {
            title: "Syntax feedback",
            description:
              "Invalid JSON is reported instead of producing misleading formatted output.",
          },
          {
            title: "Minification",
            description:
              "Convert valid JSON into a compact single-line representation.",
          },
          {
            title: "Browser-based",
            description:
              "Formatting can be performed directly in your browser without a backend.",
          },
        ]}
        example={
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Input</p>
              <pre className="rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
                {`{"name":"DevTools","active":true}`}
              </pre>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">
                Formatted
              </p>
              <pre className="rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
                {`{
  "name": "DevTools",
  "active": true
}`}
              </pre>
            </div>
          </div>
        }
        aboutTitle="What Is JSON Formatting?"
        aboutContent={
          <>
            <p>
              JSON stands for JavaScript Object Notation. It is a lightweight
              text format widely used for exchanging structured data between
              applications, APIs, databases, and configuration systems.
            </p>

            <p>
              JSON does not require whitespace for its structure, which means
              compact JSON can be difficult for humans to inspect. Formatting
              adds line breaks and indentation while preserving the underlying
              data structure.
            </p>

            <p>
              A formatter is especially useful when debugging API responses,
              reviewing configuration files, inspecting nested data, or
              preparing JSON for documentation.
            </p>
          </>
        }
        useCases={[
          {
            title: "API debugging",
            description:
              "Make API responses easier to inspect while troubleshooting requests and responses.",
          },
          {
            title: "Configuration files",
            description:
              "Improve the readability of JSON configuration files during development.",
          },
          {
            title: "Code review",
            description:
              "Present structured JSON in a consistent format when reviewing changes.",
          },
          {
            title: "Documentation",
            description:
              "Prepare readable JSON examples for technical documentation.",
          },
        ]}
        faqItems={faqData["json-formatter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${
                isValid
                  ? "bg-green-50 text-green-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {isValid && <CheckCircle2 size={15} />}
              {isValid ? "Valid JSON" : "Enter JSON to validate"}
            </span>
          </div>

          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            rows={14}
            spellCheck={false}
            className="w-full rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder='Paste JSON here, for example: {"name":"John"}'
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={formatJson}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Wand2 size={17} />
              Format JSON
            </button>

            <button
              type="button"
              onClick={minifyJson}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Minimize2 size={17} />
              Minify JSON
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
              <AlertCircle className="mt-0.5 shrink-0" size={18} />
              <span>{error}</span>
            </div>
          )}

          {output && (
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h2 className="font-semibold text-slate-900">Result</h2>
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
