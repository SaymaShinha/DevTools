import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [result, setResult] = useState(null);

  const convertTimestamp = () => {
    const value = Number(timestamp);

    if (!Number.isFinite(value)) {
      setResult({
        error: "Enter a valid Unix timestamp.",
      });
      return;
    }

    const milliseconds = Math.abs(value) < 100000000000 ? value * 1000 : value;

    const date = new Date(milliseconds);

    if (Number.isNaN(date.getTime())) {
      setResult({ error: "Invalid timestamp." });
      return;
    }

    setResult({
      local: date.toString(),
      utc: date.toUTCString(),
      iso: date.toISOString(),
    });
  };

  const convertDate = () => {
    if (!dateValue) return;

    const date = new Date(dateValue);

    setResult({
      seconds: Math.floor(date.getTime() / 1000),
      milliseconds: date.getTime(),
    });
  };

  return (
    <ToolLayout
      title="Timestamp Converter"
      slug="timestamp-converter"
      category="Developer Utilities"
      description="Convert Unix timestamps to readable dates and convert dates back to Unix timestamps."
      howToUse={[
        "Enter a Unix timestamp to convert it into a date.",
        "The tool detects common seconds and milliseconds timestamps.",
        "Alternatively select a date and convert it into Unix time.",
      ]}
      features={[
        {
          title: "Seconds and milliseconds",
          description: "Supports common Unix timestamp formats.",
        },
        {
          title: "Local time",
          description: "View the timestamp using your local timezone.",
        },
        {
          title: "UTC",
          description: "Display the equivalent UTC date.",
        },
        {
          title: "ISO format",
          description: "Get an ISO 8601 representation.",
        },
      ]}
      example={{
        input: "0",
        output: "Thu, 01 Jan 1970 00:00:00 GMT",
      }}
      whatIs={{
        title: "Unix timestamps",
        paragraphs: [
          "A Unix timestamp represents a point in time as the number of seconds or milliseconds relative to January 1, 1970 UTC.",
          "Unix timestamps are widely used by programming languages, databases, APIs, and operating systems.",
        ],
      }}
      useCases={[
        "Debugging API timestamps.",
        "Converting database time values.",
        "Testing date-based application logic.",
        "Reading Unix timestamps in logs.",
      ]}
      faqs={[
        {
          question: "What is a Unix timestamp?",
          answer:
            "A Unix timestamp represents a point in time as the number of seconds or milliseconds elapsed since January 1, 1970, UTC.",
        },
        {
          question: "What is the difference between seconds and milliseconds?",
          answer:
            "A timestamp in seconds uses a smaller number, while a timestamp in milliseconds includes three additional digits representing thousandths of a second.",
        },
        {
          question: "How do I convert a timestamp to a date?",
          answer:
            "Enter the timestamp, select the appropriate unit, and use the converter to produce a human-readable date and time.",
        },
        {
          question: "Are Unix timestamps based on UTC?",
          answer:
            "The Unix time reference point is defined in UTC. Your browser can display the resulting date in your local timezone as well.",
        },
        {
          question: "Where are timestamps used?",
          answer:
            "Timestamps are widely used in databases, APIs, logs, operating systems, applications, and distributed systems.",
        },
      ]}
      relatedTools={[
        {
          name: "UUID Generator",
          slug: "uuid-generator",
          description: "Generate random UUID identifiers.",
        },
        {
          name: "JSON Formatter",
          slug: "json-formatter",
          description: "Format JSON data.",
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Unix Timestamp
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="1759104000"
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            <button
              onClick={convertTimestamp}
              className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Convert
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <label className="mb-2 block font-semibold text-slate-900">
            Date and Time
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="datetime-local"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <button
              onClick={convertDate}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Convert to Timestamp
            </button>
          </div>
        </div>

        {result && (
          <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm leading-8 text-slate-200">
            {result.error && <p className="text-red-400">{result.error}</p>}

            {result.local && <p>Local: {result.local}</p>}
            {result.utc && <p>UTC: {result.utc}</p>}
            {result.iso && <p>ISO: {result.iso}</p>}
            {result.seconds !== undefined && <p>Seconds: {result.seconds}</p>}
            {result.milliseconds !== undefined && (
              <p>Milliseconds: {result.milliseconds}</p>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
