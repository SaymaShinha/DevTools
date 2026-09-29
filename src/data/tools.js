import {
  Braces,
  CheckCircle2,
  Binary,
  Link2,
  Code2,
  FileCode2,
  CaseSensitive,
  Type,
  Wand2,
  Fingerprint,
  Clock3,
  Palette,
  Regex,
} from "lucide-react";

export const tools = [
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    path: "/tools/json-formatter",
    category: "JSON",
    description:
      "Format and beautify JSON data with readable indentation and structure.",
    icon: Braces,
  },

  {
    name: "JSON Validator",
    slug: "json-validator",
    path: "/tools/json-validator",
    category: "JSON",
    description: "Validate JSON syntax and quickly identify invalid JSON data.",
    icon: CheckCircle2,
  },

  {
    name: "Base64 Encoder",
    slug: "base64-encoder",
    path: "/tools/base64-encoder",
    category: "Encoding",
    description: "Encode text into Base64 directly in your browser.",
    icon: Binary,
  },

  {
    name: "Base64 Decoder",
    slug: "base64-decoder",
    path: "/tools/base64-decoder",
    category: "Encoding",
    description: "Decode Base64 text back into readable text.",
    icon: Binary,
  },

  {
    name: "URL Encoder",
    slug: "url-encoder",
    path: "/tools/url-encoder",
    category: "URL",
    description: "Encode text for safe use inside URLs and query parameters.",
    icon: Link2,
  },

  {
    name: "URL Decoder",
    slug: "url-decoder",
    path: "/tools/url-decoder",
    category: "URL",
    description: "Decode percent-encoded URL text into readable characters.",
    icon: Link2,
  },

  {
    name: "HTML Encoder",
    slug: "html-encoder",
    path: "/tools/html-encoder",
    category: "HTML",
    description: "Convert HTML-sensitive characters into HTML entities.",
    icon: Code2,
  },

  {
    name: "HTML Formatter",
    slug: "html-formatter",
    path: "/tools/html-formatter",
    category: "HTML",
    description: "Format and indent HTML markup to make it easier to read.",
    icon: FileCode2,
  },

  {
    name: "Text Case Converter",
    slug: "text-case-converter",
    path: "/tools/text-case-converter",
    category: "Text",
    description:
      "Convert text between uppercase, lowercase, title case, camelCase and more.",
    icon: CaseSensitive,
  },

  {
    name: "Word Counter",
    slug: "word-counter",
    path: "/tools/word-counter",
    category: "Text",
    description:
      "Count words, characters, paragraphs and estimate reading time.",
    icon: Type,
  },

  {
    name: "Slug Generator",
    slug: "slug-generator",
    path: "/tools/slug-generator",
    category: "Text",
    description: "Create clean, readable URL slugs from titles and text.",
    icon: Wand2,
  },

  {
    name: "UUID Generator",
    slug: "uuid-generator",
    path: "/tools/uuid-generator",
    category: "Generators",
    description: "Generate random UUID v4 identifiers instantly.",
    icon: Fingerprint,
  },

  {
    name: "Timestamp Converter",
    slug: "timestamp-converter",
    path: "/tools/timestamp-converter",
    category: "Time",
    description:
      "Convert Unix timestamps between readable dates and timestamp values.",
    icon: Clock3,
  },

  {
    name: "Color Converter",
    slug: "color-converter",
    path: "/tools/color-converter",
    category: "Color",
    description: "Convert colors between HEX, RGB and HSL formats.",
    icon: Palette,
  },

  {
    name: "Regex Tester",
    slug: "regex-tester",
    path: "/tools/regex-tester",
    category: "Developer",
    description:
      "Test regular expressions against text and inspect matching results.",
    icon: Regex,
  },
];

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug);

export const getToolsByCategory = (category) =>
  tools.filter((tool) => tool.category === category);
