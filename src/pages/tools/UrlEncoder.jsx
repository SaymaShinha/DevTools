import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    setOutput(encodeURIComponent(input));
  };

  return (
    <ToolLayout
      title="URL Encoder"
      slug="url-encoder"
      category="URL"
      description="Encode text and URL components safely for use in web addresses and query parameters."
      howToUse={[
        "Enter the text or URL component you want to encode.",
        "Click Encode URL.",
        "Copy the encoded result.",
      ]}
      features={[
        {
          title: "Standard URL encoding",
          description: "Uses the browser's encodeURIComponent function.",
        },
        {
          title: "Special characters",
          description: "Converts characters that need URL encoding.",
        },
        {
          title: "Instant results",
          description: "Generate encoded output immediately.",
        },
        {
          title: "Browser-based",
          description: "No server is required for conversion.",
        },
      ]}
      example={{
        input: "hello world & test",
        output: "hello%20world%20%26%20test",
      }}
      whatIs={{
        title: "URL encoding",
        paragraphs: [
          "URL encoding converts characters into a representation that can safely be used within URLs.",
          "Characters such as spaces, ampersands, and other reserved characters may need encoding depending on where they are used.",
        ],
      }}
      useCases={[
        "Encoding query parameter values.",
        "Preparing text for web URLs.",
        "Working with API query strings.",
        "Testing URL-safe representations.",
      ]}
      faqs={[
        {
          question: "What is URL encoding?",
          answer:
            "URL encoding converts characters that may have special meanings in URLs into a percent-encoded representation.",
        },
        {
          question: "Why do URLs need encoding?",
          answer:
            "Some characters have special meanings in URLs or cannot safely appear in certain URL components. Encoding makes those characters safe to transmit.",
        },
        {
          question: "How do I encode a URL value?",
          answer:
            "Enter the text or URL component you want to encode and click Encode. The tool uses standard browser URL encoding.",
        },
        {
          question: "Does URL encoding encrypt data?",
          answer:
            "No. URL encoding is not encryption. Encoded values can be decoded easily.",
        },
        {
          question: "What is percent encoding?",
          answer:
            "Percent encoding represents certain characters using a percent sign followed by hexadecimal digits, such as %20 for a space.",
        },
      ]}
      relatedTools={[
        {
          name: "URL Decoder",
          slug: "url-decoder",
          description: "Decode percent-encoded URL text.",
        },
        {
          name: "HTML Encoder",
          slug: "html-encoder",
          description: "Encode HTML special characters.",
        },
      ]}
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode..."
          className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        <button
          onClick={encode}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Encode URL
        </button>

        <textarea
          readOnly
          value={output}
          placeholder="Encoded result..."
          className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-emerald-300 outline-none"
        />
      </div>
    </ToolLayout>
  );
}
