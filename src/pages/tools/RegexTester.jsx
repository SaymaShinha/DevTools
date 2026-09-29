import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const testRegex = () => {
    if (!pattern) {
      setResult({
        error: "Enter a regular expression pattern.",
      });
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);

      const matches = [...text.matchAll(regex)].map((match) => ({
        value: match[0],
        index: match.index,
      }));

      if (!flags.includes("g")) {
        const match = regex.exec(text);

        setResult({
          matches: match ? [{ value: match[0], index: match.index }] : [],
        });

        return;
      }

      setResult({ matches });
    } catch (error) {
      setResult({
        error: error.message,
      });
    }
  };

  return (
    <ToolLayout
      title="Regex Tester"
      slug="regex-tester"
      category="Testing"
      description="Test regular expressions against text and inspect matches directly in your browser."
      howToUse={[
        "Enter a regular expression pattern.",
        "Choose the appropriate regex flags.",
        "Enter the text you want to test.",
        "Click Test Regex to see matching results.",
      ]}
      features={[
        {
          title: "Regex flags",
          description: "Support common JavaScript regular expression flags.",
        },
        {
          title: "Match results",
          description: "View matching values and their positions.",
        },
        {
          title: "Error detection",
          description: "Invalid regular expressions are reported.",
        },
        {
          title: "Browser-based",
          description: "Testing happens locally in your browser.",
        },
      ]}
      example={{
        input: "/\\d+/g against 'Order 123'",
        output: "Match: 123",
      }}
      whatIs={{
        title: "regular expressions",
        paragraphs: [
          "A regular expression, often called regex or regexp, is a pattern used to search, match, and manipulate text.",
          "Regular expressions are supported by many programming languages and are commonly used for validation, searching, parsing, and text processing.",
        ],
      }}
      useCases={[
        "Testing input validation patterns.",
        "Finding patterns in text.",
        "Checking email or identifier patterns.",
        "Developing text-processing code.",
      ]}
      faqs={[
        {
          question: "What is a regular expression?",
          answer:
            "A regular expression, or regex, is a pattern used to search, match, validate, or manipulate text.",
        },
        {
          question: "How do I test a regular expression?",
          answer:
            "Enter your regular expression pattern, select the required flags, provide test text, and run the test to see matching results.",
        },
        {
          question: "What are regex flags?",
          answer:
            "Flags modify how a regular expression behaves. Common flags include g for global matching, i for case-insensitive matching, and m for multiline matching.",
        },
        {
          question: "Why does my regular expression return no matches?",
          answer:
            "The pattern may not match the supplied text, or the pattern, escaping, or flags may not be what you intended. Check the pattern and test text carefully.",
        },
        {
          question: "Is regex the same in every programming language?",
          answer:
            "No. Many programming languages share common regular-expression concepts, but syntax and supported features can differ between regex engines.",
        },
      ]}
      relatedTools={[
        {
          name: "Text Case Converter",
          slug: "text-case-converter",
          description: "Convert text capitalization.",
        },
        {
          name: "Word Counter",
          slug: "word-counter",
          description: "Analyze text statistics.",
        },
      ]}
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
          <div>
            <label className="mb-2 block font-semibold text-slate-900">
              Regular Expression
            </label>

            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="\\d+"
              className="w-full rounded-xl border border-slate-200 bg-slate-950 px-4 py-3 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-900">
              Flags
            </label>

            <input
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="g"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 font-mono text-sm text-slate-900 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Test Text
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to test..."
            className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-white p-5 font-mono text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <button
          onClick={testRegex}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Test Regex
        </button>

        {result?.error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {result.error}
          </div>
        )}

        {result && !result.error && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">
              {result.matches.length}{" "}
              {result.matches.length === 1 ? "match" : "matches"} found
            </h3>

            <div className="mt-4 space-y-2">
              {result.matches.length > 0 ? (
                result.matches.map((match, index) => (
                  <div
                    key={`${match.index}-${index}`}
                    className="flex flex-col gap-1 rounded-lg bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <code className="font-mono text-indigo-700">
                      {match.value}
                    </code>

                    <span className="text-sm text-slate-500">
                      Position: {match.index}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No matches found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
