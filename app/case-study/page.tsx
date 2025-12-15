"use client";

import React from "react";
import Link from "next/link";

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 selection:bg-sky-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 px-6 py-4 backdrop-blur-md">
                <div className="mx-auto flex max-w-5xl items-center justify-between">
                    <Link
                        href="/"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-sky-300"
                    >
                        ← Back to Dashboard
                    </Link>
                    <span className="text-xs font-medium text-slate-600">
                        Case Study · 2025
                    </span>
                </div>
            </nav>

            <div className="mx-auto max-w-3xl px-6 pb-32 pt-32">
                {/* HERO SECTION */}
                <header className="mb-20 animate-fade-in-up">
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                        MortgageOps — Home Lending Portfolio Control Tower
                    </h1>
                    <section className="mb-12 grid grid-cols-2 gap-y-8 gap-x-12 border-y border-slate-800 py-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Role
                            </h3>
                            <p className="text-sm font-medium text-slate-200">
                                Product Mgmt &<br />Systems Design
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Context
                            </h3>
                            <p className="text-sm font-medium text-slate-200">
                                JPMorgan Chase <br />(Hypothetical)
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Domain
                            </h3>
                            <p className="text-sm font-medium text-slate-200">
                                Fintech Ops &<br />Home Lending
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Status
                            </h3>
                            <p className="text-sm font-medium text-emerald-400">
                                Live Prototype
                            </p>
                        </div>
                    </section>
                </header>

                {/* SECTION 1: THE PROBLEM */}
                <section className="mb-24 space-y-6">
                    <SectionHeader number="01" title="The Problem" />
                    <h2 className="text-2xl font-semibold leading-snug text-slate-100">
                        Home lending is effectively a relay race played in the dark.
                    </h2>
                    <div className="space-y-4 text-lg leading-relaxed text-slate-400">
                        <p>
                            A single mortgage travels through dozens of hands—from origination
                            to underwriting, closing, and funding. In most organizations, each stage
                            lives in its own siloed tool.
                        </p>
                        <p>
                            The result? <strong>Operational blindness.</strong>
                        </p>
                        <p>
                            Program Managers can't see a bottleneck until it has already caused
                            an SLA breach. Executives rely on lagging weekly reports to understand
                            Monday's problems. By the time a risk is flagged, the customer experience
                            has already degraded.
                        </p>
                    </div>
                </section>

                {/* SECTION 2: PRODUCT STRATEGY */}
                <section className="mb-24 space-y-8">
                    <SectionHeader number="02" title="Product Strategy" />

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-100">Reactive → Proactive</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                The core shift was moving from "reporting what happened" to "predicting what will happen."
                                Traditional dashboards are tombstones; MortgageOps is a radar system.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-100">The "Control Tower" Metaphor</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                This tool is designed for intervention. It borrows from aviation control towers:
                                high visibility, real-time data ingestion, and a focus on exception handling rather than routine flow.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sky-900/30 bg-sky-950/10 p-6">
                        <p className="text-base font-medium italic text-sky-200">
                            "The goal isn't just to see the risk—it's to intervene before the customer feels it."
                        </p>
                    </div>
                </section>


                {/* SECTION 3: THE USERS */}
                <section className="mb-24">
                    <SectionHeader number="03" title="Who This Is For" />
                    <div className="grid gap-6 md:grid-cols-2">
                        <UserCard
                            title="Head of Lending Operations"
                            needs={[
                                "A single source of truth for portfolio health.",
                                "Early warning signs before quarterly goals are missed.",
                                "Ability to reallocate resources dynamically."
                            ]}
                            gets="A real-time 'Control Tower' view to govern the entire machine, not just read reports."
                        />
                        <UserCard
                            title="Technical Program Manager (TPM)"
                            needs={[
                                "Granular visibility into specific program bottlenecks.",
                                "Data to hold vendor partners (Appraisal, Title) accountable.",
                                "Less time chasing status updates."
                            ]}
                            gets="Automated risk detection that highlights exactly where to intervene today."
                        />
                    </div>
                </section>

                {/* SECTION 4: THE SOLUTION ARCHITECTURE */}
                <section className="mb-24 space-y-6">
                    <SectionHeader number="04" title="The Solution" />
                    <h2 className="text-2xl font-semibold leading-snug text-slate-100">
                        Architecture of an Intervention Engine
                    </h2>
                    <div className="space-y-4 text-lg leading-relaxed text-slate-400">
                        <p>
                            MortgageOps isn't just a UI wrapper. The architectural challenge was normalizing status signals from three distinct systems of record (Origination, Underwriting, Closing) into a unified "Execution State."
                        </p>
                    </div>

                    <div className="mt-8 grid gap-8 rounded-xl border border-slate-800 bg-slate-900/30 p-8 md:grid-cols-3">
                        <Feature
                            title="Unified State Layer"
                            text="Ingests status from disparite origination and closing systems into one normalized schema."
                        />
                        <Feature
                            title="Predictive SLA Engine"
                            text="Calculates 'Current Age' vs 'SLA' in real-time to forecast breaches days in advance."
                        />
                        <Feature
                            title="Intervention Logic"
                            text="Doesn't just show data—rules engine suggests specific actions (e.g., 'Rebalance Staff') to fix issues."
                        />
                    </div>
                </section>

                {/* SECTION 5: KEY FLOWS (DEEP DIVE) */}
                <section className="mb-24">
                    <SectionHeader number="05" title="Key Workflow Deep Dive" />
                    <div className="space-y-12">
                        <FlowStep
                            number={1}
                            title="The Pulse Check"
                            goal="Identify portfolio health in < 30 seconds."
                            friction="Navigating 4 different Tableau dashboards and Excel sheets."
                            fix="A single 'Red/Yellow/Green' scan. If it's red, it needs attention. No vanity metrics."
                        />
                        <FlowStep
                            number={2}
                            title="Drill Down Diagnosis"
                            goal=" Understand *why* a program is failing."
                            friction="Emailing a program manager and waiting 4 hours for a root cause."
                            fix="Clicking 'Retail Purchase Loans' instantly reveals 'Appraisal Backlog' as the bottleneck."
                        />
                        <FlowStep
                            number={3}
                            title="Operational Intervention"
                            goal="Fix the issue before it impacts the customer."
                            friction="Ad-hoc meetings to decide on a remediation plan."
                            fix="The system suggests: 'Rebalance Appraisal Vendors'. The leader approves instantly."
                        />
                    </div>
                </section>

                {/* SECTION 6: DESIGN RATIONALE */}
                <section className="mb-24 space-y-6">
                    <SectionHeader number="06" title="Design Decisions" />
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                            <h4 className="mb-2 font-bold text-slate-100">Why Dark Mode?</h4>
                            <p className="text-sm text-slate-400">
                                This isn't just aesthetic. Operations centers and trading floors often run 24/7.
                                Dark interfaces reduce eye strain and mirror the high-density information environments (Bloomberg, Cockpits) that operators are used to.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                            <h4 className="mb-2 font-bold text-slate-100">Exception-Based Design</h4>
                            <p className="text-sm text-slate-400">
                                We removed all "Green" signals from the primary view. If a program is running well, it disappears.
                                This cognitive decluttering forces focus solely on what is broken.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: SUCCESS METRICS */}
                <section className="mb-24">
                    <SectionHeader number="07" title="Success Metrics (Modeled)" />
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            <MetricItem
                                value="18%"
                                label="Reduction in SLA Breaches"
                                desc="Driven by 3-day early warning system."
                            />
                            <MetricItem
                                value="30%"
                                label="Ops Capacity Saved"
                                desc="Reduction in status-check emails and meetings."
                            />
                            <MetricItem
                                value="100%"
                                label="Vendor Visibility"
                                desc="First-time tracking of 3rd party turn-times."
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="flex flex-col items-center justify-center space-y-6 rounded-2xl border border-dashed border-slate-700 py-16 text-center">
                    <p className="max-w-md text-center text-lg text-slate-400">
                        Ready to see the intervention model in action?
                    </p>
                    <Link
                        href="/"
                        className="rounded-full bg-sky-500 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                    >
                        Launch Live Prototype
                    </Link>
                </section>

            </div>
        </main>
    );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
    return (
        <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-sky-500">{number}</span>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {title}
            </h3>
        </div>
    );
}

