import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function UrlDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError("");
    } catch {
      setOutput("");
      setError("The provided text contains an invalid URL encoding.");
    }
  };

  return (
    <ToolLayout
      title="URL Decoder"
      slug="url-decoder"
      category="URL"
      description="Decode percent-encoded URL text into readable characters directly in your browser."
      howToUse={[
        "Paste URL-encoded text into the input box.",
        "Click Decode URL.",
        "Review the decoded value.",
      ]}
      features={[
        {
          title: "Percent decoding",
          description: "Decode percent-encoded URL components.",
        },
        {
          title: "Error handling",
          description: "Invalid encoding is reported clearly.",
        },
        {
          title: "Fast conversion",
          description: "Decode text instantly.",
        },
        {
          title: "No installation",
          description: "Runs directly in your browser.",
        },
      ]}
      example={{
        input: "hello%20world%20%26%20test",
        output: "hello world & test",
      }}
      whatIs={{
        title: "URL decoding",
        paragraphs: [
          "URL decoding reverses percent encoding and converts encoded characters back into their readable representation.",
          "It is commonly used when inspecting query strings, links, API requests, and web application data.",
        ],
      }}
      useCases={[
        "Reading encoded query parameters.",
        "Debugging API requests.",
        "Inspecting URL strings.",
        "Converting percent-encoded text back to readable text.",
      ]}
      faqs={[
        {
          question: "What is URL decoding?",
          answer:
            "URL decoding converts percent-encoded characters back into their readable representation.",
        },
        {
          question: "How do I decode a URL?",
          answer:
            "Paste the encoded URL or URL component into the input field and click Decode.",
        },
        {
          question: "What does %20 mean in a URL?",
          answer:
            "%20 is the percent-encoded representation of a space character.",
        },
        {
          question: "Does URL decoding change the original website?",
          answer:
            "No. Decoding only converts the text into a more readable representation. It does not modify the original URL or website.",
        },
        {
          question: "Can every URL be decoded?",
          answer:
            "A URL can be decoded when its encoded portions use valid percent-encoding. Invalid or malformed sequences may produce an error.",
        },
      ]}
      relatedTools={[
        {
          name: "URL Encoder",
          slug: "url-encoder",
          description: "Encode text for URL components.",
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
          placeholder="hello%20world"
          className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        <button
          onClick={decode}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Decode URL
        </button>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <textarea
          readOnly
          value={output}
          placeholder="Decoded result..."
          className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-emerald-300 outline-none"
        />
      </div>
    </ToolLayout>
  );
}
