"use client";

import React, { useMemo } from "react";

type Program = {
  id: string;
  name: string;
  stage: "Origination" | "Underwriting" | "Closing" | "Funding";
  slaDays: number;
  currentAge: number;
  risk: "Low" | "Medium" | "High";
  primaryBottleneck: string;
  owner: string;
};

const PROGRAMS: Program[] = [
  {
    id: "HL-01",
    name: "Retail Purchase Loans",
    stage: "Underwriting",
    slaDays: 15,
    currentAge: 18,
    risk: "High",
    primaryBottleneck: "Appraisal backlog",
    owner: "Underwriting Ops"
  },
  {
    id: "HL-02",
    name: "Refinance Pipeline",
    stage: "Origination",
    slaDays: 10,
    currentAge: 7,
    risk: "Low",
    primaryBottleneck: "None",
    owner: "Retail Lending"
  },
  {
    id: "HL-03",
    name: "Jumbo Loans",
    stage: "Closing",
    slaDays: 8,
    currentAge: 9,
    risk: "Medium",
    primaryBottleneck: "Title vendor delays",
    owner: "Closing Ops"
  },
  {
    id: "HL-04",
    name: "Government Loans (FHA/VA)",
    stage: "Funding",
    slaDays: 5,
    currentAge: 6,
    risk: "Medium",
    primaryBottleneck: "Document defects",
    owner: "Funding Ops"
  }
];

const riskStyles = {
  High: "bg-rose-500/15 text-rose-200 border-rose-500/40",
  Medium: "bg-amber-400/15 text-amber-200 border-amber-400/40",
  Low: "bg-emerald-500/15 text-emerald-200 border-emerald-500/40"
};

export default function Page() {
  const metrics = useMemo(() => {
    const total = PROGRAMS.length;
    const high = PROGRAMS.filter(p => p.risk === "High").length;
    const breached = PROGRAMS.filter(p => p.currentAge > p.slaDays).length;

    return { total, high, breached };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              MortgageOps · Home Lending Portfolio Control Tower
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50">
              Portfolio-level execution visibility for Home Lending
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              A single operational view for executives and TPMs to track delivery health,
              surface risk early, and intervene before SLAs or customer experience are impacted.
            </p>
          </div>
          <a
            href="/case-study"
            className="flex-none rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            View Case Study
          </a>
        </header>

        {/* Metrics */}
        <section className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Programs in Portfolio" value={metrics.total.toString()} />
          <MetricCard label="SLA Breaches" value={metrics.breached.toString()} />
          <MetricCard label="High-Risk Programs" value={metrics.high.toString()} />
        </section>

        {/* Financial Exposure */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <ExposureCard
            label="Estimated SLA Penalty Exposure"
            value="$4.2M"
            note="Driven by appraisal and title delays in high-volume programs."
          />
          <ExposureCard
            label="Customer Attrition Risk"
            value="Medium–High"
            note="Concentrated in Jumbo and Government loan segments."
          />
          <ExposureCard
            label="Operational Rework Cost"
            value="$1.1M / quarter"
            note="Document defects and downstream corrections."
          />
        </section>

        {/* Programs Table */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/70">
          <div className="border-b border-slate-800 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Active Programs
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-950">
                <tr className="text-left text-slate-400">
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">SLA</th>
                  <th className="px-4 py-3">Current Age</th>
                  <th className="px-4 py-3">Risk</th>
                  <th className="px-4 py-3">Bottleneck</th>
                  <th className="px-4 py-3">Owner</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map(p => (
                  <tr key={p.id} className="border-t border-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-100">
                      {p.name}
                    </td>
                    <td className="px-4 py-3 text-slate-300">{p.stage}</td>
                    <td className="px-4 py-3 text-slate-300">{p.slaDays}d</td>
                    <td className="px-4 py-3 text-slate-300">
                      {p.currentAge}d
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full border px-2 py-1 text-xs ${riskStyles[p.risk]}`}
                      >
                        {p.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {p.primaryBottleneck}
                    </td>
                    <td className="px-4 py-3 text-slate-300">{p.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dependency Map */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Program Dependencies (Simplified)
          </p>
          <p className="mt-2 text-sm text-slate-300 max-w-3xl">
            Portfolio risk often emerges at dependency boundaries — vendors,
            shared services, and downstream teams. This view highlights where
            multiple programs rely on the same constraint.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <DependencyCard
              title="Appraisal Vendors"
              impacted={["Retail Purchase Loans", "Jumbo Loans"]}
              risk="High"
            />
            <DependencyCard
              title="Title & Closing Vendors"
              impacted={["Jumbo Loans", "Government Loans"]}
              risk="Medium"
            />
            <DependencyCard
              title="Funding Ops Capacity"
              impacted={["Government Loans"]}
              risk="Medium"
            />
          </div>
        </section>

        {/* Recommendations */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Portfolio Interventions (Suggested)
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Rebalance appraisal vendors to relieve underwriting backlog.</li>
            <li>• Escalate title SLAs for Jumbo loans approaching breach.</li>
            <li>• Preemptively staff funding ops to reduce defect rework.</li>
          </ul>
        </section>

        {/* Light PM context */}
        <footer className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-sm text-slate-300">
          <p className="font-semibold text-slate-100">Product intent</p>
          <p className="mt-2">
            MortgageOps is designed as a portfolio control plane — not a reporting dashboard.
            It emphasizes early risk detection, clear ownership, and actionable intervention
            for executive and TPM leadership.
          </p>
        </footer>
      </div>
    </main>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-slate-50">{value}</p>
    </div>
  );
}

function DependencyCard({
  title,
  impacted,
  risk
}: {
  title: string;
  impacted: string[];
  risk: "Low" | "Medium" | "High";
}) {
  const riskStyle = {
    High: "text-rose-200 border-rose-500/40 bg-rose-500/10",
    Medium: "text-amber-200 border-amber-400/40 bg-amber-400/10",
    Low: "text-emerald-200 border-emerald-500/40 bg-emerald-500/10"
  }[risk];

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-slate-100">{title}</p>
        <span className={`rounded-full border px-2 py-1 text-xs ${riskStyle}`}>
          {risk}
        </span>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-slate-300">
        {impacted.map(p => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}

function ExposureCard({
  label,
  value,
  note
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-slate-50">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{note}</p>
    </div>
  );
}
