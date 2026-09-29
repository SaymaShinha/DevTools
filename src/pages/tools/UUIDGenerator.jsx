import { useState } from "react";
import { Fingerprint, RefreshCw } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/timestamp-converter",
    "/tools/json-formatter",
    "/tools/base64-encoder",
  ].includes(tool.path),
);

function generateFallbackUuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);

    const value = char === "x" ? random : (random & 0x3) | 0x8;

    return value.toString(16);
  });
}

function createUuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return generateFallbackUuid();
}

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState([]);

  const generate = () => {
    setUuids((current) => [...current, createUuid()]);
  };

  const generateMany = () => {
    setUuids(Array.from({ length: 5 }, () => createUuid()));
  };

  const output = uuids.join("\n");

  return (
    <>
      <SEO
        title="UUID Generator - Generate UUID v4 Online"
        description="Generate random UUID version 4 identifiers instantly with a free browser-based UUID generator."
        canonical="/tools/uuid-generator"
      />

      <ToolLayout
        title="UUID Generator"
        description="Generate random UUID v4 identifiers directly in your browser."
        intro={
          <>
            <p>
              A UUID, or Universally Unique Identifier, is a 128-bit identifier
              commonly used to identify records, resources, and objects in
              software systems.
            </p>

            <p className="mt-5">
              This tool generates UUID version 4 values using the browser's
              available random UUID capability when supported, with a fallback
              implementation for older environments.
            </p>
          </>
        }
        howToUse={[
          "Click Generate UUID to create a new identifier.",
          "Use Generate 5 UUIDs when you need several values.",
          "Copy the generated identifiers.",
          "Use them in your application where a UUID is appropriate.",
        ]}
        features={[
          {
            title: "UUID v4",
            description: "Generate random version 4 UUID values.",
          },
          {
            title: "Multiple values",
            description: "Generate several UUIDs at once.",
          },
          {
            title: "Browser-based",
            description: "Generate identifiers without a server request.",
          },
          {
            title: "Copy support",
            description: "Copy generated identifiers quickly.",
          },
        ]}
        example={
          <div className="p-5">
            <pre className="rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-200">
              550e8400-e29b-41d4-a716-446655440000
            </pre>
          </div>
        }
        aboutTitle="What Is a UUID?"
        aboutContent={
          <>
            <p>
              UUID stands for Universally Unique Identifier. UUIDs are commonly
              represented as a sequence of hexadecimal characters separated by
              hyphens.
            </p>

            <p>
              Version 4 UUIDs use randomly generated values, with certain bits
              reserved to identify the UUID version and variant.
            </p>

            <p>
              UUIDs are useful when an application needs identifiers that can be
              generated independently without coordinating a central counter. A
              UUID should still be chosen according to the requirements of the
              system where it will be used.
            </p>
          </>
        }
        useCases={[
          {
            title: "Database identifiers",
            description: "Create identifiers for application records.",
          },
          {
            title: "API resources",
            description: "Represent resources with opaque identifiers.",
          },
          {
            title: "Distributed applications",
            description:
              "Generate identifiers without relying on a single central sequence.",
          },
          {
            title: "Testing",
            description:
              "Create sample identifiers for development and testing.",
          },
        ]}
        faqItems={faqData["uuid-generator"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-5">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={generate}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Fingerprint size={17} />
              Generate UUID
            </button>

            <button
              type="button"
              onClick={generateMany}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw size={17} />
              Generate 5
            </button>

            <ClearButton
              onClick={() => setUuids([])}
              disabled={!uuids.length}
            />
          </div>

          <div className="rounded-xl bg-slate-950 p-5">
            {uuids.length ? (
              <pre className="overflow-auto whitespace-pre-wrap font-mono text-sm leading-8 text-slate-200">
                {output}
              </pre>
            ) : (
              <p className="text-sm text-slate-500">
                Your generated UUIDs will appear here.
              </p>
            )}
          </div>

          {output && <CopyButton text={output} label="Copy UUIDs" />}
        </div>
      </ToolLayout>
    </>
  );
}
