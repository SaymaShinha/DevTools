import { useMemo, useState } from "react";
import { FileText, BarChart3 } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/text-case-converter",
    "/tools/slug-generator",
  ].includes(tool.path),
);

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).filter(Boolean).length
      : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter(Boolean).length
      : 0;

    const readingTime =
      words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <SEO
        title="Word Counter - Count Words & Characters Online"
        description="Count words, characters, sentences, paragraphs, and estimated reading time with this free browser-based word counter."
        canonical="/tools/word-counter"
      />

      <ToolLayout
        title="Word Counter"
        category="Text Tools"
        description="Count words, characters, sentences, paragraphs, and estimated reading time instantly in your browser."
        intro={
          <>
            <p>
              A word counter is a useful writing tool for measuring the length
              of text. It can count words and characters while also providing
              additional statistics such as sentences, paragraphs, and
              estimated reading time.
            </p>

            <p className="mt-5">
              This browser-based word counter processes your text directly on
              your device, making it convenient for essays, articles, blog
              posts, applications, social media content, and other writing
              tasks.
            </p>
          </>
        }
        howToUse={[
          "Type or paste your text into the text editor.",
          "Review the statistics displayed below the editor.",
          "Check your word count, character count, sentences, and paragraphs.",
          "Use the estimated reading time to understand how long the text may take to read.",
          "Use the Clear button when you want to start with an empty editor.",
        ]}
        features={[
          {
            title: "Word count",
            description:
              "Count the number of words in your text based on whitespace-separated text.",
          },
          {
            title: "Character count",
            description:
              "See the total number of characters, including spaces and line breaks.",
          },
          {
            title: "Characters without spaces",
            description:
              "View the number of characters after whitespace is removed.",
          },
          {
            title: "Sentence count",
            description:
              "Estimate the number of sentences using common sentence-ending punctuation.",
          },
          {
            title: "Paragraph count",
            description:
              "Count paragraphs separated by blank lines.",
          },
          {
            title: "Reading time",
            description:
              "Estimate reading time using an average reading speed of approximately 200 words per minute.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Input
                </p>

                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200">
                  Hello world. This is a simple example.
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Result
                </p>

                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200">
                  Words: 7
                  <br />
                  Characters: 40
                </div>
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is a Word Counter?"
        aboutContent={
          <>
            <p>
              A word counter analyzes written text and calculates useful
              statistics such as the number of words and characters. Depending
              on the tool, it may also provide sentence counts, paragraph
              counts, and estimated reading time.
            </p>

            <p>
              Word counting is useful when writing essays, articles, blog
              posts, applications, reports, social media content, and other
              documents that have length requirements.
            </p>

            <p>
              This tool performs its calculations directly in the browser.
              Your text does not need to be uploaded to a server simply to
              calculate these basic statistics.
            </p>
          </>
        }
        useCases={[
          {
            title: "Essays and assignments",
            description:
              "Check whether an essay or assignment meets a required word limit.",
          },
          {
            title: "Blog writing",
            description:
              "Measure article length while drafting blog posts and other long-form content.",
          },
          {
            title: "Content creation",
            description:
              "Check the length of social media posts, descriptions, and other written content.",
          },
          {
            title: "Applications",
            description:
              "Check text length when completing applications with word or character limits.",
          },
          {
            title: "Editing and proofreading",
            description:
              "Quickly measure text length while revising and improving written content.",
          },
          {
            title: "Reading estimates",
            description:
              "Get a simple estimate of how long the text may take to read.",
          },
        ]}
        faqItems={faqData["word-counter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-8">
          {/* Editor */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <FileText size={19} className="text-indigo-600" />

              <h2 className="font-semibold text-slate-900">
                Enter Your Text
              </h2>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
              aria-label="Text to count"
              className="min-h-[300px] w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-5 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                {stats.words} {stats.words === 1 ? "word" : "words"}
              </p>

              <ClearButton
                onClick={clearText}
                disabled={!text}
              />
            </div>
          </section>

          {/* Statistics */}
          <section className="border-t border-slate-200 pt-8">
            <div className="mb-5 flex items-center gap-2">
              <BarChart3 size={19} className="text-indigo-600" />

              <h2 className="font-semibold text-slate-900">
                Text Statistics
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Words", stats.words],
                ["Characters", stats.characters],
                [
                  "Characters without spaces",
                  stats.charactersNoSpaces,
                ],
                ["Sentences", stats.sentences],
                ["Paragraphs", stats.paragraphs],
                [
                  "Estimated reading time",
                  `${stats.readingTime} min`,
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm text-slate-500">
                    {label}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Word count information */}
          <section className="border-t border-slate-200 pt-8">
            <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
              <h3 className="font-semibold text-slate-900">
                How is the word count calculated?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Words are counted by separating non-empty pieces of text
                using whitespace such as spaces, tabs, and line breaks.
                Punctuation attached to a word does not create a separate
                word.
              </p>
            </div>
          </section>
        </div>
      </ToolLayout>
    </>
  );
}
