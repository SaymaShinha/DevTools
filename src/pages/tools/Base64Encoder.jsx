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
    "/tools/base64-decoder",
    "/tools/url-encoder",
    "/tools/html-encoder",
  ].includes(tool.path),
);

function encodeBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    if (!input) {
      setOutput("");
      setError("Enter text to encode.");
      return;
    }

    try {
      setOutput(encodeBase64(input));
      setError("");
    } catch {
      setOutput("");
      setError("Unable to encode the supplied text.");
    }
  };

  return (
    <>
      <SEO
        title="Base64 Encoder - Encode Text Online"
        description="Encode text to Base64 online using a browser-based Base64 encoder with Unicode support."
        canonical="/tools/base64-encoder"
      />

      <ToolLayout
        title="Base64 Encoder"
        description="Convert text into Base64 encoding quickly and directly in your browser."
        intro={
          <>
            <p>
              Base64 is a text-based encoding method that represents binary data
              using a limited set of printable characters. This encoder converts
              text into Base64 using UTF-8 encoding.
            </p>

            <p className="mt-5">
              Base64 is useful when data needs to travel through systems that
              expect text rather than arbitrary binary data. It is important to
              remember that Base64 is encoding, not encryption.
            </p>
          </>
        }
        howToUse={[
          "Enter the text you want to encode.",
          "Click Encode to Base64.",
          "Copy the resulting Base64 value.",
          "Use the encoded value where a text-safe representation is required.",
        ]}
        features={[
          {
            title: "Unicode support",
            description:
              "UTF-8 encoding allows many international characters to be processed correctly.",
          },
          {
            title: "Instant conversion",
            description:
              "Convert text without uploading it to a remote service.",
          },
          {
            title: "Copy result",
            description: "Copy the generated Base64 value with one click.",
          },
          {
            title: "Browser-based",
            description: "The conversion runs directly in your browser.",
          },
        ]}
        example={
          <div className="p-5">
            <p className="text-sm font-semibold text-slate-700">Example</p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                Hello World
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                SGVsbG8gV29ybGQ=
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is Base64 Encoding?"
        aboutContent={
          <>
            <p>
              Base64 converts groups of binary data into characters from a
              defined alphabet. This makes the resulting representation easier
              to carry through text-oriented systems.
            </p>

            <p>
              Developers encounter Base64 in APIs, data URLs, email-related
              formats, configuration values, and systems that need to represent
              binary information inside text.
            </p>

            <p>
              Because Base64 is reversible without a secret key, it should not
              be used as a security mechanism for sensitive information.
            </p>
          </>
        }
        useCases={[
          {
            title: "Data URLs",
            description:
              "Represent small binary resources as text within data URLs.",
          },
          {
            title: "API development",
            description:
              "Work with APIs that represent binary values using Base64 strings.",
          },
          {
            title: "Debugging",
            description:
              "Inspect encoded text values while troubleshooting applications.",
          },
          {
            title: "Data transfer",
            description:
              "Represent binary content in systems designed primarily for text.",
          },
        ]}
        faqItems={faqData["base64-encoder"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            rows={9}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Enter text to encode..."
          />

          <button
            type="button"
            onClick={encode}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            <ArrowRightLeft size={17} />
            Encode to Base64
          </button>

          <ClearButton
            onClick={() => {
              setInput("");
              setOutput("");
              setError("");
            }}
            disabled={!input && !output}
          />

          {error && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {output && (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">Encoded Result</h2>
                <CopyButton text={output} />
              </div>

              <textarea
                value={output}
                readOnly
                rows={7}
                className="w-full rounded-xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 outline-none"
              />
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  );
}
