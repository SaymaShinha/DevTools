import { useState } from "react";
import { Copy, Check, Trash2 } from "lucide-react";
import ToolLayout from "../../components/ToolLayout.jsx";

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);

  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(encodeBase64(input));
    } catch {
      setOutput("Unable to encode the provided text.");
    }
  };

  const copy = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolLayout
      title="Base64 Encoder"
      slug="base64-encoder"
      category="Encoding"
      description="Encode text into Base64 format quickly using a browser-based Base64 encoder."
      howToUse={[
        "Enter or paste the text you want to encode.",
        "Click Encode to Base64.",
        "Copy the resulting Base64 string.",
      ]}
      features={[
        {
          title: "Unicode support",
          description: "Encode regular text and Unicode characters.",
        },
        {
          title: "Instant conversion",
          description: "Generate Base64 output immediately.",
        },
        {
          title: "Copy result",
          description: "Copy the encoded value with one click.",
        },
        {
          title: "Browser-based",
          description: "Encoding is performed directly in your browser.",
        },
      ]}
      example={{
        input: "Hello World",
        output: "SGVsbG8gV29ybGQ=",
      }}
      whatIs={{
        title: "Base64 encoding",
        paragraphs: [
          "Base64 is an encoding method that represents binary or text data using a limited set of ASCII characters.",
          "It is commonly used when data needs to be represented as text, such as in email content, data URLs, tokens, and some API payloads.",
          "Base64 is an encoding method, not encryption. Encoded information can be decoded back into its original form.",
        ],
      }}
      useCases={[
        "Encoding text for APIs.",
        "Creating data URLs.",
        "Representing binary information as text.",
        "Working with email and MIME data.",
      ]}
      faqs={[
        {
          question: "What is Base64 encoding?",
          answer:
            "Base64 is an encoding method that represents binary or text data using a limited set of ASCII characters.",
        },
        {
          question: "How do I encode text to Base64?",
          answer:
            "Enter your text into the input field and click Encode. The tool converts the text into its Base64 representation.",
        },
        {
          question: "Is Base64 encryption?",
          answer:
            "No. Base64 is encoding, not encryption. Encoded data can be decoded without a secret key.",
        },
        {
          question: "Can I encode Unicode text?",
          answer:
            "Yes. A modern browser-based Base64 encoder can convert Unicode text to UTF-8 bytes before producing the Base64 result.",
        },
        {
          question: "Is Base64 encoding reversible?",
          answer:
            "Yes. Base64 encoded data can normally be decoded back to its original bytes or text.",
        },
      ]}
      relatedTools={[
        {
          name: "Base64 Decoder",
          slug: "base64-decoder",
          description: "Decode Base64 back into text.",
        },
        {
          name: "URL Encoder",
          slug: "url-encoder",
          description: "Encode text for use in URLs.",
        },
      ]}
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Text
          </label>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode..."
            className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
          />
        </div>

        <button
          onClick={encode}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Encode to Base64
        </button>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-semibold text-slate-900">
              Base64 Output
            </label>

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
            className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-emerald-300 outline-none placeholder:text-slate-600"
          />
        </div>

        <button
          onClick={clear}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600"
        >
          <Trash2 size={16} />
          Clear
        </button>
      </div>
    </ToolLayout>
  );
}