function UserCard({ title, needs, gets }: { title: string; needs: string[]; gets: string }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <h4 className="mb-4 font-bold text-slate-100">{title}</h4>
            <div className="mb-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Needs</p>
                <ul className="list-disc space-y-1 pl-4 text-sm text-slate-400 marker:text-slate-600">
                    {needs.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
            </div>
            <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-sky-500">Value Prop</p>
                <p className="text-sm font-medium text-sky-100">{gets}</p>
            </div>
        </div>
    );
}

function Feature({ title, text }: { title: string; text: string }) {
    return (
        <div>
            <h4 className="mb-2 font-bold text-slate-200">{title}</h4>
            <p className="text-sm leading-relaxed text-slate-400">{text}</p>
        </div>
    );
}

function FlowStep({ number, title, goal, friction, fix }: { number: number; title: string; goal: string; friction: string; fix: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-sm font-bold text-white group-hover:bg-sky-500 group-hover:border-sky-500 transition-colors">
                {number}
            </div>
            <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-100">{title}</h4>
                <div className="grid gap-4 border-l-2 border-slate-800 pl-4 py-1">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Goal</span>
                        <p className="text-sm text-slate-300">{goal}</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500/70">Friction</span>
                        <p className="text-sm text-slate-400">{friction}</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/70">The Fix</span>
                        <p className="text-sm text-slate-300">{fix}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricItem({ value, label, desc }: { value: string; label: string; desc: string }) {
    return (
        <div className="flex flex-col">
            <span className="text-4xl font-bold text-sky-400">{value}</span>
            <span className="mt-1 text-sm font-bold text-slate-200">{label}</span>
            <span className="mt-1 text-xs text-slate-500">{desc}</span>
        </div>
    );
}
