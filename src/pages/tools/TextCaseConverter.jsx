import { useMemo, useState } from "react";
import { CaseSensitive } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/word-counter",
    "/tools/slug-generator",
    "/tools/json-formatter",
  ].includes(tool.path),
);

const words = (text) => text.trim().split(/\s+/).filter(Boolean);

function titleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

function sentenceCase(text) {
  const lower = text.toLowerCase();

  return lower.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (match) =>
    match.toUpperCase(),
  );
}

function camelCase(text) {
  const list = words(text);

  return list
    .map((word, index) => {
      const clean = word.replace(/[^\p{L}\p{N}]/gu, "");

      if (index === 0) {
        return clean.toLowerCase();
      }

      return clean
        ? clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()
        : "";
    })
    .join("");
}

function pascalCase(text) {
  return camelCase(text).replace(/^./, (char) => char.toUpperCase());
}

function snakeCase(text) {
  return words(text)
    .map((word) => word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase())
    .filter(Boolean)
    .join("_");
}

function kebabCase(text) {
  return words(text)
    .map((word) => word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase())
    .filter(Boolean)
    .join("-");
}

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("uppercase");

  const output = useMemo(() => {
    switch (mode) {
      case "lowercase":
        return input.toLowerCase();
      case "uppercase":
        return input.toUpperCase();
      case "title":
        return titleCase(input);
      case "sentence":
        return sentenceCase(input);
      case "camel":
        return camelCase(input);
      case "pascal":
        return pascalCase(input);
      case "snake":
        return snakeCase(input);
      case "kebab":
        return kebabCase(input);
      default:
        return input;
    }
  }, [input, mode]);

  return (
    <>
      <SEO
        title="Text Case Converter - Convert Text Case Online"
        description="Convert text to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case."
        canonical="/tools/text-case-converter"
      />

      <ToolLayout
        title="Text Case Converter"
        description="Convert text between common capitalization and naming styles instantly in your browser."
        intro={
          <>
            <p>
              Text Case Converter transforms text into several common
              capitalization styles. It can be useful when preparing headings,
              variable names, filenames, identifiers, URLs, and general written
              content.
            </p>

            <p className="mt-5">
              Choose a conversion style, enter your text, and the result will
              update immediately.
            </p>
          </>
        }
        howToUse={[
          "Enter or paste your text.",
          "Choose the case format you need.",
          "Review the converted text.",
          "Copy the result for use in your project or document.",
        ]}
        features={[
          {
            title: "Common text cases",
            description:
              "Convert between uppercase, lowercase, title case, and sentence case.",
          },
          {
            title: "Developer naming styles",
            description:
              "Generate camelCase, PascalCase, snake_case, and kebab-case.",
          },
          {
            title: "Instant results",
            description: "The result updates as you work.",
          },
          {
            title: "Browser-based",
            description: "Text conversion happens directly on your device.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                Build a modern web application
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                buildAModernWebApplication
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is Text Case Conversion?"
        aboutContent={
          <>
            <p>
              Text case describes how letters are capitalized. Different
              contexts use different styles. For example, headings may use title
              case, while JavaScript variables often use camelCase.
            </p>

            <p>
              Naming conventions help make code and written material more
              consistent. A converter provides a quick way to transform existing
              text without manually changing every word.
            </p>

            <p>
              Case conversion does not understand the meaning of every word or
              abbreviation, so specialized names may sometimes need manual
              correction after conversion.
            </p>
          </>
        }
        useCases={[
          {
            title: "Programming",
            description:
              "Convert phrases into common variable and identifier styles.",
          },
          {
            title: "Content editing",
            description: "Adjust headings and text capitalization quickly.",
          },
          {
            title: "URLs and slugs",
            description:
              "Prepare text before generating URL-friendly identifiers.",
          },
          {
            title: "Data cleanup",
            description: "Standardize capitalization across text values.",
          },
        ]}
        faqItems={faqData["text-case-converter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={9}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Enter text here..."
          />

          <div className="grid gap-2 sm:grid-cols-4">
            {[
              ["uppercase", "UPPERCASE"],
              ["lowercase", "lowercase"],
              ["title", "Title Case"],
              ["sentence", "Sentence case"],
              ["camel", "camelCase"],
              ["pascal", "PascalCase"],
              ["snake", "snake_case"],
              ["kebab", "kebab-case"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setMode(value)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                  mode === value
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-semibold">Converted Text</h2>
              <CopyButton text={output} />
            </div>

            <textarea
              value={output}
              readOnly
              rows={9}
              className="w-full rounded-xl bg-slate-950 p-4 text-sm leading-7 text-slate-200 outline-none"
            />
          </div>

          <ClearButton onClick={() => setInput("")} disabled={!input} />
        </div>
      </ToolLayout>
    </>
  );
}
