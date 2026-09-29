import { useState } from "react";
import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/json-formatter",
    "/tools/html-formatter",
    "/tools/base64-decoder",
  ].includes(tool.path),
);

export default function JsonValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const validate = () => {
    if (!input.trim()) {
      setResult({
        valid: false,
        message: "Enter JSON before validating.",
      });
      return;
    }

    try {
      JSON.parse(input);

      setResult({
        valid: true,
        message: "The JSON is valid.",
      });
    } catch (error) {
      setResult({
        valid: false,
        message: error.message || "Invalid JSON.",
      });
    }
  };

  return (
    <>
      <SEO
        title="JSON Validator - Validate JSON Online"
        description="Validate JSON syntax online. Check objects, arrays, strings, numbers, and JSON structure directly in your browser."
        canonical="/tools/json-validator"
      />

      <ToolLayout
        title="JSON Validator"
        description="Check JSON syntax and identify invalid JSON data directly in your browser."
        intro={
          <>
            <p>
              JSON Validator checks whether a piece of text follows the syntax
              rules of JSON. It is useful when working with API responses,
              configuration files, application data, and structured documents.
            </p>

            <p className="mt-5">
              Instead of manually looking through a large JSON document for a
              missing comma or unmatched bracket, you can paste the content into
              the validator and receive immediate syntax feedback.
            </p>
          </>
        }
        howToUse={[
          "Paste your JSON into the editor.",
          "Click Validate JSON.",
          "Read the validation result and any reported parser error.",
          "Correct the JSON and validate it again.",
        ]}
        features={[
          {
            title: "Syntax validation",
            description: "Checks whether the input can be parsed as JSON.",
          },
          {
            title: "Clear error feedback",
            description:
              "Displays the parser error when invalid JSON is entered.",
          },
          {
            title: "No installation",
            description:
              "Use the validator directly from a modern web browser.",
          },
          {
            title: "Browser processing",
            description: "Validation can be performed locally in the browser.",
          },
        ]}
        example={
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold text-slate-700">Valid JSON</p>

              <pre className="rounded-xl bg-slate-950 p-4 text-sm text-slate-200">
                {`{
  "name": "Alex",
  "age": 28
}`}
              </pre>
            </div>

            <div>
              <p className="mb-2 font-semibold text-slate-700">Invalid JSON</p>

              <pre className="rounded-xl bg-slate-950 p-4 text-sm text-slate-200">
                {`{
  "name": "Alex",
  "age": 28,
}`}
              </pre>
            </div>
          </div>
        }
        aboutTitle="What Is JSON Validation?"
        aboutContent={
          <>
            <p>
              JSON validation is the process of checking whether structured text
              follows the JSON syntax specification expected by a JSON parser.
            </p>

            <p>
              Common problems include missing quotation marks, unmatched braces,
              missing commas, invalid values, and trailing commas. Finding these
              errors before sending data to an API or application can prevent
              parsing failures.
            </p>

            <p>
              Validation checks syntax. It does not necessarily determine
              whether the data makes sense for a particular application's
              business rules.
            </p>
          </>
        }
        useCases={[
          {
            title: "API development",
            description:
              "Check JSON request and response data during API development.",
          },
          {
            title: "Configuration debugging",
            description: "Find syntax problems in JSON configuration files.",
          },
          {
            title: "Data preparation",
            description:
              "Verify structured data before importing or processing it.",
          },
          {
            title: "Learning JSON",
            description:
              "Experiment with JSON syntax and understand parser errors.",
          },
        ]}
        faqItems={faqData["json-validator"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setResult(null);
            }}
            rows={15}
            spellCheck={false}
            className="w-full rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Paste JSON here..."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={validate}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <ShieldCheck size={17} />
              Validate JSON
            </button>

            <ClearButton
              onClick={() => {
                setInput("");
                setResult(null);
              }}
              disabled={!input && !result}
            />
          </div>

          {result && (
            <div
              className={`flex gap-3 rounded-xl border p-4 ${
                result.valid
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {result.valid ? (
                <CheckCircle2 size={19} />
              ) : (
                <AlertCircle size={19} />
              )}

              <div>
                <p className="font-semibold">
                  {result.valid ? "Valid JSON" : "Invalid JSON"}
                </p>

                <p className="mt-1 text-sm">{result.message}</p>
              </div>
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
