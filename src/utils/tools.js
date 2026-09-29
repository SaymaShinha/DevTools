export function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);

  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

export function decodeBase64(value) {
  const binary = atob(value);

  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

export function generateSlug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function htmlEncode(text) {
  const textarea = document.createElement("textarea");
  textarea.textContent = text;
  return textarea.innerHTML;
}

export function toTitleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toSentenceCase(text) {
  const value = text.toLowerCase().trim();

  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function toKebabCase(text) {
  return generateSlug(text);
}

export function toSnakeCase(text) {
  return generateSlug(text).replace(/-/g, "_");
}

export function toCamelCase(text) {
  const words = generateSlug(text).split("-");

  return words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

export function toPascalCase(text) {
  const words = generateSlug(text).split("-");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
