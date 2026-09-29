import { useState } from "react";
import { Copy, Check } from "lucide-react";
import ToolLayout from "../../components/ToolLayout.jsx";

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export default function Base64Decoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const decode = () => {
    try {
      setOutput(decodeBase64(input.trim()));
      setError("");
    } catch {
      setOutput("");
      setError("The provided value is not valid Base64.");
    }
  };

  const copy = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ToolLayout
      title="Base64 Decoder"
      slug="base64-decoder"
      category="Encoding"
      description="Decode Base64-encoded data back into readable text directly in your browser."
      howToUse={[
        "Paste a Base64-encoded value into the input box.",
        "Click Decode Base64.",
        "Review the decoded text.",
        "Copy the result if needed.",
      ]}
      features={[
        {
          title: "Unicode support",
          description: "Decode UTF-8 text correctly.",
        },
        {
          title: "Error handling",
          description: "Invalid Base64 input is reported clearly.",
        },
        {
          title: "Copy output",
          description: "Copy decoded text quickly.",
        },
        {
          title: "No installation",
          description: "Use the decoder directly from your browser.",
        },
      ]}
      example={{
        input: "SGVsbG8gV29ybGQ=",
        output: "Hello World",
      }}
      whatIs={{
        title: "Base64 decoding",
        paragraphs: [
          "Base64 decoding reverses Base64 encoding and converts the encoded representation back into its original byte or text representation.",
          "It is frequently useful when inspecting API data, tokens, data URLs, and encoded application values.",
        ],
      }}
      useCases={[
        "Inspecting Base64 API values.",
        "Reading encoded text.",
        "Debugging data URLs.",
        "Testing Base64 conversion.",
      ]}
      faqs={[
        {
          question: "What is Base64 decoding?",
          answer:
            "Base64 decoding converts Base64-encoded data back into its original byte representation or text when the encoded data represents text.",
        },
        {
          question: "How do I decode Base64?",
          answer:
            "Paste the Base64 value into the input field and click Decode. The tool will attempt to convert it back into readable text.",
        },
        {
          question: "Why does Base64 decoding sometimes fail?",
          answer:
            "Decoding can fail when the input contains invalid Base64 characters, an incorrect length, or corrupted data.",
        },
        {
          question: "Is Base64 secure?",
          answer:
            "Base64 does not provide encryption or security. Anyone with the encoded value can decode it.",
        },
        {
          question: "Can Base64 contain binary data?",
          answer:
            "Yes. Base64 is commonly used to represent binary data as text, although this tool is primarily intended for text-based conversions.",
        },
      ]}
      relatedTools={[
        {
          name: "Base64 Encoder",
          slug: "base64-encoder",
          description: "Encode text into Base64.",
        },
        {
          name: "URL Decoder",
          slug: "url-decoder",
          description: "Decode URL-encoded text.",
        },
      ]}
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Base64 Input
          </label>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="SGVsbG8gV29ybGQ="
            className="min-h-[220px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-500"
          />
        </div>

        <button
          onClick={decode}
          className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Decode Base64
        </button>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="font-semibold text-slate-900">Decoded Text</label>

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
            placeholder="Decoded text..."
            className="min-h-[180px] w-full rounded-xl border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-emerald-300 outline-none placeholder:text-slate-600"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
