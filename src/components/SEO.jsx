import { Helmet } from "react-helmet-async";

const SITE_URL = "https://devtools-toolkit.vercel.app";
const SITE_NAME = "DevTools";

export default function SEO({
  title,
  description,
  canonical,
  image = `${SITE_URL}/og-image.png`,
  noindex = false,
}) {
  const fullTitle = title?.includes("DevTools")
    ? title
    : `${title} | ${SITE_NAME}`;

  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
