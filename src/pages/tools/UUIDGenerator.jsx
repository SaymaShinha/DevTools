import { useState } from "react";
import ToolLayout from "../../components/ToolLayout";
import CopyButton from "../../components/CopyButton";

export default function UUIDGenerator() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState([]);

  const generate = () => {
    const amount = Math.min(Math.max(Number(count) || 1, 1), 100);

    setUuids(Array.from({ length: amount }, () => crypto.randomUUID()));
  };

  const output = uuids.join("\n");

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate random UUIDs instantly using your browser."
      canonical="https://yourdomain.com/tools/uuid-generator"
      faqs={[
        {
          question: "What is a UUID?",
          answer:
            "A UUID, or Universally Unique Identifier, is a 128-bit identifier commonly used to identify records, resources, objects, and other entities.",
        },
        {
          question: "What UUID version does this tool generate?",
          answer:
            "This tool generates UUID version 4 identifiers using random values provided by the browser's cryptographic random number generator.",
        },
        {
          question: "Are UUIDs guaranteed to be unique?",
          answer:
            "UUIDs are designed to make collisions extremely unlikely, but no finite identifier system can provide an absolute mathematical guarantee of uniqueness.",
        },
        {
          question: "Where are UUIDs commonly used?",
          answer:
            "UUIDs are commonly used for database records, API resources, distributed systems, session identifiers, and application objects.",
        },
        {
          question: "Can I generate multiple UUIDs?",
          answer:
            "Yes. The generator can create new UUIDs whenever you need additional identifiers.",
        },
      ]}
    >
      <div className="max-w-xs">
        <label className="mb-2 block text-sm font-semibold">
          Number of UUIDs
        </label>

        <input
          type="number"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mt-5 flex gap-3">
        <button onClick={generate} className="btn-primary">
          Generate UUID
        </button>

        <CopyButton text={output} />
      </div>

      <textarea
        value={output}
        readOnly
        className="tool-output mt-6 min-h-[250px]"
        placeholder="Generated UUIDs will appear here..."
      />
    </ToolLayout>
  );
}
