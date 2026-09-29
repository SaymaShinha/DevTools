import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items = [] }) {
  const [open, setOpen] = useState(null);

  if (!items.length) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            className="border-b border-slate-200 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6"
            >
              <span className="font-semibold text-slate-900">
                {item.question}
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 text-slate-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6">
                <p className="max-w-3xl text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
