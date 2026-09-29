import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items = [] }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
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
              <div className="px-5 pb-5">
                <p className="leading-7 text-slate-600">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
