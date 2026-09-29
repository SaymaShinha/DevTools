import { useMemo, useState } from "react";
import { Wand2 } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/text-case-converter",
    "/tools/url-encoder",
    "/tools/word-counter",
  ].includes(tool.path),
);

function createSlug(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function SlugGenerator() {
  const [input, setInput] = useState("");

  const output = useMemo(() => createSlug(input), [input]);

  return (
    <>
      <SEO
        title="Slug Generator - Create URL Slugs Online"
        description="Generate clean, readable URL slugs from titles and text with a free browser-based slug generator."
        canonical="/tools/slug-generator"
      />

      <ToolLayout
        title="Slug Generator"
        description="Create clean, readable, URL-friendly slugs from titles and phrases."
        intro={
          <>
            <p>
              A URL slug is the readable portion of a web address that often
              identifies a specific page. This generator turns titles and
              phrases into lowercase, hyphen-separated slugs.
            </p>

            <p className="mt-5">
              The tool removes unnecessary punctuation and converts whitespace
              into hyphens, making the result convenient for websites,
              documentation systems, and content management applications.
            </p>
          </>
        }
        howToUse={[
          "Enter a page title or phrase.",
          "Review the generated slug.",
          "Copy the result.",
          "Use the slug as the appropriate part of a URL.",
        ]}
        features={[
          {
            title: "Lowercase output",
            description: "Creates consistent lowercase slugs.",
          },
          {
            title: "Hyphen separators",
            description: "Converts spaces and separators into hyphens.",
          },
          {
            title: "Punctuation cleanup",
            description:
              "Removes unnecessary punctuation from the generated slug.",
          },
          {
            title: "Live generation",
            description: "The slug updates as you edit the title.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Title
                </p>
                <p className="mt-2 text-slate-900">
                  How to Build a Modern React Website
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Slug
                </p>
                <p className="mt-2 font-mono text-sm text-indigo-600">
                  how-to-build-a-modern-react-website
                </p>
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is a URL Slug?"
        aboutContent={
          <>
            <p>
              A URL slug is typically the final descriptive segment of a web
              address. For example, the phrase
              <code className="mx-1">json-formatter</code> can identify a page
              dedicated to a JSON formatting tool.
            </p>

            <p>
              Readable slugs help people understand what a URL represents before
              visiting it. Consistent slugs can also make website structures
              easier to maintain.
            </p>

            <p>
              A slug generator automates the repetitive cleanup involved in
              converting titles into URL-friendly text.
            </p>
          </>
        }
        useCases={[
          {
            title: "Blog posts",
            description: "Convert article titles into readable page URLs.",
          },
          {
            title: "Documentation",
            description:
              "Create consistent paths for technical documentation pages.",
          },
          {
            title: "CMS content",
            description: "Prepare URL identifiers from content titles.",
          },
          {
            title: "Web development",
            description:
              "Quickly test how titles could be represented as slugs.",
          },
        ]}
        faqItems={faqData["slug-generator"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Enter a page title..."
          />

          <div className="flex items-center gap-2 text-sm font-medium text-indigo-600">
            <Wand2 size={17} />
            Generated slug
          </div>

          <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200">
            {output || "your-generated-slug"}
          </div>

          <div className="flex flex-wrap gap-3">
            <CopyButton text={output} label="Copy Slug" />

            <ClearButton onClick={() => setInput("")} disabled={!input} />
          </div>
        </div>
      </ToolLayout>
    </>
  );
}
