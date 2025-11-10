import Link from "next/link";
import { services, caseStudies } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Ahmed Elfar</div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:text-brand-700">About</a>
            <a href="#services" className="hover:text-brand-700">Services</a>
            <a href="#work" className="hover:text-brand-700">Work</a>
            <a href="#contact" className="hover:text-brand-700">Contact</a>
          </nav>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
            >
              Work with me
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Digital Marketing Specialist
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I combine data-driven strategy with engaging visual content to build impactful
              campaigns and grow brand presence effectively.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
              >
                Request CV
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-brand-50 to-white border border-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl">????</div>
                <div className="mt-3 text-sm text-gray-500">Strategy ? Creative ? Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">About Ahmed</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I?m a versatile digital marketing specialist with a strong creative mindset and
              hands-on expertise across the digital landscape. I build data-informed, multi-channel
              strategies that connect with audiences and drive measurable growth.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I?ve led initiatives for website design, performance marketing, content production,
              SEO, and social media?adapting to different industries and business goals.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Website Design",
              "Paid Ads (Meta/Google/TikTok)",
              "Content Strategy & Production",
              "SEO & Content Marketing",
              "Email & CRM Journeys",
              "Analytics & Reporting",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-gray-100 p-4">
                <div className="font-medium">{item}</div>
                <div className="text-sm text-gray-500">Expertise</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="border-t border-gray-100 bg-gray-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="text-xs bg-gray-100 rounded px-2 py-1 text-gray-700">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Selected Work</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <article key={c.title} className="overflow-hidden rounded-xl border border-gray-200">
                <div className="aspect-video bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-500">{c.category}</div>
                  <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.results.map((r) => (
                      <li key={r} className="text-xs bg-green-50 text-green-800 rounded px-2 py-1">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-gray-100 bg-gray-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Let?s build something impactful</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Share your goals, timelines, and budget. I?ll come back with an actionable
              plan and quick wins to get momentum.
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm text-gray-600">Email</div>
              <Link
                href="mailto:contact@ahmedelfar.com?subject=Project%20Inquiry%20-%20Digital%20Marketing"
                className="mt-1 block text-lg font-semibold text-brand-700 hover:underline"
              >
                contact@ahmedelfar.com
              </Link>
              <div className="mt-4 text-sm text-gray-600">LinkedIn</div>
              <Link
                href="https://www.linkedin.com/"
                className="mt-1 block text-lg font-semibold text-brand-700 hover:underline"
              >
                linkedin.com/in/ahmed-elfar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
          <div>? {new Date().getFullYear()} Ahmed Elfar</div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#work" className="hover:text-gray-700">Work</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
