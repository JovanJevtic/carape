"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            Contact
          </p>
          <h1 className="font-display text-h1 text-text-primary">
            We&apos;d Love to
            <span className="block text-accent">Hear From You</span>
          </h1>
          <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about our products, need help with
            sizing, or just want to say hello — we&apos;re always happy to
            connect.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 lg:pb-28">
        <div className="container max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-sm border border-accent/30 bg-accent-subtle p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <span className="text-xl text-accent">✓</span>
                  </div>
                  <h3 className="font-display text-xl text-text-primary">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-text-muted">
                    Thank you, {form.name}. We&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                      Subject
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Inquiry</option>
                      <option value="sizing">Sizing Help</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale & Partnerships</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-12 w-full rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@enpointe.eu"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  hello@enpointe.eu
                </a>
              </div>

              {/* Response Time */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted mb-2">
                  Response Time
                </h3>
                <p className="text-text-primary">Within 24 hours</p>
                <p className="text-text-muted text-sm mt-1">
                  Monday – Friday, 9:00 – 18:00 CET
                </p>
              </div>

              {/* Headquarters */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted mb-2">
                  Headquarters
                </h3>
                <p className="text-text-primary">Europe</p>
                <p className="text-text-muted text-sm mt-1">
                  We ship internationally to all EU countries, the UK,
                  Switzerland, and the Western Balkans.
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted mb-2">
                  Follow Us
                </h3>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    TikTok
                  </a>
                </div>
              </div>

              {/* FAQ callout */}
              <div className="rounded-sm border border-bg-surface p-5">
                <h3 className="text-sm font-medium text-text-primary mb-2">
                  Common Questions
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>
                    <span className="text-accent mr-2">→</span>
                    Free shipping on orders over €100
                  </li>
                  <li>
                    <span className="text-accent mr-2">→</span>
                    30-day return policy, no questions asked
                  </li>
                  <li>
                    <span className="text-accent mr-2">→</span>
                    Size guide available on every product page
                  </li>
                  <li>
                    <span className="text-accent mr-2">→</span>
                    Tracking provided for all international orders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
