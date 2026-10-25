import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";

const VIDEO_ID = "WkHhFUcsIGc";
const VIDEO_URL = `https://youtu.be/${VIDEO_ID}`;

export default function IntroVideo() {
  return (
    <ScrollSection
      id="intro"
      className="theme-page section-pad border-t border-white/10"
      direction="scale"
      ariaLabel="Introduction video"
    >
      <div className="site-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <span className="eyebrow">A quick introduction</span>
            <h2 className="section-title">
              Meet the person <span className="text-[#7f837d]">behind the products.</span>
            </h2>
          </div>
          <p className="section-copy">
            Get to know me beyond the code—my background, the way I approach product work, and what clients can expect when we collaborate.
          </p>
        </Reveal>

        <Reveal className="theme-card mt-14 overflow-hidden rounded-[30px] border p-2.5 md:rounded-[38px] md:p-4" delay={0.08}>
          <div className="flex flex-col gap-4 px-3 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between md:px-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c9ff63] text-[#10130f]">
                <Play size={16} fill="currentColor" />
              </span>
              <div>
                <p className="font-display text-base font-semibold">Junaid Ali · Introduction</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[.14em] text-[#858983]">Full-stack developer · Product builder</p>
              </div>
            </div>

            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noreferrer"
              className="theme-hover-link inline-flex items-center gap-2 self-start text-xs font-semibold sm:self-auto"
            >
              Watch on YouTube <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="always-dark relative aspect-video overflow-hidden rounded-[22px] bg-[#080b09] md:rounded-[28px]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Junaid Ali introductory video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
