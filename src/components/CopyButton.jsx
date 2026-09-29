import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  text = "",
  label = "Copy",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {copied ? (
        <>
          <Check size={16} />
          Copied
        </>
      ) : (
        <>
          <Copy size={16} />
          {label}
        </>
      )}
    </button>
  );
}