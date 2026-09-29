import SEO from "../components/SEO.jsx";

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy - DevTools"
        description="Read the DevTools cookie policy."
        canonical="https://devtools-toolkit.vercel.app/cookie-policy"
      />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-950">
          Cookie Policy
        </h1>

        <div className="prose-content mt-8">
          <p>
            This Cookie Policy explains how cookies and similar technologies may
            be used on DevTools.
          </p>

          <h2>What are cookies?</h2>

          <p>
            Cookies are small pieces of information stored by websites in a
            user's browser.
          </p>

          <h2>How cookies may be used</h2>

          <p>
            Cookies may be used for website functionality, analytics and
            advertising depending on the services enabled on the website.
          </p>

          <h2>Managing cookies</h2>

          <p>
            Most modern browsers provide settings that allow users to manage or
            delete cookies.
          </p>
        </div>
      </main>
    </>
  );
}
