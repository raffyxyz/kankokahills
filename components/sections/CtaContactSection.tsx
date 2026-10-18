import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SiteConfig } from "@/content/types";

export interface CtaContactSectionProps {
  siteConfig: SiteConfig;
}

const phoneHref = (value: string) => `tel:${value.replace(/[^0-9+]/g, "")}`;

export function CtaContactSection({ siteConfig }: CtaContactSectionProps) {
  const rows = [
    {
      label: "Office",
      value: siteConfig.contact.tourismOffice,
      href: undefined as string | undefined,
    },
    {
      label: "Landline",
      value: siteConfig.contact.phone,
      href: phoneHref(siteConfig.contact.phone),
    },
    {
      label: "Mobile",
      value: siteConfig.contact.mobile,
      href: phoneHref(siteConfig.contact.mobile),
    },
    {
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      label: "Facebook",
      value: "Official page",
      href: siteConfig.contact.facebookUrl,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-ink text-chalk relative overflow-hidden"
    >
      <Container className="py-18 sm:py-22 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-display font-heading max-w-[14ch]">
              Stand above the hills of Candijay
            </h2>

            <p className="text-lead text-chalk/75 mt-6 max-w-[46ch]">
              Whether you are chasing the golden sunset or breathing in the cool
              morning mist, Kankoka Hills invites you to experience Bohol from a
              rare perspective.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button
                href={siteConfig.location.googleMapsUrl}
                variant="light"
                size="lg"
                isExternal
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Get directions to the summit
              </Button>

              <a
                href="#tips"
                className="focus-visible:ring-solar text-chalk/80 decoration-chalk/40 hover:text-chalk hover:decoration-chalk focus-visible:ring-offset-ink text-[15px] underline decoration-1 underline-offset-[6px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Review visitor guidelines
              </a>
            </div>
          </div>

          {/* Contact as a ruled ledger */}
          <div className="lg:col-span-5">
            <p className="text-chalk/60 max-w-[40ch] text-[14px] leading-relaxed">
              Inquiries for guided tours or barangay permits can be coordinated
              directly with the municipal office.
            </p>

            <dl className="border-chalk/20 mt-6 border-t">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="border-chalk/15 flex items-baseline gap-3 border-b py-3"
                >
                  <dt className="text-chalk/55 shrink-0 text-[13px]">
                    {row.label}
                  </dt>
                  <span
                    className="border-chalk/25 flex-1 -translate-y-1 border-b border-dotted"
                    aria-hidden="true"
                  />
                  <dd className="text-datum shrink-0 font-medium">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={
                          row.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          row.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="focus-visible:ring-solar hover:text-solar rounded-[2px] break-all transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
