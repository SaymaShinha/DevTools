import { useMemo, useState } from "react";
import { Clock3, ArrowDown } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/uuid-generator",
    "/tools/json-formatter",
    "/tools/text-case-converter",
  ].includes(tool.path),
);

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [unit, setUnit] = useState("seconds");
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().slice(0, 16),
  );
  const [error, setError] = useState("");

  const convertedDate = useMemo(() => {
    if (!timestamp.trim()) return "";

    const number = Number(timestamp);

    if (!Number.isFinite(number)) return "";

    const milliseconds = unit === "seconds" ? number * 1000 : number;

    const date = new Date(milliseconds);

    if (Number.isNaN(date.getTime())) return "";

    return date.toISOString();
  }, [timestamp, unit]);

  const timestampFromDate = useMemo(() => {
    if (!dateValue) return "";

    const milliseconds = new Date(dateValue).getTime();

    if (Number.isNaN(milliseconds)) return "";

    return Math.floor(milliseconds / 1000);
  }, [dateValue]);

  const convert = () => {
    if (!timestamp.trim()) {
      setError("Enter a timestamp.");
      return;
    }

    const number = Number(timestamp);

    if (!Number.isFinite(number)) {
      setError("Enter a valid numeric timestamp.");
      return;
    }

    setError("");
  };

  return (
    <>
      <SEO
        title="Timestamp Converter - Unix Timestamp Converter"
        description="Convert Unix timestamps to readable dates and convert dates to Unix timestamps with a browser-based timestamp converter."
        canonical="/tools/timestamp-converter"
      />

      <ToolLayout
        title="Timestamp Converter"
        description="Convert Unix timestamps and human-readable dates quickly in your browser."
        intro={
          <>
            <p>
              A Unix timestamp represents a point in time relative to the Unix
              epoch. Depending on the system, timestamps are commonly stored in
              seconds or milliseconds.
            </p>

            <p className="mt-5">
              This converter lets you interpret numeric timestamps as UTC dates
              and also create a Unix timestamp from a selected date and time.
            </p>
          </>
        }
        howToUse={[
          "Enter a Unix timestamp.",
          "Choose whether the value is in seconds or milliseconds.",
          "Review the corresponding UTC date.",
          "Use the date-to-timestamp section when you need to convert a date in the other direction.",
        ]}
        features={[
          {
            title: "Seconds and milliseconds",
            description: "Choose the unit used by your timestamp.",
          },
          {
            title: "UTC output",
            description:
              "Display the corresponding date using ISO/UTC formatting.",
          },
          {
            title: "Date to timestamp",
            description:
              "Convert a selected date and time into a Unix timestamp.",
          },
          {
            title: "Browser-based",
            description: "Conversion takes place directly in the browser.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                1704067200
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                2024-01-01T00:00:00.000Z
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is a Unix Timestamp?"
        aboutContent={
          <>
            <p>
              The Unix epoch begins at January 1, 1970 at 00:00:00 UTC. A Unix
              timestamp represents time as an offset from that reference point.
            </p>

            <p>
              Seconds are common in many APIs and command-line environments,
              while JavaScript's Date API uses milliseconds internally.
              Confusing these units can result in dates that are far in the past
              or future.
            </p>

            <p>
              The timestamp itself represents a point in time; the way that
              point is displayed can depend on the selected time zone.
            </p>
          </>
        }
        useCases={[
          {
            title: "API development",
            description: "Inspect timestamp values returned by APIs.",
          },
          {
            title: "Database debugging",
            description:
              "Interpret stored Unix timestamps during troubleshooting.",
          },
          {
            title: "Log analysis",
            description: "Turn numeric timestamps into human-readable dates.",
          },
          {
            title: "Testing",
            description: "Create timestamps for sample data and test cases.",
          },
        ]}
        faqItems={faqData["timestamp-converter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-8">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Clock3 size={19} className="text-indigo-600" />
              <h2 className="font-semibold text-slate-900">
                Timestamp to Date
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
              <input
                value={timestamp}
                onChange={(e) => {
                  setTimestamp(e.target.value);
                  setError("");
                }}
                className="rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                placeholder="1704067200"
              />

              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-4 text-sm outline-none focus:border-indigo-500"
              >
                <option value="seconds">Seconds</option>
                <option value="milliseconds">Milliseconds</option>
              </select>
            </div>

            <button
              type="button"
              onClick={convert}
              className="mt-4 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Convert
            </button>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

            {convertedDate && (
              <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                <code className="break-all text-sm text-slate-200">
                  {convertedDate}
                </code>

                <CopyButton text={convertedDate} />
              </div>
            )}
          </section>

          <section className="border-t border-slate-200 pt-8">
            <div className="mb-4 flex items-center gap-2">
              <ArrowDown size={19} className="text-indigo-600" />
              <h2 className="font-semibold text-slate-900">
                Date to Unix Timestamp
              </h2>
            </div>

            <input
              type="datetime-local"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm outline-none focus:border-indigo-500"
            />

            <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
              <code className="text-sm text-slate-200">
                {timestampFromDate}
              </code>

              <CopyButton text={String(timestampFromDate)} />
            </div>
          </section>

          <ClearButton
            onClick={() => {
              setTimestamp("");
              setError("");
            }}
            disabled={!timestamp}
          />
        </div>
      </ToolLayout>
    </>
  );
}
