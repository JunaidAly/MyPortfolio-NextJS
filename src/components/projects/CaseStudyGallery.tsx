"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function CaseStudyGallery({ images, title }: { images: readonly string[]; title: string }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    return (
      <div className="grid aspect-[16/9] place-items-center rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(201,255,99,.16),transparent_36%),linear-gradient(135deg,#1a201b,#0d100e)] p-8 text-center">
        <div>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/[.04] text-[#c9ff63]"><Images size={25} /></span>
          <p className="mt-5 font-display text-2xl text-white">Private project preview</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#91968f]">Public screenshots are not available for this project, but the implementation details and technology stack are included below.</p>
        </div>
      </div>
    );
  }

  const showPrevious = () => setActiveImage((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveImage((current) => (current + 1) % images.length);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] border border-white/10 bg-[#080b09] shadow-2xl shadow-black/30 md:rounded-[34px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={images[activeImage]}
            initial={{ opacity: 0, x: 70, scale: 1.025 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x < -55) showNext();
              if (info.offset.x > 55) showPrevious();
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[activeImage]}
              alt={`${title} case study screen ${activeImage + 1}`}
              fill
              priority={activeImage === 0}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="pointer-events-none select-none object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        {images.length > 1 && (
          <>
            <button type="button" onClick={showPrevious} className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-[#c9ff63] hover:text-[#c9ff63]" aria-label="Previous project image">
              <ChevronLeft size={21} />
            </button>
            <button type="button" onClick={showNext} className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-[#c9ff63] hover:text-[#c9ff63]" aria-label="Next project image">
              <ChevronRight size={21} />
            </button>
          </>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[.16em] text-white/80 backdrop-blur-md">{activeImage + 1} / {images.length}</span>
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-7">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              onClick={() => setActiveImage(index)}
              className={`relative aspect-[16/10] overflow-hidden rounded-xl border transition ${index === activeImage ? "border-[#c9ff63] opacity-100" : "border-white/10 opacity-50 hover:opacity-90"}`}
              aria-label={`Show ${title} image ${index + 1}`}
            >
              <Image src={image} alt="" fill sizes="160px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
