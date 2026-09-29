import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Breadcrumbs from "./Breadcrumbs.jsx";
import ToolHeader from "./ToolHeader.jsx";
import FAQ from "./FAQ.jsx";
import ToolCard from "./ToolCard.jsx";

export default function ToolLayout({
  title,
  description,
  category = "Developer Tools",
  children,
  intro,
  howToUse = [],
  features = [],
  example,
  aboutTitle,
  aboutContent,
  useCases = [],
  faqItems = [],
  relatedTools = [],
}) {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                label: "Tools",
                path: "/tools",
              },
              {
                label: category,
              },
              {
                label: title,
              },
            ]}
          />

          <ToolHeader title={title} description={description} />
        </div>
      </section>

      {/* Tool */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            {children}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          {intro && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">
                About {title}
              </h2>

              <div className="mt-5 text-base leading-8 text-slate-600">
                {intro}
              </div>
            </section>
          )}

          {/* How to use */}
          {howToUse.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">
                How to Use {title}
              </h2>

              <ol className="mt-6 space-y-4">
                {howToUse.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
                      {index + 1}
                    </span>

                    <p className="pt-1 leading-7 text-slate-600">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Features */}
          {features.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">Features</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
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
          )}

          {/* Example */}
          {example && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">Example</h2>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                {example}
              </div>
            </section>
          )}

          {/* Detailed explanation */}
          {aboutContent && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">
                {aboutTitle || `What Is ${title}?`}
              </h2>

              <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
                {aboutContent}
              </div>
            </section>
          )}

          {/* Use cases */}
          {useCases.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900">
                Common Use Cases
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {useCase.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {faqItems.length > 0 && (
            <section className="mb-14">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <FAQ items={faqItems} />
            </section>
          )}

          {/* Related tools */}
          {relatedTools.length > 0 && (
            <section>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Related Tools
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Explore other useful developer tools.
                  </p>
                </div>

                <Link
                  to="/tools"
                  className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 sm:flex"
                >
                  View all
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {relatedTools.slice(0, 4).map((tool) => (
                  <ToolCard key={tool.path} tool={tool} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
