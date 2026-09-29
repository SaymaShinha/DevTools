import { Helmet } from "react-helmet-async";

const SITE_URL = "https://YOUR-DOMAIN.com";

export default function SEO({
  title,
  description,
  canonical,
  noIndex = false,
}) {
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
