import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, Phone, X } from "lucide-react";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  TEL_HREF,
  bookingPlatforms,
  type BookingPlatform,
} from "../lib/config";

const BookingContext = createContext<{
  openPlatform: (name: string) => void;
} | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [pending, setPending] = useState<string | null>(null);

  const openPlatform = (name: string) => {
    const platform = bookingPlatforms.find((p) => p.name === name);
    if (platform?.url) {
      window.open(platform.url, "_blank", "noopener,noreferrer");
      return;
    }
    setPending(name);
  };

  return (
    <BookingContext.Provider value={{ openPlatform }}>
      {children}
      <AnimatePresence>
        {pending && (
          <>
            <motion.button
              className="fixed inset-0 z-[80] bg-[#031529]/70"
              aria-label="Close booking notice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPending(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="platform-dialog-title"
              className="fixed bottom-0 left-1/2 z-[90] w-full max-w-[480px] -translate-x-1/2 rounded-t-[30px] bg-white px-6 pb-9 pt-4 shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 27, stiffness: 270 }}
            >
              <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-[#cfdaea]" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">Link pending</p>
                  <h2
                    id="platform-dialog-title"
                    className="mt-2 font-display text-3xl font-semibold text-[#071c36]"
                  >
                    Book on {pending}
                  </h2>
                </div>
                <button
                  aria-label="Close"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef5fc] text-[#071c36]"
                  onClick={() => setPending(null)}
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#607086]">
                The verified Hotel Paras listing has not been supplied yet. Call
                the hotel for immediate booking assistance.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a href={TEL_HREF} className="button-primary flex-1 justify-center">
                  <Phone size={17} />
                  Call {PHONE_DISPLAY}
                </a>
                <a href={EMAIL_HREF} className="button-secondary-dark flex-1 justify-center">
                  <Mail size={16} />
                  Email hotel
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

export function PlatformIcon({ platform }: { platform: BookingPlatform }) {
  const src = `https://www.google.com/s2/favicons?domain_url=https://${platform.domain}&sz=128`;
  return (
    <div className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-2xl border border-[#dce7f1] bg-white shadow-sm">
      <img
        src={src}
        alt={`${platform.name} logo`}
        className="h-11 w-11 object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function PlatformList({ light = false }: { light?: boolean }) {
  const { openPlatform } = useBooking();
  return (
    <div className="mt-8 space-y-3">
      {bookingPlatforms.map((platform, i) => {
        const className = `group flex w-full cursor-pointer items-center gap-4 rounded-[22px] p-4 text-left transition-transform active:scale-[0.98] ${
          light ? "bg-white" : "border border-[#dbe6f1] bg-white"
        }`;
        const content = (
          <>
            <PlatformIcon platform={platform} />
            <span className="min-w-0 flex-1">
              <strong className="block text-[15px] font-extrabold text-[#071c36]">
                {platform.name}
              </strong>
              <span className="mt-1 block text-[11px] leading-4 text-[#718096]">
                Book your stay on {platform.name}
              </span>
            </span>
            <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0b63ce]">
              Book now
              <ChevronRight size={12} />
            </span>
          </>
        );
        const motionProps = {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.045 },
        };
        return platform.url ? (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...motionProps}
          >
            {content}
          </motion.a>
        ) : (
          <motion.button
            key={platform.name}
            type="button"
            onClick={() => openPlatform(platform.name)}
            className={className}
            {...motionProps}
          >
            {content}
          </motion.button>
        );
      })}
    </div>
  );
}

export function DirectCard() {
  return (
    <motion.div
      className="mt-4 overflow-hidden rounded-[24px] bg-[#0b63ce] p-6 text-white"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#b9dcff]">
            Direct booking
          </p>
          <h3 className="mt-3 font-display text-[31px] font-semibold leading-none">
            Book directly with Hotel Paras
          </h3>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/12">
          <Phone size={19} />
        </span>
      </div>
      <div className="mt-6">
        <a
          href={TEL_HREF}
          className="block text-3xl font-extrabold tracking-[-0.03em] hover:text-[#e0efff] transition-colors"
        >
          {PHONE_DISPLAY}
        </a>
        <a
          href={EMAIL_HREF}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#bfe0ff] hover:text-white transition-colors break-all"
        >
          <Mail size={15} className="shrink-0" />
          {EMAIL_DISPLAY}
        </a>
      </div>
      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:max-w-[400px]">
        <a
          href={TEL_HREF}
          className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-white text-xs font-extrabold uppercase tracking-[0.09em] text-[#074b9b] shadow-sm hover:bg-white/90 transition-colors"
        >
          Call now
          <ArrowRight size={15} />
        </a>
        <a
          href={EMAIL_HREF}
          className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 text-xs font-extrabold uppercase tracking-[0.09em] text-white hover:bg-white/20 transition-colors"
        >
          <Mail size={15} />
          Email us
        </a>
      </div>
    </motion.div>
  );
}
