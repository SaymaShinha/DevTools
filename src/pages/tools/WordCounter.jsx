import { useMemo, useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter(Boolean).length
      : 0;

    const readingTime = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  return (
    <ToolLayout
      title="Word Counter"
      slug="word-counter"
      category="Text"
      description="Count words, characters, sentences, paragraphs, and estimated reading time instantly."
      howToUse={[
        "Paste or type your text into the editor.",
        "Review the live statistics.",
        "Use the word and character counts for your writing requirements.",
      ]}
      features={[
        {
          title: "Word count",
          description: "Count words in your text.",
        },
        {
          title: "Character count",
          description: "See characters with and without spaces.",
        },
        {
          title: "Sentence count",
          description: "Estimate the number of sentences.",
        },
        {
          title: "Reading time",
          description: "Estimate reading time based on word count.",
        },
      ]}
      example={{
        input: "Hello world. This is a simple example.",
        output: "Words: 7 | Characters: 40",
      }}
      whatIs={{
        title: "word counting",
        paragraphs: [
          "A word counter analyzes written text and provides statistics such as word count and character count.",
          "Word counts are useful for essays, articles, blog posts, social media content, applications, and documents with length requirements.",
        ],
      }}
      useCases={[
        "Checking essay length.",
        "Writing blog posts.",
        "Preparing social media content.",
        "Meeting application or assignment word limits.",
      ]}
      faqs={[
        {
          question: "What does a Word Counter measure?",
          answer:
            "A Word Counter can measure the number of words and characters in your text and may also provide additional statistics such as sentences, paragraphs, and estimated reading time.",
        },
        {
          question: "How are words counted?",
          answer:
            "Words are generally identified by separating non-empty pieces of text using whitespace such as spaces, tabs, and line breaks.",
        },
        {
          question: "Does the tool count spaces?",
          answer:
            "The character statistics can show both total characters and characters excluding whitespace, allowing you to see the difference.",
        },
        {
          question: "Can I use the tool for essays?",
          answer:
            "Yes. It can help you check the approximate word count of essays, articles, assignments, and other text.",
        },
        {
          question: "Is my text uploaded?",
          answer:
            "No. The counter can process your text directly in your browser.",
        },
      ]}
      relatedTools={[
        {
          name: "Text Case Converter",
          slug: "text-case-converter",
          description: "Convert text capitalization.",
        },
        {
          name: "Slug Generator",
          slug: "slug-generator",
          description: "Generate URL-friendly text.",
        },
      ]}
    >
      <div className="space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text..."
          className="min-h-[300px] w-full rounded-xl border border-slate-200 bg-white p-5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Words", stats.words],
            ["Characters", stats.characters],
            ["Characters without spaces", stats.charactersNoSpaces],
            ["Sentences", stats.sentences],
            ["Paragraphs", stats.paragraphs],
            ["Reading time", `${stats.readingTime} min`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}
