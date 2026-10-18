import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { VisitorTipsContent } from "@/content/visitorTips";

export interface VisitorTipsSectionProps {
  content: VisitorTipsContent;
}

const feeRows = (content: VisitorTipsContent) => [
  { label: "Entrance fee", value: content.feesAndHours.entranceFee },
  { label: "Visiting hours", value: content.feesAndHours.operatingHours },
  { label: "Parking", value: content.feesAndHours.parkingInfo },
];

export function VisitorTipsSection({ content }: VisitorTipsSectionProps) {
  return (
    <section id="tips" className="bg-chalk pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <div className="rail-grid rail-rule">
          <div className="rail">
            <p className="rail-label">Visitor tips</p>
            <p className="text-datum text-ink-soft mt-2">
              5:30 AM –
              <br />
              7:00 PM daily
            </p>
          </div>

          <div className="rail-body">
            <h2 className="font-heading text-h1 text-ink max-w-[17ch]">
              {content.title}
            </h2>
            <p className="text-lead text-ink-soft mt-4 max-w-[54ch]">
              {content.description}
            </p>

            {/* What to bring — ruled columns, no box */}
            <div className="mt-12">
              <h3 className="font-heading text-h2">What to bring</h3>

              <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {content.whatToBring.map((tip) => (
                  <div
                    key={tip.title}
                    className="border-mist border-t pt-4 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
                  >
                    <h4 className="font-heading text-h3">{tip.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {tip.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-ink-soft flex gap-2 text-[13px] leading-relaxed"
                        >
                          <svg
                            className="text-pine mt-1 h-3.5 w-3.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees and hours as a spec sheet */}
            <div className="border-mist mt-14 border-t pt-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="font-heading text-h2">
                  Fees, hours &amp; facilities
                </h3>
                <Badge variant="todo">Pending municipal verification</Badge>
              </div>

              <dl className="mt-6 max-w-3xl">
                {feeRows(content).map((row) => (
                  <div
                    key={row.label}
                    className="border-mist/70 flex w-full items-baseline gap-3 border-b py-3.5"
                  >
                    <dt className="text-ink-soft text-[14px]">{row.label}</dt>
                    <span
                      className="border-mist flex-1 -translate-y-1 border-b border-dotted"
                      aria-hidden="true"
                    />
                    <dd className="text-datum text-ink shrink-0 font-semibold">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-ink-soft mt-5 max-w-[70ch] text-[13px] leading-relaxed">
                <span className="text-ink font-semibold">
                  Facilities &amp; amenities:
                </span>{" "}
                {content.feesAndHours.facilitiesNotice}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Stewardship gets the page's only solid green band */}
      <div className="bg-pine text-chalk mt-16">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h3 className="font-heading text-h1 max-w-[14ch]">
                {content.leaveNoTrace.title}
              </h3>
              <p className="text-chalk/75 mt-4 max-w-[42ch] text-[15px] leading-relaxed">
                {content.leaveNoTrace.subtitle}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {content.leaveNoTrace.principles.map((p, idx) => (
                <div key={idx} className="border-chalk/20 border-t pt-4">
                  <h4 className="text-solar font-heading text-[17px] font-medium">
                    {p.title}
                  </h4>
                  <p className="text-chalk/75 mt-1.5 text-[13px] leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
