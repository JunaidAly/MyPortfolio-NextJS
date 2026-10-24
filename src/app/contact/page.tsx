import type { Metadata } from "next";
import ContactComponent from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <div className="pt-[74px]">
      <ContactComponent />
    </div>
  );
}
