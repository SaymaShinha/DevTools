import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

function words(text) {
  return text
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .filter(Boolean);
}

function titleCase(text) {
  return words(text)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function sentenceCase(text) {
  return text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
}

function camelCase(text) {
  const list = words(text);

  return list
    .map((word, index) => {
      const lower = word.toLowerCase();

      return index === 0
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

function pascalCase(text) {
  return words(text)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("upper");

  const convert = () => {
    switch (mode) {
      case "lower":
        return input.toLowerCase();

      case "title":
        return titleCase(input);

      case "sentence":
        return sentenceCase(input);

      case "camel":
        return camelCase(input);

      case "pascal":
        return pascalCase(input);

      case "snake":
        return words(input)
          .map((x) => x.toLowerCase())
          .join("_");

      case "kebab":
        return words(input)
          .map((x) => x.toLowerCase())
          .join("-");

      default:
        return input.toUpperCase();
    }
  };

  const output = convert();

  return (
    <ToolLayout
      title="Text Case Converter"
      slug="text-case-converter"
      category="Text"
      description="Convert text between uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case."
      howToUse={[
        "Enter or paste your text.",
        "Choose the desired case format.",
        "Copy or use the converted result.",
      ]}
      features={[
        {
          title: "Multiple case styles",
          description: "Convert between common writing and programming cases.",
        },
        {
          title: "Programming-friendly",
          description:
            "Includes camelCase, PascalCase, snake_case, and kebab-case.",
        },
        {
          title: "Instant conversion",
          description: "Results update immediately.",
        },
        {
          title: "Browser-based",
          description: "Text processing happens locally in the browser.",
        },
      ]}
      example={{
        input: "hello developer tools",
        output: "helloDeveloperTools",
      }}
      whatIs={{
        title: "text case conversion",
        paragraphs: [
          "Text case conversion changes the capitalization or formatting style of written text.",
          "Different case styles are useful for different situations. For example, title case can be used for headings while camelCase and snake_case are common in programming.",
        ],
      }}
      useCases={[
        "Preparing programming variable names.",
        "Formatting headings and titles.",
        "Cleaning copied text.",
        "Converting text between programming naming conventions.",
      ]}
      faqs={[
        {
          question: "What is a Text Case Converter?",
          answer:
            "A Text Case Converter changes text between different capitalization formats such as uppercase, lowercase, title case, camel case, and snake case.",
        },
        {
          question: "What text cases are supported?",
          answer:
            "Depending on the available options, you can convert text to uppercase, lowercase, title case, sentence case, camel case, Pascal case, snake case, and kebab case.",
        },
        {
          question: "Can I convert an entire paragraph?",
          answer:
            "Yes. You can paste a paragraph or larger block of text and convert its capitalization.",
        },
        {
          question: "Does the converter save my text?",
          answer:
            "No. The conversion can be performed directly in your browser without storing your text on a server.",
        },
        {
          question: "What is camelCase?",
          answer:
            "camelCase combines words without spaces and starts the first word with lowercase while capitalizing the beginning of subsequent words.",
        },
      ]}
      relatedTools={[
        {
          name: "Word Counter",
          slug: "word-counter",
          description: "Count words and characters.",
        },
        {
          name: "Slug Generator",
          slug: "slug-generator",
          description: "Create URL-friendly slugs.",
        },
      ]}
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text..."
          className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        <div className="flex flex-wrap gap-2">
          {[
            ["upper", "UPPERCASE"],
            ["lower", "lowercase"],
            ["title", "Title Case"],
            ["sentence", "Sentence case"],
            ["camel", "camelCase"],
            ["pascal", "PascalCase"],
            ["snake", "snake_case"],
            ["kebab", "kebab-case"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setMode(value)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                mode === value
                  ? "bg-indigo-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <textarea
          readOnly
          value={output}
          placeholder="Converted text..."
          className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-900 outline-none"
        />
      </div>
    </ToolLayout>
  );
}
