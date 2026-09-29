import { useState } from "react";
import ToolLayout from "../../components/ToolLayout.jsx";

function hexToRgb(hex) {
  let value = hex.replace("#", "");

  if (value.length === 3) {
    value = value
      .split("")
      .map((x) => x + x)
      .join("");
  }

  if (!/^[0-9a-fA-F]{6}$/.test(value)) return null;

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      default:
        h = (r - g) / d + 4;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export default function ColorConverter() {
  const [hex, setHex] = useState("#4F46E5");
  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  return (
    <ToolLayout
      title="Color Converter"
      slug="color-converter"
      category="Developer Utilities"
      description="Convert HEX colors into RGB and HSL values with a simple browser-based color converter."
      howToUse={[
        "Enter a valid HEX color.",
        "The tool automatically calculates the RGB values.",
        "The corresponding HSL values are also displayed.",
      ]}
      features={[
        {
          title: "HEX to RGB",
          description: "Convert hexadecimal colors to RGB.",
        },
        {
          title: "HEX to HSL",
          description: "Generate HSL values from a HEX color.",
        },
        {
          title: "Color preview",
          description: "See the selected color visually.",
        },
        {
          title: "Browser-based",
          description: "Conversions happen locally.",
        },
      ]}
      example={{
        input: "#4F46E5",
        output: "RGB(79, 70, 229) • HSL(243, 76%, 59%)",
      }}
      whatIs={{
        title: "color formats",
        paragraphs: [
          "HEX, RGB, and HSL are common ways of representing colors in digital design and web development.",
          "HEX uses hexadecimal values, RGB describes red, green, and blue components, while HSL represents hue, saturation, and lightness.",
        ],
      }}
      useCases={[
        "Converting CSS colors.",
        "Working with design systems.",
        "Creating CSS variables.",
        "Translating colors between design tools and code.",
      ]}
      faqs={[
        {
          question: "What is a color converter?",
          answer:
            "A color converter changes color values between formats such as HEX, RGB, and HSL.",
        },
        {
          question: "What is HEX color?",
          answer:
            "HEX represents a color using hexadecimal values, commonly written in a format such as #4F46E5.",
        },
        {
          question: "What is RGB?",
          answer:
            "RGB represents a color using red, green, and blue components. Each component commonly ranges from 0 to 255.",
        },
        {
          question: "What is HSL?",
          answer:
            "HSL represents a color using hue, saturation, and lightness, which can make certain color adjustments easier to understand.",
        },
        {
          question: "Are the converted colors exact?",
          answer:
            "Conversions between standard HEX, RGB, and HSL representations describe the same color, although rounding can sometimes cause very small numerical differences.",
        },
      ]}
      relatedTools={[
        {
          name: "Text Case Converter",
          slug: "text-case-converter",
          description: "Convert text between different cases.",
        },
        {
          name: "HTML Formatter",
          slug: "html-formatter",
          description: "Format HTML code.",
        },
      ]}
    >
      <div className="space-y-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <input
            type="color"
            value={/^#[0-9a-fA-F]{6}$/.test(hex) ? hex : "#4F46E5"}
            onChange={(e) => setHex(e.target.value)}
            className="h-24 w-24 cursor-pointer rounded-xl border-0 bg-transparent"
          />

          <div className="flex-1">
            <label className="mb-2 block font-semibold text-slate-900">
              HEX Color
            </label>

            <input
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="#4F46E5"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 font-mono uppercase outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>

        {rgb && hsl ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">HEX</p>
              <p className="mt-2 font-mono font-semibold text-slate-900">
                #{hex.replace("#", "").toUpperCase()}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">RGB</p>
              <p className="mt-2 font-mono font-semibold text-slate-900">
                rgb({rgb.r}, {rgb.g}, {rgb.b})
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">HSL</p>
              <p className="mt-2 font-mono font-semibold text-slate-900">
                hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            Enter a valid six-digit HEX color.
          </div>
        )}

        <div
          className="h-32 rounded-2xl border border-slate-200 shadow-inner"
          style={{
            backgroundColor: rgb
              ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
              : "#ffffff",
          }}
        />
      </div>
    </ToolLayout>
  );
}
