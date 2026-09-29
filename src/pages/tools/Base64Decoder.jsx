import { useState } from "react";
import { ArrowRightLeft, AlertCircle } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/base64-encoder",
    "/tools/url-decoder",
    "/tools/html-encoder",
  ].includes(tool.path),
);

function decodeBase64(value) {
  const binary = atob(value.trim());
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

export default function Base64Decoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const decode = () => {
    if (!input.trim()) {
      setOutput("");
      setError("Enter Base64 text to decode.");
      return;
    }

    try {
      setOutput(decodeBase64(input));
      setError("");
    } catch {
      setOutput("");
      setError("The supplied value is not valid Base64 text.");
    }
  };

  return (
    <>
      <SEO
        title="Base64 Decoder - Decode Base64 Online"
        description="Decode Base64 text online using a browser-based Base64 decoder with UTF-8 support."
        canonical="/tools/base64-decoder"
      />

      <ToolLayout
        title="Base64 Decoder"
        description="Decode Base64 text into readable text directly in your browser."
        intro={
          <>
            <p>
              Base64 Decoder reverses Base64 text encoding when the encoded
              value represents text. It is useful when inspecting API values,
              encoded configuration data, and other text representations.
            </p>

            <p className="mt-5">
              Decoding is different from decryption. Base64 does not contain a
              secret key, so decoding a Base64 value does not require a password
              or cryptographic key.
            </p>
          </>
        }
        howToUse={[
          "Paste a Base64 value into the input box.",
          "Click Decode Base64.",
          "Review the decoded text.",
          "Copy the result if you need to use it elsewhere.",
        ]}
        features={[
          {
            title: "UTF-8 text",
            description: "Decode Base64 values representing UTF-8 text.",
          },
          {
            title: "Fast results",
            description: "The conversion happens immediately in the browser.",
          },
          {
            title: "Error handling",
            description:
              "Invalid Base64 input is reported instead of producing misleading output.",
          },
          {
            title: "Copy output",
            description: "Copy decoded text with a single click.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Base64
                </p>
                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                  SGVsbG8gV29ybGQ=
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Decoded
                </p>
                <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                  Hello World
                </div>
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is Base64 Decoding?"
        aboutContent={
          <>
            <p>
              Base64 decoding reverses the representation created by Base64
              encoding. A decoder maps Base64 characters back into bytes and
              interprets those bytes according to the intended character
              encoding.
            </p>

            <p>
              Developers may need to decode Base64 while debugging API
              responses, inspecting encoded values, or working with data URLs
              and application payloads.
            </p>

            <p>
              A decoded Base64 value is not automatically trustworthy. If the
              source is unknown, treat decoded content carefully just as you
              would any other external data.
            </p>
          </>
        }
        useCases={[
          {
            title: "API debugging",
            description:
              "Inspect Base64 values returned by APIs or application services.",
          },
          {
            title: "Configuration",
            description:
              "Decode text-based configuration values that use Base64.",
          },
          {
            title: "Learning",
            description:
              "Experiment with the relationship between encoded and decoded data.",
          },
          {
            title: "Development",
            description:
              "Quickly inspect Base64 values without installing a separate application.",
          },
        ]}
        faqItems={faqData["base64-decoder"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            rows={8}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm leading-7 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Paste Base64 here..."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={decode}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <ArrowRightLeft size={17} />
              Decode Base64
            </button>

            <ClearButton
              onClick={() => {
                setInput("");
                setOutput("");
                setError("");
              }}
              disabled={!input && !output}
            />
          </div>

          {error && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {output && (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">Decoded Result</h2>

                <CopyButton text={output} />
              </div>

              <textarea
                value={output}
                readOnly
                rows={8}
                className="w-full rounded-xl border border-slate-200 bg-slate-950 p-4 text-sm leading-7 text-slate-200 outline-none"
              />
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
