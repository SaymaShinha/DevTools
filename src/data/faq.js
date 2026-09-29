export const faqData = {
  "json-formatter": [
    {
      question: "What is a JSON formatter?",
      answer:
        "A JSON formatter organizes JSON data with indentation and line breaks so that objects, arrays, and nested values are easier to read.",
    },
    {
      question: "How do I format JSON?",
      answer:
        "Paste valid JSON into the formatter and use the Format action. The tool parses the JSON and creates a readable indented version.",
    },
    {
      question: "Can this tool format nested JSON?",
      answer:
        "Yes. The formatter handles nested objects and arrays and preserves the structure while adding readable indentation.",
    },
    {
      question: "What happens if my JSON is invalid?",
      answer:
        "The JSON parser will report an error instead of formatting invalid data. Check quotation marks, commas, brackets, and braces.",
    },
    {
      question: "Is my JSON uploaded to a server?",
      answer:
        "The tool is designed to process JSON directly in your browser, so normal formatting does not require sending the JSON to a backend server.",
    },
  ],

  "json-validator": [
    {
      question: "What does a JSON validator do?",
      answer:
        "A JSON validator checks whether text follows the syntax rules required for valid JSON.",
    },
    {
      question: "What are common JSON errors?",
      answer:
        "Common errors include missing quotation marks, unmatched braces or brackets, trailing commas, and incorrectly formatted values.",
    },
    {
      question: "Does valid JSON need double quotes?",
      answer:
        "JSON property names and string values use double quotation marks. Single quotes are not valid JSON string delimiters.",
    },
    {
      question: "Can I validate large JSON files?",
      answer:
        "The browser can process reasonably sized JSON text, although very large inputs may use significant memory and processing resources.",
    },
    {
      question: "Does validation change my JSON?",
      answer:
        "No. Validation checks the syntax of your input. It does not modify the original text.",
    },
  ],

  "base64-encoder": [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 is a binary-to-text encoding method that represents binary data using a set of printable characters.",
    },
    {
      question: "Is Base64 encryption?",
      answer:
        "No. Base64 is encoding rather than encryption. Anyone with the encoded value can decode it.",
    },
    {
      question: "Can I encode Unicode text?",
      answer:
        "A UTF-8 based implementation can encode Unicode text, including many non-English characters.",
    },
    {
      question: "Where is Base64 commonly used?",
      answer:
        "Base64 is commonly used for representing binary data in text-based formats, APIs, data URLs, and encoded payloads.",
    },
    {
      question: "Does encoding make data secure?",
      answer:
        "No. Base64 does not provide confidentiality or security. Sensitive information should use appropriate encryption instead.",
    },
  ],

  "base64-decoder": [
    {
      question: "What does a Base64 decoder do?",
      answer:
        "A Base64 decoder converts Base64-encoded data back into its original text representation when the encoded data represents text.",
    },
    {
      question: "Why does Base64 sometimes end with equals signs?",
      answer:
        "The equals sign can be used as padding so that the encoded data fits the required Base64 block length.",
    },
    {
      question: "Can Base64 contain spaces?",
      answer:
        "Standard Base64 generally uses a defined character set. Unexpected spaces or characters can cause decoding errors depending on the input.",
    },
    {
      question: "Is Base64 decoding the same as decrypting?",
      answer:
        "No. Decoding reverses an encoding process. It does not break encryption or reveal information protected by encryption.",
    },
    {
      question: "Can I decode Base64 in my browser?",
      answer:
        "Yes. This tool can perform Base64 decoding locally in the browser without requiring a backend service.",
    },
  ],

  "url-encoder": [
    {
      question: "What is URL encoding?",
      answer:
        "URL encoding converts characters that have special meanings in URLs into percent-encoded representations.",
    },
    {
      question: "Why are spaces encoded?",
      answer:
        "Spaces and other characters may need encoding so that they can be represented safely within URLs.",
    },
    {
      question: "What does %20 mean?",
      answer: "%20 is the percent-encoded representation of a space character.",
    },
    {
      question: "When should I use URL encoding?",
      answer:
        "URL encoding is useful when inserting user-entered text or other values into URL components such as query parameters.",
    },
    {
      question: "Does URL encoding encrypt data?",
      answer:
        "No. URL encoding changes representation for safe transport in a URL. It does not provide encryption.",
    },
  ],

  "url-decoder": [
    {
      question: "What is URL decoding?",
      answer:
        "URL decoding converts percent-encoded sequences back into their corresponding characters.",
    },
    {
      question: "What does %3F represent?",
      answer:
        "%3F is the percent-encoded representation of the question mark character.",
    },
    {
      question: "Can I decode a complete URL?",
      answer:
        "Yes, although decoding the entire URL may produce characters that are normally expected to remain encoded in particular URL components.",
    },
    {
      question: "Why are URLs encoded?",
      answer:
        "Encoding allows characters that have special meanings or are not suitable for URLs to be represented safely.",
    },
    {
      question: "Does decoding change the original URL?",
      answer:
        "The tool produces a decoded representation. It does not modify the URL stored elsewhere.",
    },
  ],

  "html-encoder": [
    {
      question: "What is HTML encoding?",
      answer:
        "HTML encoding replaces special characters with HTML entities so they can be represented as text instead of being interpreted as markup.",
    },
    {
      question: "Why encode the less-than character?",
      answer:
        "The less-than character can begin an HTML tag, so encoding it allows the character to be displayed as text.",
    },
    {
      question: "What does &lt; mean?",
      answer:
        "&lt; is the HTML entity representation of the less-than character.",
    },
    {
      question: "Does HTML encoding encrypt content?",
      answer:
        "No. HTML encoding changes how characters are represented. It does not protect information through encryption.",
    },
    {
      question: "When is HTML encoding useful?",
      answer:
        "It is useful when text containing HTML-sensitive characters needs to be displayed safely as text.",
    },
  ],

  "html-formatter": [
    {
      question: "What does an HTML formatter do?",
      answer:
        "An HTML formatter adds indentation and line breaks to HTML markup so that nested elements are easier to inspect and edit.",
    },
    {
      question: "Why format HTML?",
      answer:
        "Formatted HTML is easier to read, debug, review, and maintain than densely compressed markup.",
    },
    {
      question: "Can it format nested elements?",
      answer:
        "Yes. Properly structured nested elements can be displayed with indentation that makes their hierarchy easier to understand.",
    },
    {
      question: "Does formatting change the HTML meaning?",
      answer:
        "The goal of formatting is to improve readability while preserving the document structure.",
    },
    {
      question: "Can I use formatted HTML in production?",
      answer:
        "Formatted HTML can be used in production, although some projects choose to minify HTML when optimizing file size.",
    },
  ],

  "text-case-converter": [
    {
      question: "What is a text case converter?",
      answer:
        "A text case converter changes text between capitalization styles such as uppercase, lowercase, title case, camelCase, and other common formats.",
    },
    {
      question: "What is camelCase?",
      answer:
        "camelCase combines words without spaces and starts the first word with a lowercase letter while subsequent words begin with uppercase letters.",
    },
    {
      question: "What is PascalCase?",
      answer:
        "PascalCase is similar to camelCase, but the first word also begins with an uppercase letter.",
    },
    {
      question: "Can I convert large amounts of text?",
      answer:
        "Yes. The converter processes text entered into the browser, although extremely large inputs may use more browser memory.",
    },
    {
      question: "Does case conversion preserve punctuation?",
      answer:
        "The exact result depends on the selected conversion style. Punctuation is generally preserved unless the selected transformation specifically changes separators.",
    },
  ],

  "word-counter": [
    {
      question: "What does a word counter measure?",
      answer:
        "A word counter can calculate the number of words and characters in text and may also provide additional statistics such as paragraph count and estimated reading time.",
    },
    {
      question: "How is reading time estimated?",
      answer:
        "Reading time is typically estimated using an average reading speed. The actual time varies between readers and types of content.",
    },
    {
      question: "Are spaces included in character count?",
      answer:
        "A character counter can provide both total characters and characters excluding spaces so that you can compare the two measurements.",
    },
    {
      question: "Who can use a word counter?",
      answer:
        "Students, writers, bloggers, editors, developers, and social media users can use word counting tools to check text length.",
    },
    {
      question: "Is my text uploaded?",
      answer:
        "The browser-based counter can analyze text locally without requiring a backend service.",
    },
  ],

  "slug-generator": [
    {
      question: "What is a URL slug?",
      answer:
        "A URL slug is the readable part of a web address that identifies a specific page, commonly created from its title.",
    },
    {
      question: "Why use hyphens in slugs?",
      answer:
        "Hyphens provide a simple visual separator between words in a URL and are commonly used for readable web addresses.",
    },
    {
      question: "Should a slug use lowercase letters?",
      answer:
        "Lowercase slugs are commonly preferred because they provide consistent and readable URLs.",
    },
    {
      question: "Should special characters be removed?",
      answer:
        "Many slug generators remove unnecessary punctuation and special characters to create simpler URLs.",
    },
    {
      question: "Can slugs help readability?",
      answer:
        "Readable slugs can make URLs easier for people to understand and recognize.",
    },
  ],

  "uuid-generator": [
    {
      question: "What is a UUID?",
      answer:
        "A UUID, or Universally Unique Identifier, is a 128-bit identifier commonly represented as a hexadecimal string.",
    },
    {
      question: "What is UUID version 4?",
      answer:
        "UUID version 4 generates identifiers using randomly generated values, with specific bits reserved to identify the UUID version and variant.",
    },
    {
      question: "Are UUIDs guaranteed to be unique?",
      answer:
        "Random UUIDs are designed so that the probability of a collision is extremely low when generated correctly, but absolute mathematical uniqueness is not guaranteed.",
    },
    {
      question: "Where are UUIDs used?",
      answer:
        "UUIDs are commonly used for database identifiers, API resources, distributed systems, and application objects.",
    },
    {
      question: "Can I generate UUIDs without a server?",
      answer:
        "Modern browsers provide cryptographic APIs that can generate UUID values directly on the user's device.",
    },
  ],

  "timestamp-converter": [
    {
      question: "What is a Unix timestamp?",
      answer:
        "A Unix timestamp represents a point in time as the number of seconds or, in some systems, milliseconds from the Unix epoch.",
    },
    {
      question: "What is the Unix epoch?",
      answer:
        "The Unix epoch is January 1, 1970 at 00:00:00 UTC, which serves as the reference point for Unix timestamps.",
    },
    {
      question: "What is the difference between seconds and milliseconds?",
      answer:
        "A timestamp expressed in seconds has fewer digits than a timestamp expressed in milliseconds because milliseconds represent one thousandth of a second.",
    },
    {
      question: "Are timestamps affected by time zones?",
      answer:
        "The timestamp itself represents a point in time, while its human-readable display can be shown in UTC or a local time zone.",
    },
    {
      question: "Where are Unix timestamps used?",
      answer:
        "They are widely used in programming, databases, APIs, logs, and systems that need a compact representation of time.",
    },
  ],

  "color-converter": [
    {
      question: "What is a HEX color?",
      answer:
        "A HEX color represents RGB color components using hexadecimal notation, commonly written with a leading # symbol.",
    },
    {
      question: "What is RGB?",
      answer:
        "RGB represents a color using red, green, and blue component values.",
    },
    {
      question: "What is HSL?",
      answer:
        "HSL represents color using hue, saturation, and lightness, which can make some color adjustments easier to understand.",
    },
    {
      question: "Why convert between color formats?",
      answer:
        "Different design and development tools may use different color representations, so conversion can help when working between CSS, design systems, and graphics tools.",
    },
    {
      question: "Can I use the converted color in CSS?",
      answer:
        "Yes. HEX, RGB, and HSL are commonly supported CSS color representations.",
    },
  ],

  "regex-tester": [
    {
      question: "What is a regular expression?",
      answer:
        "A regular expression, or regex, is a pattern used to search, match, or validate text according to defined rules.",
    },
    {
      question: "What does \\d mean in regex?",
      answer:
        "\\d commonly represents a digit character in regular expression syntax.",
    },
    {
      question: "What are regex flags?",
      answer:
        "Flags modify how a regular expression behaves. Common JavaScript flags include global, case-insensitive, multiline, and Unicode-related options.",
    },
    {
      question: "Can regex validate form input?",
      answer:
        "Regular expressions can help validate structured text, but application-level validation should also handle edge cases and business rules.",
    },
    {
      question: "What happens if my regex is invalid?",
      answer:
        "The JavaScript regular expression engine will report a syntax error, which the tester can display instead of attempting to run the invalid pattern.",
    },
  ],
};
