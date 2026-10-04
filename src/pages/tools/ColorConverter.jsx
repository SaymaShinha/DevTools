import { useMemo, useState } from "react";
import { Palette, ArrowRightLeft } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import ToolLayout from "../../components/ToolLayout.jsx";
import CopyButton from "../../components/CopyButton.jsx";
import ClearButton from "../../components/ClearButton.jsx";
import { faqData } from "../../data/faq.js";
import { tools } from "../../data/tools.js";

const relatedTools = tools.filter((tool) =>
  [
    "/tools/html-encoder",
    "/tools/json-formatter",
    "/tools/text-case-converter",
  ].includes(tool.path),
);

function hexToRgb(hex) {
  let value = hex.trim().replace("#", "");

  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    return null;
  }

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((value) => {
        const hex = Number(value).toString(16).padStart(2, "0");
        return hex.toUpperCase();
      })
      .join("")
  );
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const difference = max - min;

    s =
      l > 0.5
        ? difference / (2 - max - min)
        : difference / (max + min);

    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / difference + 2;
        break;
      case b:
        h = (r - g) / difference + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    const value = Math.round(l * 255);

    return {
      r: value,
      g: value,
      b: value,
    };
  }

  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;

    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;

    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return {
    r: Math.round(hueToRgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, h) * 255),
    b: Math.round(hueToRgb(p, q, h - 1 / 3) * 255),
  };
}

