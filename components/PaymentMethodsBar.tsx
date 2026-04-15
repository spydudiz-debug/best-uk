"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/** Logos: Simple Icons (MIT) — /public/payment/*.svg */
const PAYMENT_METHODS = [
  { id: "visa", label: "Visa", file: "visa", alt: "Visa logo" },
  {
    id: "mastercard",
    label: "Mastercard",
    file: "mastercard",
    alt: "Mastercard logo",
  },
  { id: "paypal", label: "PayPal", file: "paypal", alt: "PayPal logo" },
  {
    id: "amex",
    label: "Amex",
    file: "americanexpress",
    alt: "American Express logo",
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    file: "applepay",
    alt: "Apple Pay logo",
  },
] as const;

export default function PaymentMethodsBar() {
  return (
    <div className="mt-14 border-t border-white/[0.06] pt-10">
      <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-body-muted">
        Payment methods
      </p>
      <ul className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:gap-5">
        {PAYMENT_METHODS.map(({ id, label, file, alt }, i) => (
          <li key={id}>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="group flex h-full min-w-[104px] flex-col items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 shadow-sm transition-shadow duration-300 hover:border-white/18 hover:shadow-[0_0_24px_rgba(0,229,255,0.12)] sm:min-w-[118px] sm:px-4 sm:py-3.5"
            >
              <div className="relative flex h-8 w-[72px] items-center justify-center sm:h-9 sm:w-[80px]">
                <Image
                  src={`/payment/${file}.svg`}
                  alt={alt}
                  width={80}
                  height={32}
                  loading="lazy"
                  className="h-7 w-auto max-h-8 max-w-[72px] object-contain object-center brightness-0 invert opacity-[0.92] transition-[opacity,filter] duration-300 group-hover:opacity-100 sm:h-8 sm:max-w-[80px]"
                  unoptimized
                />
              </div>
              <span className="text-center text-[9px] font-semibold uppercase tracking-wider text-body-muted sm:text-[10px]">
                {label}
              </span>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
