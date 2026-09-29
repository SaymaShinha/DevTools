import SEO from "../components/SEO.jsx";

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title="Terms of Use - DevTools"
        description="Read the terms of use for DevTools."
        canonical="https://devtools-toolkit.vercel.app/terms-of-use"
      />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-950">Terms of Use</h1>

        <div className="prose-content mt-8">
          <p>
            By using DevTools, you agree to use the website responsibly and in
            accordance with applicable laws.
          </p>

          <h2>Use of the tools</h2>

          <p>
            The tools are provided for general informational and productivity
            purposes. You are responsible for verifying results before relying
            on them for important purposes.
          </p>

          <h2>Availability</h2>

          <p>
            We may modify, suspend or discontinue individual tools or website
            features at any time.
          </p>

          <h2>Limitation</h2>

          <p>
            DevTools is provided on an as-is basis. Users should independently
            verify important outputs.
          </p>
        </div>
      </main>
    </>
  );
}
