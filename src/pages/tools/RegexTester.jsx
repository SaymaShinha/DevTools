import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Regex } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/text-case-converter",
    "/tools/word-counter",
    "/tools/json-validator",
  ].includes(tool.path),
);

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const result = useMemo(() => {
    if (!pattern) {
      return {
        status: "empty",
        matches: [],
        error: "",
      };
    }

    try {
      const regex = new RegExp(pattern, flags);
      const matches = [];

      if (regex.global) {
        for (const match of text.matchAll(regex)) {
          matches.push({
            value: match[0],
            index: match.index,
          });

          if (matches.length >= 500) {
            break;
          }
        }
      } else {
        const match = regex.exec(text);

        if (match) {
          matches.push({
            value: match[0],
            index: match.index,
          });
        }
      }

      return {
        status: "valid",
        matches,
        error: "",
      };
    } catch (error) {
      return {
        status: "invalid",
        matches: [],
        error: error.message || "Invalid regular expression.",
      };
    }
  }, [pattern, flags, text]);

  return (
    <>
      <SEO
        title="Regex Tester - Test Regular Expressions Online"
        description="Test JavaScript regular expressions against sample text with matches, indexes, flags, and error feedback."
        canonical="/tools/regex-tester"
      />

      <ToolLayout
        title="Regex Tester"
        description="Test regular expressions against sample text and inspect matching results directly in your browser."
        intro={
          <>
            <p>
              Regular expressions, commonly called regex, are patterns used to
              search and match text. They are useful for tasks such as finding
              repeated structures, validating formatted values, and extracting
              information from strings.
            </p>

            <p className="mt-5">
              This tester uses JavaScript's regular expression engine, so the
              pattern and flags follow JavaScript regex behavior.
            </p>
          </>
        }
        howToUse={[
          "Enter a regular expression pattern without surrounding slashes.",
          "Choose the JavaScript flags you need.",
          "Enter sample text to test.",
          "Review the matches and their positions.",
        ]}
        features={[
          {
            title: "JavaScript regex",
            description:
              "Test patterns using the browser's JavaScript RegExp engine.",
          },
          {
            title: "Flags",
            description:
              "Test patterns with flags such as global and case-insensitive matching.",
          },
          {
            title: "Match positions",
            description: "See where each match begins in the test text.",
          },
          {
            title: "Syntax feedback",
            description:
              "Invalid patterns are reported instead of being executed.",
          },
        ]}
        example={
          <div className="p-5">
            <p className="text-sm font-semibold text-slate-700">
              Example pattern
            </p>

            <div className="mt-3 rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-200">
              \d+
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              The pattern <code>\d+</code> commonly matches one or more digit
              characters. For example, it can find <code>123</code> inside a
              sentence containing a number.
            </p>
          </div>
        }
        aboutTitle="What Is a Regular Expression?"
        aboutContent={
          <>
            <p>
              A regular expression describes a pattern that a text-processing
              engine can search for. Patterns can contain literal characters,
              character classes, quantifiers, groups, anchors, and other
              constructs.
            </p>

            <p>
              JavaScript provides regular expressions through the
              <code className="mx-1">RegExp</code> object and regular expression
              literals. Flags modify matching behavior; for example, the global
              flag allows repeated matches.
            </p>

            <p>
              Regex is powerful, but complicated patterns can become difficult
              to maintain. For important validation tasks, regex is often best
              combined with ordinary application-level validation.
            </p>
          </>
        }
        useCases={[
          {
            title: "Form validation",
            description: "Experiment with patterns for structured text fields.",
          },
          {
            title: "Text extraction",
            description: "Find repeated structures inside sample text.",
          },
          {
            title: "Log analysis",
            description: "Test patterns for identifying useful log entries.",
          },
          {
            title: "Learning regex",
            description:
              "Experiment with patterns and immediately inspect matches.",
          },
        ]}
        faqItems={faqData["regex-tester"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-[1fr_180px]">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Regular Expression
              </label>

              <input
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                placeholder="\d+"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Flags
              </label>

              <input
                value={flags}
                onChange={(e) => setFlags(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                placeholder="g"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Test Text
            </label>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="Enter text to test against your pattern..."
            />
          </div>

          {result.status === "valid" && pattern && (
            <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              <CheckCircle2 size={18} />
              Valid regular expression
            </div>
          )}

          {result.status === "invalid" && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle size={18} />
              <span>{result.error}</span>
            </div>
          )}

          {result.status === "valid" && pattern && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2">
                <Regex size={18} className="text-indigo-600" />
                <h2 className="font-semibold text-slate-900">
                  Matches: {result.matches.length}
                </h2>
              </div>

              {result.matches.length > 0 ? (
                <div className="mt-4 space-y-2">
                  {result.matches.map((match, index) => (
                    <div
                      key={`${match.index}-${index}`}
                      className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <code className="break-all text-sm text-slate-900">
                        {match.value || "(empty match)"}
                      </code>

                      <span className="text-xs text-slate-500">
                        Index: {match.index}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-600">
                  No matches found in the supplied text.
                </p>
              )}
            </div>
          )}

          <ClearButton
            onClick={() => {
              setPattern("");
              setFlags("g");
              setText("");
            }}
            disabled={!pattern && !text}
          />
        </div>
      </ToolLayout>
    </>
  );
}
