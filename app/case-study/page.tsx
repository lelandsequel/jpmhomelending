import Link from "next/link";

export const metadata = {
  title: "MortgageOps Case Study — Home Lending Portfolio Control Tower",
  description:
    "A portfolio-operations case study for a hypothetical JPMorgan Chase Home Lending control tower."
};

const Section = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold text-slate-50">{title}</h2>
    <div className="text-sm leading-relaxed text-slate-300">{children}</div>
  </section>
);

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            MortgageOps · Product Case Study
          </p>
          <h1 className="text-3xl font-semibold text-slate-50">
            Portfolio-level execution control for Home Lending
          </h1>
          <p className="text-sm text-slate-300 max-w-3xl">
            MortgageOps is a hypothetical internal control tower designed for
            Home Lending portfolio leadership. It gives executives and TPMs a
            single operational truth across origination, underwriting, closing,
            and funding — enabling earlier intervention and fewer surprises.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 hover:bg-sky-400/20"
          >
            Open the live control tower ↗
          </Link>
        </header>

        <Section title="The problem (as it shows up in real life)">
          <p>
            Home Lending portfolios span dozens of programs, vendors, and
            technology teams. Status lives across Jira, spreadsheets, vendor
            portals, and weekly readouts.
          </p>
          <p className="mt-2">
            By the time leadership hears about an issue, SLAs are already
            breached, customer experience is degraded, and teams are in
            firefighting mode.
          </p>
        </Section>

        <Section title="What MortgageOps does differently">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Treats the <strong>portfolio</strong> as the unit of work — not
              individual projects.
            </li>
            <li>
              Surfaces <strong>risk early</strong> using SLA age, bottlenecks,
              and ownership signals.
            </li>
            <li>
              Focuses on <strong>intervention</strong>, not reporting.
            </li>
          </ul>
        </Section>

        <Section title="Primary users">
          <ul className="list-disc pl-5 space-y-2">
            <li>Home Lending Portfolio Operations leadership</li>
            <li>Technical Program Managers</li>
            <li>Product & Ops executives running weekly reviews</li>
          </ul>
        </Section>

        <Section title="Success metrics">
          <ul className="list-disc pl-5 space-y-2">
            <li>Earlier identification of SLA breach risk</li>
            <li>Reduced last-minute escalations</li>
            <li>Clear ownership for portfolio interventions</li>
            <li>Fewer surprises in executive reviews</li>
          </ul>
        </Section>

        <Section title="My role">
          <p>
            I would own product strategy, operational modeling, UX for executive
            decision-making, and alignment between technology delivery and
            business outcomes.
          </p>
        </Section>

        <footer className="pt-6">
          <Link
            href="/"
            className="text-sm text-sky-300 hover:text-sky-200"
          >
            ← Back to control tower
          </Link>
        </footer>
      </div>
    </main>
  );
}
