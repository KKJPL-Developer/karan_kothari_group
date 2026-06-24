import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Karan Kothari Group",
  description:
    "Get in touch with Karan Kothari Group — for business enquiries, partnerships, and general queries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* ── Page Hero ── */}
      <section className="bg-[#101828] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Get in touch
          </p>
          <h1
            className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let&apos;s Build Something Together
          </h1>
          <p className="mt-5 max-w-lg text-base text-zinc-400">
            Whether you have a business enquiry, partnership opportunity, or just want to learn more about the KK Group — we&apos;re here.
          </p>
        </div>
      </section>

      {/* ── Contact content ── */}
      <section className="bg-[#FAFAF8] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          {/* Left — Office info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-base font-semibold uppercase tracking-widest text-[#C9A84C]">
                Head Office
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-900">
                Karan Kothari Group<br />
                1st Floor, Nikalas Mandir Rd, Itwari,<br />
                Nagpur, Maharashtra - 440002<br />
                India
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:99999999999"
                className="flex items-center gap-3 text-sm text-[#0E0F11] transition-colors hover:text-[#C9A84C]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#C9A84C]">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.47 11.47 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                  </svg>
                </span>
                +91 99999 99999
              </a>
              <a
                href="mailto:info@karankotharigroup.com"
                className="flex items-center gap-3 text-sm text-[#0E0F11] transition-colors hover:text-[#C9A84C]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#C9A84C]">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                info@karankotharigroup.com
              </a>
            </div>

            <div>
              <p className="text-base font-semibold uppercase tracking-widest text-[#C9A84C]">Business Hours</p>
              <p className="mt-2 text-sm text-gray-900">
                All Days : 9:00 AM – 6:00 PM IST<br />
               
              </p>
            </div>

            <div>
              <p className="text-base font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Our Businesses</p>
              <div className="flex flex-col gap-2 text-sm text-gray-900">
                <span>Karan Kothari Jewellery — Fine jewellery enquiries</span>
                <span> Truevaluespaces — Storage &amp; logistics partnerships</span>
                <span>Karan Kothari Business Parks — Commercial space leasing</span>
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <form
            action="mailto:info@karankotharigroup.com"
            method="post"
            className="flex flex-col gap-5 rounded-2xl border border-[#E4E3DE] bg-white p-8"
          >
            <h2
              className="text-2xl font-semibold text-[#0E0F11]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Send Us a Message
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#6B7280]">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  className="w-full rounded-xl border border-[#E4E3DE] bg-[#FAFAF8] px-4 py-3 text-sm text-[#0E0F11] placeholder-zinc-400 outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#6B7280]">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  className="w-full rounded-xl border border-[#E4E3DE] bg-[#FAFAF8] px-4 py-3 text-sm text-[#0E0F11] placeholder-zinc-400 outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-[#6B7280]">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-[#E4E3DE] bg-[#FAFAF8] px-4 py-3 text-sm text-[#0E0F11] outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              >
                <option value="">Select a subject</option>
                <option value="general">General Enquiry</option>
                <option value="partnership">Business Partnership</option>
                <option value="jewellery">KK Jewellery</option>
                <option value="warehousing">KK Warehousing</option>
                <option value="business-parks">KK Business Parks</option>
                <option value="careers">Careers</option>
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-[#6B7280]">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-[#E4E3DE] bg-[#FAFAF8] px-4 py-3 text-sm text-[#0E0F11] placeholder-zinc-400 outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[#6B7280]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your enquiry or project..."
                className="w-full resize-none rounded-xl border border-[#E4E3DE] bg-[#FAFAF8] px-4 py-3 text-sm text-[#0E0F11] placeholder-zinc-400 outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-8 text-sm font-semibold text-[#101828] transition-all duration-200 hover:bg-[#A07830]"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
