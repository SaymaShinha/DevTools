import { useState } from "react";
import { Copy, Check } from "lucide-react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function HtmlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    const element = document.createElement("textarea");
    element.textContent = input;
    setOutput(element.innerHTML);
  };

  const copy = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolLayout
      title="HTML Encoder"
      slug="html-encoder"
      category="HTML"
      description="Encode HTML special characters into safe HTML entities using a simple browser-based tool."
      howToUse={[
        "Paste HTML or text into the input field.",
        "Click Encode HTML.",
        "Copy the encoded output.",
      ]}
      features={[
        {
          title: "Special character encoding",
          description: "Encode characters such as <, >, and &.",
        },
        {
          title: "Instant conversion",
          description: "Generate HTML entities immediately.",
        },
        {
          title: "Copy output",
          description: "Copy encoded content with one click.",
        },
        {
          title: "Browser-based",
          description: "The conversion takes place locally.",
        },
      ]}
      example={{
        input: '<div>Hello & "World"</div>',
        output: "&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;",
      }}
      whatIs={{
        title: "HTML encoding",
        paragraphs: [
          "HTML encoding converts special characters into HTML entities so they can be represented safely as text within HTML documents.",
          "Characters such as less-than and greater-than signs have special meanings in HTML and may need to be encoded when displayed as text.",
        ],
      }}
      useCases={[
        "Displaying HTML code as text.",
        "Preparing content for HTML documents.",
        "Avoiding conflicts with HTML markup.",
        "Creating documentation containing HTML examples.",
      ]}
      faqs={[
        {
          question: "What is HTML encoding?",
          answer:
            "HTML encoding converts special characters into HTML entities so they can be displayed as text instead of being interpreted as HTML markup.",
        },
        {
          question: "Why should HTML characters be encoded?",
          answer:
            "Characters such as < and > have special meanings in HTML. Encoding them allows them to be displayed safely as ordinary text.",
        },
        {
          question: "What does &lt; represent?",
          answer:
            "&lt; is the HTML entity representation of the less-than character (<).",
        },
        {
          question: "Does HTML encoding make content secure?",
          answer:
            "HTML encoding is an important technique for safely displaying untrusted text in HTML, but complete application security requires appropriate handling throughout the application.",
        },
        {
          question: "Can I encode HTML code as plain text?",
          answer:
            "Yes. HTML encoding converts markup characters into entities so that the code can be displayed as text.",
        },
      ]}
      relatedTools={[
        {
          name: "HTML Formatter",
          slug: "html-formatter",
          description: "Format HTML into a readable structure.",
        },
        {
          name: "URL Encoder",
          slug: "url-encoder",
          description: "Encode URL components.",
        },
      ]}
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<div>Hello & "World"</div>'
          className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        <button
          onClick={encode}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Encode HTML
        </button>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-semibold text-slate-900">Encoded HTML</label>

            <button
              onClick={copy}
              disabled={!output}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-40"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <textarea
            readOnly
            value={output}
            placeholder="Encoded result..."
            className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-emerald-300 outline-none"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
