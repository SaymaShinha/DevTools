import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";
import SEO from "./SEO.jsx";
import FAQ from "../pages/FAQ.jsx";
import RelatedTools from "./RelatedTools.jsx";

export default function ToolLayout({
  title,
  description,
  slug,
  category,
  children,
  howToUse = [],
  features = [],
  example,
  whatIs,
  useCases = [],
  faqs = [],
  relatedTools = [],
}) {
  return (
    <>
      <SEO
        title={`${title} - Free Online Developer Tool`}
        description={description}
        canonical={`/tools/${slug}`}
      />

      <main className="min-h-screen bg-slate-50">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="transition hover:text-indigo-600">
                Home
              </Link>

              <ChevronRight size={15} />

              <Link to="/tools" className="transition hover:text-indigo-600">
                Developer Tools
              </Link>

              <ChevronRight size={15} />

              <span className="font-medium text-slate-900">{title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                {category}
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Tool */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            {children}
          </div>

          {/* Privacy note */}
          <div className="mt-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <ShieldCheck
              className="mt-0.5 shrink-0 text-emerald-600"
              size={20}
            />

            <div>
              <h3 className="font-semibold text-emerald-900">
                Browser-based processing
              </h3>

              <p className="mt-1 text-sm leading-6 text-emerald-800">
                This tool is designed to process your input directly in your
                browser. Your data does not need to be uploaded to our server
                for the tool to work.
              </p>
            </div>
          </div>
        </section>

        {/* Educational content */}
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {/* How to use */}
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-2xl font-bold text-slate-950">
              How to use {title}
            </h2>

            <div className="mt-6 space-y-4">
              {howToUse.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="pt-1 leading-7 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-2xl font-bold text-slate-950">Features</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Example */}
          {example && (
            <section className="border-t border-slate-200 py-12">
              <h2 className="text-2xl font-bold text-slate-950">Example</h2>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <div className="bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                  Example input
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-5 text-sm leading-7 text-slate-200">
                  {example.input}
                </pre>

                <div className="bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                  Result
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-5 text-sm leading-7 text-emerald-300">
                  {example.output}
                </pre>
              </div>
            </section>
          )}

          {/* What is */}
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-2xl font-bold text-slate-950">
              What is {whatIs?.title || title}?
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              {whatIs?.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-2xl font-bold text-slate-950">
              Common use cases
            </h2>

            <div className="mt-6 space-y-3">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <p className="leading-7 text-slate-600">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-2xl font-bold text-slate-950">
              Frequently asked questions
            </h2>

            <div className="mt-6">
              <FAQ items={faqs} />
            </div>
          </section>

          {/* Related */}
          {relatedTools.length > 0 && (
            <section className="border-t border-slate-200 py-12">
              <h2 className="text-2xl font-bold text-slate-950">
                Related developer tools
              </h2>

              <RelatedTools tools={relatedTools} />
            </section>
          )}
        </div>
      </main>
    </>
  );
}
