import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AboutContent } from "@/content/about";

export interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="bg-chalk py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rail-grid rail-rule">
          {/* Margin: orientation */}
          <div className="rail">
            <p className="rail-label">About</p>
            <p className="text-datum text-ink-soft mt-2">
              9.8398° N
              <br />
              124.5517° E
            </p>
          </div>

          <div className="rail-body">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <h2 className="font-heading text-h1 text-ink max-w-[18ch]">
                  {content.title}
                </h2>

                <p className="text-lead text-ink mt-6 max-w-[54ch]">
                  {content.lead}
                </p>

                <div className="text-ink-soft text-measure mt-6 space-y-4 text-[15px] leading-relaxed">
                  {content.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <figure className="lg:col-span-5">
                <div className="bg-shell relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={content.featuredImage.src}
                    alt={content.featuredImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover"
                  />
                </div>
                {content.featuredImage.caption && (
                  <figcaption className="text-ink-soft mt-3 text-[13px] leading-relaxed">
                    {content.featuredImage.caption}
                  </figcaption>
                )}
              </figure>
            </div>

            <dl className="divide-mist border-mist mt-12 divide-y border-t sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {content.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <dt className="text-ink-soft text-[12px] font-medium">
                    {stat.label}
                  </dt>
                  {stat.isTodo ? (
                    <dd className="font-heading text-h3 text-ink-soft mt-1.5">
                      To be confirmed
                      <span className="mt-1 block text-[12px] font-normal">
                        Candijay tourism office
                      </span>
                    </dd>
                  ) : (
                    <dd className="font-heading text-h2 text-pine mt-1.5">
                      {stat.value}
                    </dd>
                  )}
                  {stat.note && !stat.isTodo && (
                    <dd className="text-ink-soft/80 mt-1 text-[12px]">
                      {stat.note}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
