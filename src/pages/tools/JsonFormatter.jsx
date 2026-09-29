import { useState } from "react";
import { Copy, Check, Trash2, Minimize2 } from "lucide-react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJSON = () => {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter JSON data.");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setOutput("");
      setError(`Invalid JSON: ${err.message}`);
    }
  };

  const minifyJSON = () => {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter JSON data.");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (err) {
      setOutput("");
      setError(`Invalid JSON: ${err.message}`);
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <ToolLayout
      title="JSON Formatter"
      slug="json-formatter"
      category="JSON"
      description="Format, beautify, and minify JSON data directly in your browser. Quickly turn difficult-to-read JSON into a clean and properly indented structure."
      howToUse={[
        "Paste your JSON data into the input editor.",
        "Click Format JSON to validate and beautify the JSON.",
        "Use Minify JSON when you need a compact version.",
        "Copy the formatted result using the Copy button.",
      ]}
      features={[
        {
          title: "Instant JSON formatting",
          description:
            "Convert compact or poorly formatted JSON into a readable structure.",
        },
        {
          title: "JSON validation",
          description:
            "Invalid JSON is detected and the parsing error is displayed.",
        },
        {
          title: "Minify JSON",
          description:
            "Create a compact JSON representation without unnecessary whitespace.",
        },
        {
          title: "Browser-based",
          description:
            "The formatting operation runs directly in your browser.",
        },
      ]}
      example={{
        input: '{"name":"John","age":30,"active":true}',
        output: '{\n  "name": "John",\n  "age": 30,\n  "active": true\n}',
      }}
      whatIs={{
        title: "JSON formatting",
        paragraphs: [
          "JSON formatting is the process of organizing JavaScript Object Notation data with indentation and line breaks so that it is easier for people to read.",
          "JSON is commonly used for APIs, configuration files, application data, and communication between web applications. Proper formatting makes nested objects and arrays easier to inspect.",
          "This JSON Formatter parses your input and generates a consistently indented representation in your browser.",
        ],
      }}
      useCases={[
        "Inspecting API responses during development.",
        "Reading large JSON configuration files.",
        "Checking whether JSON data is syntactically valid.",
        "Preparing JSON for documentation or debugging.",
        "Minifying JSON before using it in applications.",
      ]}
      faqs={[
        {
          question: "What is a JSON Formatter?",
          answer:
            "A JSON Formatter organizes JSON data with indentation and line breaks so that its structure is easier to read, inspect, and understand.",
        },
        {
          question: "How do I format JSON?",
          answer:
            "Paste your JSON into the input area and click the Format button. The tool will parse the JSON and display it with readable indentation.",
        },
        {
          question: "Can I format large JSON files?",
          answer:
            "Yes, although performance depends on the size of the JSON and your browser. Very large files may take longer to process.",
        },
        {
          question: "Does the JSON Formatter send my data to a server?",
          answer:
            "No. The formatter processes your JSON directly in your browser, so the tool does not need to send your input to a server.",
        },
        {
          question: "Can I minify JSON?",
          answer:
            "Yes. Minifying JSON removes unnecessary whitespace and line breaks, producing a more compact JSON representation.",
        },
      ]}
      relatedTools={[
        {
          name: "JSON Validator",
          slug: "json-validator",
          description: "Check JSON syntax and identify parsing errors.",
        },
        {
          name: "HTML Formatter",
          slug: "html-formatter",
          description: "Format HTML into a more readable structure.",
        },
        {
          name: "Base64 Encoder",
          slug: "base64-encoder",
          description: "Encode text into Base64 format.",
        },
      ]}
    >
      <div className="space-y-6">
        {/* Input */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-semibold text-slate-900">JSON Input</label>

            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600"
            >
              <Trash2 size={16} />
              Clear
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name":"John","age":30}'
            className="min-h-[260px] w-full resize-y rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            spellCheck="false"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={formatJSON}
            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Format JSON
          </button>

          <button
            type="button"
            onClick={minifyJSON}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Minimize2 size={17} />
            Minify
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
            {error}
          </div>
        )}

        {/* Output */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-semibold text-slate-900">
              Formatted JSON
            </label>

            <button
              type="button"
              onClick={copyOutput}
              disabled={!output}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="min-h-[260px] overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200">
            {output || "// Formatted JSON will appear here"}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
}
