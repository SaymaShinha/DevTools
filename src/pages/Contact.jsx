import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured correctly. Please try again later.",
      });

      return;
    }

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for contacting us!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "We couldn't send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact DevTools | Get in Touch"
        description="Contact DevTools with questions, suggestions, feedback, or reports about our free online developer tools."
        canonical="https://devtools-toolkit.vercel.app/contact"
      />

      <main className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
                <MessageSquare size={16} />
                Contact DevTools
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                We'd love to hear from you.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Have a question, suggestion, feature request, or found an issue
                with one of our tools? Send us a message and we'll do our best
                to help.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left side */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Get in touch
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  We value feedback from developers and users. Whether you have
                  a question about a tool, found an issue, or have an idea for
                  improving the website, your message is welcome.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Mail size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Contact Support
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Send us your question or report a problem with one of
                        the tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <MessageSquare size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Suggestions
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Have an idea for a new developer tool? We'd like to hear
                        it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Useful links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-bold text-slate-950">
                  Explore DevTools
                </h2>

                <div className="mt-5 space-y-3">
                  <Link
                    to="/tools"
                    className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <span className="font-medium text-slate-700">
                      Browse all tools
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                    />
                  </Link>

                  <Link
                    to="/about"
                    className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <span className="font-medium text-slate-700">
                      About DevTools
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form below and we'll receive your message
                  directly.
                </p>
              </div>

              {/* Success/Error */}
              {status.message && (
                <div
                  role="alert"
                  className={`mb-6 flex gap-3 rounded-xl border p-4 ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="mt-0.5 shrink-0" />
                  )}

                  <p className="text-sm leading-6">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    minLength={3}
                    maxLength={150}
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-900"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>

                    <span className="text-xs text-slate-400">
                      {formData.message.length}/5000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={7}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  Please do not include passwords, API keys, private keys, or
                  other sensitive information.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
