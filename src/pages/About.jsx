import SEO from "../components/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About DevTools"
        description="Learn about DevTools and its collection of simple browser-based developer utilities."
        canonical="https://yourdomain.com/about"
      />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-950">
          About DevTools
        </h1>

        <div className="prose-content mt-8">
          <p>
            DevTools is a collection of simple online utilities designed to make
            common development and text-processing tasks easier.
          </p>

          <h2>Our goal</h2>

          <p>
            The goal is to provide focused tools that are easy to understand,
            quick to use and accessible without requiring an account.
          </p>

          <h2>Browser-based tools</h2>

          <p>
            Many of the tools process information directly in the user's
            browser. This allows common operations to happen without requiring a
            dedicated backend service.
          </p>

          <h2>Simple by design</h2>

          <p>
            Each tool focuses on a specific task rather than adding unnecessary
            complexity.
          </p>
        </div>
      </main>
    </>
  );
}
