import { useState } from "react";
import { CheckCircle2, XCircle, Trash2 } from "lucide-react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function JsonValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const validate = () => {
    if (!input.trim()) {
      setResult({
        valid: false,
        message: "Please enter JSON data to validate.",
      });
      return;
    }

    try {
      const parsed = JSON.parse(input);

      setResult({
        valid: true,
        message: `Valid JSON. Detected type: ${
          Array.isArray(parsed) ? "Array" : typeof parsed
        }.`,
      });
    } catch (error) {
      setResult({
        valid: false,
        message: `Invalid JSON: ${error.message}`,
      });
    }
  };

  const clear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <ToolLayout
      title="JSON Validator"
      slug="json-validator"
      category="JSON"
      description="Validate JSON syntax quickly and identify formatting errors directly in your browser."
      howToUse={[
        "Paste your JSON data into the input area.",
        "Click Validate JSON to check the syntax.",
        "Review the validation result.",
        "Correct any syntax errors and validate again.",
      ]}
      features={[
        {
          title: "Instant validation",
          description: "Check JSON syntax without installing software.",
        },
        {
          title: "Error information",
          description: "Displays parsing information when JSON is invalid.",
        },
        {
          title: "Array and object detection",
          description: "Identifies the basic JSON data type.",
        },
        {
          title: "Browser-based",
          description: "Validation is performed directly in your browser.",
        },
      ]}
      example={{
        input: '{"name":"Alice","age":25}',
        output: "Valid JSON. Detected type: object.",
      }}
      whatIs={{
        title: "JSON validation",
        paragraphs: [
          "JSON validation is the process of checking whether a JSON document follows the syntax rules required by the JSON format.",
          "Valid JSON requires correctly formatted strings, numbers, objects, arrays, Boolean values, and null values.",
          "A validator is useful when working with APIs, configuration files, databases, and structured application data.",
        ],
      }}
      useCases={[
        "Checking API responses during development.",
        "Validating JSON configuration files.",
        "Testing JSON before sending data to an API.",
        "Finding missing commas, brackets, or quotation marks.",
      ]}
      faqs={[
        {
          question: "What is a JSON Validator?",
          answer:
            "A JSON Validator checks whether a JSON document follows valid JSON syntax and reports an error when the input cannot be parsed.",
        },
        {
          question: "How do I validate JSON?",
          answer:
            "Paste your JSON into the input field and click Validate. The tool will tell you whether the JSON is valid and, when possible, provide useful error information.",
        },
        {
          question: "What causes invalid JSON?",
          answer:
            "Common causes include missing quotation marks, trailing commas, unmatched brackets, incorrect property names, and invalid JSON values.",
        },
        {
          question: "Does the validator store my JSON?",
          answer:
            "No. The validation can be performed directly in your browser without sending your JSON to a remote server.",
        },
        {
          question: "What can valid JSON contain?",
          answer:
            "JSON can contain objects, arrays, strings, numbers, booleans, and the null value.",
        },
      ]}
      relatedTools={[
        {
          name: "JSON Formatter",
          slug: "json-formatter",
          description: "Format and beautify JSON data.",
        },
        {
          name: "Base64 Encoder",
          slug: "base64-encoder",
          description: "Encode text into Base64.",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <label className="font-semibold text-slate-900">JSON Input</label>

          <button
            onClick={clear}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600"
          >
            <Trash2 size={16} />
            Clear
          </button>
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name":"Alice","age":25}'
          spellCheck="false"
          className="min-h-[280px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <button
          onClick={validate}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Validate JSON
        </button>

        {result && (
          <div
            className={`flex gap-3 rounded-xl border p-5 ${
              result.valid
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {result.valid ? (
              <CheckCircle2 className="shrink-0" />
            ) : (
              <XCircle className="shrink-0" />
            )}

            <p className="text-sm leading-6">{result.message}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
