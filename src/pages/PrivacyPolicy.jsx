import SEO from "../components/SEO.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - DevTools"
        description="Read the DevTools privacy policy."
        canonical="https://devtools-toolkit.vercel.app/privacy-policy"
      />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-950">
          Privacy Policy
        </h1>

        <div className="prose-content mt-8">
          <p>
            This Privacy Policy explains how DevTools handles information when
            you use this website.
          </p>

          <h2>Information processed by tools</h2>

          <p>
            Many DevTools utilities perform their operations directly in your
            browser. For those tools, the input is processed locally rather than
            requiring a server request.
          </p>

          <h2>Cookies</h2>

          <p>
            The website may use cookies or similar technologies where required
            for functionality, analytics or advertising services.
          </p>

          <h2>Advertising</h2>

          <p>
            If advertising services are used on this website, third-party
            providers may process information according to their own privacy
            policies.
          </p>

          <h2>Changes</h2>

          <p>
            This Privacy Policy may be updated when website functionality or
            applicable requirements change.
          </p>
        </div>
      </main>
    </>
  );
}
