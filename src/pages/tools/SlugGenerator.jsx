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
          question: "What is a URL slug?",
          answer:
            "A URL slug is the readable part of a web address that identifies a page, usually using lowercase words separated by hyphens.",
        },
        {
          question: "How does a slug generator work?",
          answer:
            "It converts a title or phrase into a URL-friendly form by normalizing text, removing unsuitable characters, and replacing spaces with hyphens.",
        },
        {
          question: "Why are URL slugs useful?",
          answer:
            "Readable slugs make URLs easier for people to understand and can help communicate the topic of a page.",
        },
        {
          question: "Should a slug contain spaces?",
          answer: "Spaces are generally replaced with hyphens in URL slugs.",
        },
        {
          question: "Can I use the generated slug for a blog post?",
          answer:
            "Yes. The generated value can be used as a starting point for a blog post, product page, documentation page, or other web resource.",
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