export default function ColorConverter() {
  const [hex, setHex] = useState("#4F46E5");

  const [rgb, setRgb] = useState({
    r: "79",
    g: "70",
    b: "229",
  });

  const [hsl, setHsl] = useState({
    h: "245",
    s: "76",
    l: "59",
  });

  const [error, setError] = useState("");

  const color = useMemo(() => {
    const parsed = hexToRgb(hex);

    if (!parsed) {
      return null;
    }

    const hslValue = rgbToHsl(parsed.r, parsed.g, parsed.b);

    return {
      rgb: parsed,
      hsl: hslValue,
      hex: rgbToHex(parsed.r, parsed.g, parsed.b),
      cssRgb: `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`,
      cssHsl: `hsl(${hslValue.h}, ${hslValue.s}%, ${hslValue.l}%)`,
    };
  }, [hex]);

  const updateFromHex = () => {
    const parsed = hexToRgb(hex);

    if (!parsed) {
      setError("Enter a valid HEX color such as #4F46E5.");
      return;
    }

    const convertedHsl = rgbToHsl(parsed.r, parsed.g, parsed.b);

    setRgb({
      r: String(parsed.r),
      g: String(parsed.g),
      b: String(parsed.b),
    });

    setHsl({
      h: String(convertedHsl.h),
      s: String(convertedHsl.s),
      l: String(convertedHsl.l),
    });

    setHex(rgbToHex(parsed.r, parsed.g, parsed.b));
    setError("");
  };

  const updateFromRgb = () => {
    const r = Number(rgb.r);
    const g = Number(rgb.g);
    const b = Number(rgb.b);

    if (
      !Number.isInteger(r) ||
      !Number.isInteger(g) ||
      !Number.isInteger(b) ||
      r < 0 ||
      r > 255 ||
      g < 0 ||
      g > 255 ||
      b < 0 ||
      b > 255
    ) {
      setError("RGB values must be whole numbers between 0 and 255.");
      return;
    }

    const convertedHex = rgbToHex(r, g, b);
    const convertedHsl = rgbToHsl(r, g, b);

    setHex(convertedHex);

    setHsl({
      h: String(convertedHsl.h),
      s: String(convertedHsl.s),
      l: String(convertedHsl.l),
    });

    setError("");
  };

  const updateFromHsl = () => {
    const h = Number(hsl.h);
    const s = Number(hsl.s);
    const l = Number(hsl.l);

    if (
      !Number.isFinite(h) ||
      !Number.isFinite(s) ||
      !Number.isFinite(l) ||
      h < 0 ||
      h > 360 ||
      s < 0 ||
      s > 100 ||
      l < 0 ||
      l > 100
    ) {
      setError(
        "HSL values must use H: 0–360 and S/L: 0–100.",
      );
      return;
    }

    const convertedRgb = hslToRgb(h, s, l);
    const convertedHex = rgbToHex(
      convertedRgb.r,
      convertedRgb.g,
      convertedRgb.b,
    );

    setHex(convertedHex);

    setRgb({
      r: String(convertedRgb.r),
      g: String(convertedRgb.g),
      b: String(convertedRgb.b),
    });

    setError("");
  };

  const reset = () => {
    setHex("");
    setRgb({
      r: "",
      g: "",
      b: "",
    });
    setHsl({
      h: "",
      s: "",
      l: "",
    });
    setError("");
  };

  return (
    <>
      <SEO
        title="Color Converter - HEX, RGB & HSL Color Converter"
        description="Convert colors between HEX, RGB and HSL formats with this free browser-based color converter. Preview colors and copy CSS color values instantly."
        canonical="/tools/color-converter"
      />

      <ToolLayout
        title="Color Converter"
        description="Convert colors between HEX, RGB, and HSL formats quickly in your browser."
        intro={
          <>
            <p>
              A color converter helps you translate a color between common
              formats used in web design, development, graphics, and digital
              interfaces.
            </p>

            <p className="mt-5">
              This tool supports HEX, RGB, and HSL color values. You can enter
              a color value, convert it into other formats, preview the result,
              and copy the generated CSS values.
            </p>
          </>
        }
        howToUse={[
          "Enter a valid HEX color, such as #4F46E5.",
          "Click Convert HEX to update the RGB and HSL values.",
          "Alternatively, enter RGB or HSL values and convert them into the other formats.",
          "Use the copy buttons to copy individual color values.",
        ]}
        features={[
          {
            title: "HEX conversion",
            description:
              "Convert six-digit and three-digit HEX colors into other formats.",
          },
          {
            title: "RGB conversion",
            description:
              "Work with red, green, and blue values from 0 to 255.",
          },
          {
            title: "HSL conversion",
            description:
              "Convert colors using hue, saturation, and lightness values.",
          },
          {
            title: "Live color preview",
            description:
              "Preview the selected color while working with different formats.",
          },
          {
            title: "CSS-ready values",
            description:
              "Copy HEX, RGB, and HSL values for use in CSS and web projects.",
          },
          {
            title: "Browser-based",
            description:
              "Color conversion happens directly in your browser without uploading your data.",
          },
        ]}
        example={
          <div className="p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                #4F46E5
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                rgb(79, 70, 229)
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-200">
                hsl(245, 76%, 59%)
              </div>
            </div>
          </div>
        }
        aboutTitle="What Is a Color Converter?"
        aboutContent={
          <>
            <p>
              A color converter changes a color value from one color notation
              into another. HEX, RGB, and HSL are three common formats used in
              websites, applications, design systems, and digital graphics.
            </p>

            <p className="mt-4">
              HEX represents colors using hexadecimal values for red, green,
              and blue components. RGB represents those same components using
              numeric values from 0 to 255.
            </p>

            <p className="mt-4">
              HSL describes a color using hue, saturation, and lightness. HSL
              can be useful when adjusting the appearance of a color because
              its components correspond more closely to how people commonly
              describe color variations.
            </p>
          </>
        }
        useCases={[
          {
            title: "Web development",
            description:
              "Convert design colors into CSS-compatible HEX, RGB, or HSL values.",
          },
          {
            title: "UI design",
            description:
              "Compare and adjust colors while building interfaces and design systems.",
          },
          {
            title: "Graphic design",
            description:
              "Translate color values between formats used by different tools.",
          },
          {
            title: "Frontend development",
            description:
              "Prepare color values for CSS properties, themes, and components.",
          },
        ]}
        faqItems={faqData["color-converter"]}
        relatedTools={relatedTools}
      >
        <div className="space-y-8">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Palette size={19} className="text-indigo-600" />

              <h2 className="font-semibold text-slate-900">
                Color Converter
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
              <div>
                <label
                  htmlFor="hex-color"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  HEX Color
                </label>

                <div className="flex gap-3">
                  <input
                    id="hex-color"
                    type="text"
                    value={hex}
                    onChange={(e) => {
                      setHex(e.target.value);
                      setError("");
                    }}
                    placeholder="#4F46E5"
                    className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm uppercase outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />

                  <input
                    type="color"
                    value={
                      hexToRgb(hex)
                        ? rgbToHex(
                            hexToRgb(hex).r,
                            hexToRgb(hex).g,
                            hexToRgb(hex).b,
                          )
                        : "#4F46E5"
                    }
                    onChange={(e) => {
                      setHex(e.target.value);
                      setError("");
                    }}
                    className="h-[54px] w-[64px] cursor-pointer rounded-xl border border-slate-300 bg-white p-1"
                    aria-label="Choose color"
                  />
                </div>

                <button
                  type="button"
                  onClick={updateFromHex}
                  className="mt-4 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Convert HEX
                </button>
              </div>

              <div
                className="min-h-[130px] rounded-2xl border border-slate-200 shadow-sm"
                style={{
                  backgroundColor: color?.hex || "#e2e8f0",
                }}
              >
                <div className="flex h-full min-h-[130px] items-end rounded-2xl bg-black/10 p-4">
                  <span className="rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm">
                    Color Preview
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </section>

          <section className="border-t border-slate-200 pt-8">
            <div className="mb-5 flex items-center gap-2">
              <ArrowRightLeft size={19} className="text-indigo-600" />

              <h2 className="font-semibold text-slate-900">
                RGB Color
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["r", "g", "b"].map((channel) => (
                <div key={channel}>
                  <label
                    htmlFor={`rgb-${channel}`}
                    className="mb-2 block text-sm font-medium uppercase text-slate-700"
                  >
                    {channel}
                  </label>

                  <input
                    id={`rgb-${channel}`}
                    type="number"
                    min="0"
                    max="255"
                    value={rgb[channel]}
                    onChange={(e) =>
                      setRgb((previous) => ({
                        ...previous,
                        [channel]: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={updateFromRgb}
              className="mt-4 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Convert RGB
            </button>

            {color && (
              <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                <code className="break-all text-sm text-slate-200">
                  {color.cssRgb}
                </code>

                <CopyButton text={color.cssRgb} />
              </div>
            )}
          </section>

          <section className="border-t border-slate-200 pt-8">
            <div className="mb-5 flex items-center gap-2">
              <ArrowRightLeft size={19} className="text-indigo-600" />

              <h2 className="font-semibold text-slate-900">
                HSL Color
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["h", "Hue", "0–360"],
                ["s", "Saturation", "0–100"],
                ["l", "Lightness", "0–100"],
              ].map(([channel, label, range]) => (
                <div key={channel}>
                  <label
                    htmlFor={`hsl-${channel}`}
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    {label}
                  </label>

                  <input
                    id={`hsl-${channel}`}
                    type="number"
                    value={hsl[channel]}
                    onChange={(e) =>
                      setHsl((previous) => ({
                        ...previous,
                        [channel]: e.target.value,
                      }))
                    }
                    placeholder={range}
                    className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={updateFromHsl}
              className="mt-4 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Convert HSL
            </button>

            {color && (
              <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                <code className="break-all text-sm text-slate-200">
                  {color.cssHsl}
                </code>

                <CopyButton text={color.cssHsl} />
              </div>
            )}
          </section>

          {color && (
            <section className="border-t border-slate-200 pt-8">
              <h2 className="mb-4 font-semibold text-slate-900">
                Converted Values
              </h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                  <code className="text-sm text-slate-200">
                    {color.hex}
                  </code>

                  <CopyButton text={color.hex} />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                  <code className="text-sm text-slate-200">
                    {color.cssRgb}
                  </code>

                  <CopyButton text={color.cssRgb} />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-950 p-4">
                  <code className="text-sm text-slate-200">
                    {color.cssHsl}
                  </code>

                  <CopyButton text={color.cssHsl} />
                </div>
              </div>
            </section>
          )}

          <ClearButton
            onClick={reset}
            disabled={
              !hex &&
              !rgb.r &&
              !rgb.g &&
              !rgb.b &&
              !hsl.h &&
              !hsl.s &&
              !hsl.l
            }
          />
        </div>
      </ToolLayout>
    </>
  );
}

