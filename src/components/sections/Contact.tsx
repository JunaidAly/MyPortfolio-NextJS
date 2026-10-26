"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import Magnetic from "@/components/ui/Magnetic";
import { profile } from "@/constants/portfolio";

type Status = "idle" | "sending" | "success" | "error";

function getEmailError(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const response = error as { status?: unknown; text?: unknown };
    return {
      status: typeof response.status === "number" ? response.status : 0,
      text: typeof response.text === "string" ? response.text : "Unknown EmailJS error",
    };
  }

  return { status: 0, text: error instanceof Error ? error.message : String(error) };
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("The form could not send.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("The form could not send.");
    const form = event.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_v0jnvxb",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_h3dciu9",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "E3qkJpavCm_7nv8Bw",
      );
      form.reset();
      setStatus("success");
    } catch (error: unknown) {
      const emailError = getEmailError(error);
      console.error("Contact form delivery failed", emailError);

      if (emailError.status === 412) {
        setErrorMessage("The email service is temporarily unavailable.");
      } else if (emailError.status === 429) {
        setErrorMessage("Too many messages were sent recently. Please wait a moment and try again.");
      }

      setStatus("error");
    }
  }

  return (
    <ScrollSection
      id="contact"
      className="theme-page section-pad relative overflow-hidden"
      direction="up"
    >
      <div className="absolute -bottom-72 -left-48 h-[600px] w-[600px] rounded-full bg-[#c9ff63]/[.08] blur-3xl" aria-hidden="true" />
      <div className="site-shell relative z-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">Start a conversation</span>
          <h2 className="section-title">Have a product in mind? <span className="text-[#c9ff63]">Let&apos;s make it real.</span></h2>
          <p className="section-copy mt-7">Share the problem, the stage you&apos;re at, and what a successful outcome looks like. I&apos;ll reply with a clear next step.</p>

          <div className="mt-10 space-y-4 text-sm text-[#aeb2ab]">
            <a href={`mailto:${profile.email}`} className="theme-hover-link flex items-center gap-3 transition"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><Mail size={16} /></span>{profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="theme-hover-link flex items-center gap-3 transition"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><Phone size={16} /></span>{profile.phone}</a>
            <p className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><MapPin size={16} /></span>{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form id="contact-form" onSubmit={handleSubmit} className="soft-card rounded-[28px] p-6 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs text-[#9ca099]">Your name<input className="input-field" name="from_name" placeholder="Name" required /></label>
              <label className="grid gap-2 text-xs text-[#9ca099]">Email address<input className="input-field" type="email" name="from_email" placeholder="you@company.com" required /></label>
            </div>
            <label className="mt-5 grid gap-2 text-xs text-[#9ca099]">Project type<input className="input-field" name="subject" placeholder="SaaS product, dashboard, web app..." required /></label>
            <label className="mt-5 grid gap-2 text-xs text-[#9ca099]">A little context<textarea className="input-field min-h-[150px] resize-y" name="message" placeholder="What are you building, and where do you need help?" required /></label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-[#747872]">Usually replies within 1–2 business days.</p>
              <Magnetic className="inline-flex">
                <motion.button type="submit" disabled={status === "sending"} className="button-primary disabled:cursor-wait disabled:opacity-60" whileHover={status === "sending" ? undefined : { y: -4, scale: 1.025 }} whileTap={status === "sending" ? undefined : { scale: 0.97 }}>
                  {status === "sending" ? "Sending..." : "Send project brief"} {status === "sending" ? null : <Send size={16} />}
                </motion.button>
              </Magnetic>
            </div>

            <div aria-live="polite">
              {status === "success" && <p className="mt-5 flex items-center gap-2 rounded-xl bg-[#c9ff63]/10 p-3 text-sm text-[#c9ff63]"><CheckCircle2 size={17} /> Message sent. I&apos;ll be in touch.</p>}
              {status === "error" && <p className="mt-5 rounded-xl bg-[#ff7648]/10 p-3 text-sm text-[#ff9a78]">{errorMessage} Email me directly at <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 underline">{profile.email}<ArrowUpRight size={13} /></a>.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
