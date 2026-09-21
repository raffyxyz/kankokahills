import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { VisitorTipsContent } from "@/content/visitorTips";

export interface VisitorTipsSectionProps {
  content: VisitorTipsContent;
}

export function VisitorTipsSection({ content }: VisitorTipsSectionProps) {
  return (
    <section id="tips" className="bg-warm-cream text-charcoal py-20 sm:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <RevealOnScroll>
            <span className="text-forest-green text-xs font-bold tracking-widest uppercase">
              {content.eyebrow}
            </span>
            <h2 className="font-heading text-fluid-h1 text-charcoal mt-2 font-serif font-bold tracking-tight">
              {content.title}
            </h2>
            <p className="text-fluid-lead text-slate-muted mx-auto mt-4 max-w-2xl">
              {content.description}
            </p>
          </RevealOnScroll>
        </div>

        {/* What to Bring Grid */}
        <div className="mb-16">
          <RevealOnScroll>
            <h3 className="text-charcoal/70 mb-6 text-center text-xs font-bold tracking-wider uppercase">
              What to Bring & Pack
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.whatToBring.map((tip, idx) => (
              <RevealOnScroll key={tip.title} delayMs={idx * 100}>
                <div className="bg-sand-white border-charcoal/5 flex h-full flex-col justify-between rounded-2xl border p-6 shadow-xs">
                  <div className="space-y-4">
                    <div className="bg-forest-green/10 text-forest-green flex h-10 w-10 items-center justify-center rounded-xl font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="font-heading text-charcoal font-serif text-lg font-bold">
                      {tip.title}
                    </h4>
                    <ul className="text-slate-muted space-y-2 text-xs sm:text-sm">
                      {tip.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-forest-green font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Fees, Hours & Facility Notices */}
        <RevealOnScroll delayMs={100}>
          <div className="bg-sand-white border-charcoal/5 mx-auto mb-16 max-w-4xl space-y-6 rounded-3xl border p-8 shadow-md">
            <div className="border-charcoal/10 flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-amber-glow text-xs font-bold tracking-wider uppercase">
                  Official Visitor Notice
                </span>
                <h3 className="font-heading text-charcoal mt-1 font-serif text-2xl font-bold">
                  Fees, Hours & Facilities
                </h3>
              </div>
              <Badge variant="todo">Pending Municipal Verification</Badge>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="bg-warm-cream border-charcoal/5 rounded-xl border p-4">
                <span className="text-slate-muted mb-1 block text-xs font-semibold uppercase">
                  Entrance Fee
                </span>
                <p className="rounded border border-dashed border-amber-300 bg-amber-100/70 p-2 font-mono text-sm font-bold text-amber-900">
                  {content.feesAndHours.entranceFee}
                </p>
                <span className="text-slate-muted mt-2 block text-[11px]">
                  Community & maintenance fee
                </span>
              </div>

              <div className="bg-warm-cream border-charcoal/5 rounded-xl border p-4">
                <span className="text-slate-muted mb-1 block text-xs font-semibold uppercase">
                  Visiting Hours
                </span>
                <p className="rounded border border-dashed border-amber-300 bg-amber-100/70 p-2 font-mono text-sm font-bold text-amber-900">
                  {content.feesAndHours.operatingHours}
                </p>
                <span className="text-slate-muted mt-2 block text-[11px]">
                  Dawn through twilight recommended
                </span>
              </div>

              <div className="bg-warm-cream border-charcoal/5 rounded-xl border p-4">
                <span className="text-slate-muted mb-1 block text-xs font-semibold uppercase">
                  Parking
                </span>
                <p className="rounded border border-dashed border-amber-300 bg-amber-100/70 p-2 font-mono text-sm font-bold text-amber-900">
                  {content.feesAndHours.parkingInfo}
                </p>
                <span className="text-slate-muted mt-2 block text-[11px]">
                  Near jump-off trail
                </span>
              </div>
            </div>

            <div className="text-slate-muted bg-warm-cream border-charcoal/5 rounded-xl border p-4 text-xs leading-relaxed sm:text-sm">
              <strong className="text-charcoal">
                Facilities & Amenities:{" "}
              </strong>
              {content.feesAndHours.facilitiesNotice}
            </div>
          </div>
        </RevealOnScroll>

        {/* Leave No Trace Principles Card */}
        <RevealOnScroll delayMs={200}>
          <div className="bg-forest-green text-warm-cream mx-auto max-w-4xl rounded-3xl p-8 shadow-xl sm:p-10">
            <div className="mb-8 space-y-3 text-center sm:text-left">
              <span className="text-grass-green-light text-xs font-bold tracking-widest uppercase">
                Environmental Stewardship
              </span>
              <h3 className="font-heading text-warm-cream font-serif text-2xl font-bold sm:text-3xl">
                {content.leaveNoTrace.title}
              </h3>
              <p className="text-warm-cream/80 max-w-2xl text-sm sm:text-base">
                {content.leaveNoTrace.subtitle}
              </p>
            </div>

            <div className="border-warm-cream/15 grid grid-cols-1 gap-6 border-t pt-4 sm:grid-cols-2">
              {content.leaveNoTrace.principles.map((p, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-heading text-soft-gold flex items-center gap-2 font-serif text-lg font-bold">
                    <span className="bg-forest-green-dark text-soft-gold rounded-full px-2 py-0.5 font-mono text-xs">
                      0{idx + 1}
                    </span>
                    {p.title}
                  </h4>
                  <p className="text-warm-cream/75 text-xs leading-relaxed sm:text-sm">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
