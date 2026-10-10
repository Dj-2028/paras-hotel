import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  TEL_HREF,
  bookingPlatforms,
  navLinks,
} from "../lib/config";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed left-1/2 top-0 z-50 flex h-[72px] w-full max-w-[480px] -translate-x-1/2 items-center justify-between border-b border-white/10 bg-[#061a33]/94 px-5 text-white backdrop-blur-md lg:max-w-[1180px]">
        <Link to="/" className="flex items-center gap-3" aria-label="Hotel Paras home">
          <span className="brand-mark">P</span>
          <span className="text-[12px] font-extrabold tracking-[0.2em]">HOTEL PARAS</span>
        </Link>
        <nav
          aria-label="Desktop navigation"
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
        >
          {navLinks.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[11px] font-extrabold uppercase tracking-[0.1em] transition-colors ${
                  isActive ? "text-[#70b8ff]" : "text-white/70 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <Link
            to="/booking"
            className="rounded-full bg-[#2587f8] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em]"
          >
            Book
          </Link>
          <button
            className="grid h-10 w-10 place-items-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      {/* Invisible tap target so a tap outside the menu closes it. */}
      {open && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 cursor-default outline-none lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            className="fixed left-1/2 top-[72px] z-40 flex h-[calc(100svh-72px)] w-full max-w-[480px] -translate-x-1/2 flex-col overflow-y-auto bg-[#061a33] px-6 pb-28 pt-7 text-white lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6db5ff]">
              <span className="h-px w-8 bg-[#6db5ff]" />
              Explore Hotel Paras
            </div>
            {navLinks.map(([label, to], i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/10 py-3.5 font-display text-[29px] leading-none ${
                      isActive ? "text-[#70b8ff]" : "text-white"
                    }`
                  }
                >
                  {label}
                  <ArrowRight size={17} />
                </NavLink>
              </motion.div>
            ))}
            <div className="mt-auto space-y-2">
              <a
                href={TEL_HREF}
                className="flex items-center justify-between rounded-2xl bg-[#0b2b50] px-5 py-3.5"
              >
                <span>
                  <small className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#6db5ff]">
                    Reservations
                  </small>
                  <strong className="mt-0.5 block text-lg">{PHONE_DISPLAY}</strong>
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2587f8]">
                  <Phone size={17} />
                </span>
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b2b50]/60 px-5 py-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="min-w-0">
                  <small className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#6db5ff]">
                    Email
                  </small>
                  <strong className="mt-0.5 block truncate text-xs font-semibold text-white">
                    {EMAIL_DISPLAY}
                  </strong>
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                  <Mail size={14} />
                </span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export function BottomBar() {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 grid h-[70px] w-full max-w-[480px] -translate-x-1/2 grid-cols-2 border-t border-[#dbe5f0] bg-white/96 p-2 backdrop-blur-md lg:max-w-[1180px]">
      <a
        href={TEL_HREF}
        className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[#071c36]"
      >
        <Phone size={16} />
        Call Hotel
      </a>
      <Link
        to="/booking"
        className="flex items-center justify-center gap-2 rounded-full bg-[#0b63ce] text-xs font-extrabold uppercase tracking-[0.08em] text-white"
      >
        Book Now
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className={`eyebrow ${light ? "text-[#6db5ff]" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-[42px] font-semibold leading-[0.98] ${
          light ? "text-white" : "text-[#071c36]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-[14px] leading-6 ${
            light ? "text-white/65" : "text-[#607086]"
          }`}
        >
          {body}
        </p>
      )}
    </motion.div>
  );
}

export function SubHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[510px] items-end overflow-hidden bg-[#061a33] px-5 pb-12 pt-28 text-white">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031529]/95 via-[#031529]/32 to-[#031529]/25" />
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to="/"
          className="mb-10 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/72"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
        <p className="eyebrow text-[#70b8ff]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[53px] font-semibold leading-[0.9]">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#031529] px-5 pb-28 pt-16 text-white">
      <div className="flex items-center gap-3">
        <span className="brand-mark h-11 w-11 text-xl">P</span>
        <div>
          <p className="text-sm font-extrabold tracking-[0.18em]">HOTEL PARAS</p>
          <p className="mt-1 text-[10px] text-white/45">
            Comfortable. Convenient. Easy.
          </p>
        </div>
      </div>
      <p className="mt-7 max-w-[330px] text-xs leading-6 text-white/50">
        A comfortable stay with convenient access and straightforward booking.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
        <div>
          <p className="footer-heading">Explore</p>
          {navLinks.map(([label, to]) => (
            <Link key={to} to={to} className="footer-link">
              {label}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-heading">Book with</p>
          {bookingPlatforms.map((p) => (
            <p key={p.name} className="footer-link">
              {p.name}
            </p>
          ))}
          <div className="mt-5 space-y-1.5">
            <a
              href={TEL_HREF}
              className="flex items-center gap-2 text-sm font-bold text-[#75bdff] hover:underline"
            >
              <Phone size={14} className="shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 text-xs font-semibold text-white/75 transition-colors hover:text-[#75bdff] break-all"
            >
              <Mail size={13} className="shrink-0" />
              {EMAIL_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      <p className="mt-12 border-t border-white/10 pt-6 text-[10px] text-white/35">
        © 2026 Hotel Paras. All rights reserved.
      </p>
    </footer>
  );
}
