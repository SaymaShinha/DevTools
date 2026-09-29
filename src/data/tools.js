// src/data/tools.js

import {
  Braces,
  CheckCircle,
  Binary,
  Link,
  Code,
  Type,
  FileText,
  Hash,
  Clock,
  Palette,
  Regex,
} from "lucide-react";

export const tools = [
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Format and beautify JSON instantly.",
    category: "JSON",
    icon: Braces,
    path: "/tools/json-formatter",
  },

  {
    name: "JSON Validator",
    slug: "json-validator",
    description: "Check whether your JSON is valid.",
    category: "JSON",
    icon: CheckCircle,
    path: "/tools/json-validator",
  },

  {
    name: "Base64 Encoder",
    slug: "base64-encoder",
    description: "Encode text into Base64 format.",
    category: "Encoding",
    icon: Binary,
    path: "/tools/base64-encoder",
  },

  {
    name: "Base64 Decoder",
    slug: "base64-decoder",
    description: "Decode Base64 text back to readable text.",
    category: "Encoding",
    icon: Binary,
    path: "/tools/base64-decoder",
  },

  {
    name: "URL Encoder",
    slug: "url-encoder",
    description: "Encode URLs and query parameters safely.",
    category: "Encoding",
    icon: Link,
    path: "/tools/url-encoder",
  },

  {
    name: "URL Decoder",
    slug: "url-decoder",
    description: "Decode URL encoded text.",
    category: "Encoding",
    icon: Link,
    path: "/tools/url-decoder",
  },

  {
    name: "HTML Encoder",
    slug: "html-encoder",
    description: "Convert special characters into HTML entities.",
    category: "Encoding",
    icon: Code,
    path: "/tools/html-encoder",
  },

  {
    name: "HTML Formatter",
    slug: "html-formatter",
    description: "Format HTML code into a readable structure.",
    category: "Developer",
    icon: Code,
    path: "/tools/html-formatter",
  },

  {
    name: "Text Case Converter",
    slug: "text-case-converter",
    description: "Convert text between different letter cases.",
    category: "Text",
    icon: Type,
    path: "/tools/text-case-converter",
  },

  {
    name: "Word Counter",
    slug: "word-counter",
    description: "Count words, characters and sentences.",
    category: "Text",
    icon: FileText,
    path: "/tools/word-counter",
  },

  {
    name: "Slug Generator",
    slug: "slug-generator",
    description: "Create clean URL-friendly slugs.",
    category: "Text",
    icon: Hash,
    path: "/tools/slug-generator",
  },

  {
    name: "UUID Generator",
    slug: "uuid-generator",
    description: "Generate random UUIDs instantly.",
    category: "Developer",
    icon: Hash,
    path: "/tools/uuid-generator",
  },

  {
    name: "Timestamp Converter",
    slug: "timestamp-converter",
    description: "Convert Unix timestamps to readable dates.",
    category: "Developer",
    icon: Clock,
    path: "/tools/timestamp-converter",
  },

  {
    name: "Color Converter",
    slug: "color-converter",
    description: "Convert colors between HEX, RGB and HSL.",
    category: "Developer",
    icon: Palette,
    path: "/tools/color-converter",
  },

  {
    name: "Regex Tester",
    slug: "regex-tester",
    description: "Test regular expressions against sample text.",
    category: "Testing",
    icon: Regex,
    path: "/tools/regex-tester",
  },
];
