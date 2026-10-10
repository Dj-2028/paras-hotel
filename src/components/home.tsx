import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Images,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  GOOGLE_HOTELS_URL,
  PHONE_DISPLAY,
  TEL_HREF,
  amenities,
  images,
} from "../lib/config";
import { SectionHeader } from "./chrome";
import { DirectCard, PlatformList } from "./booking";

export function Hero() {
  return (
    <section className="relative min-h-[800px] overflow-hidden bg-[#061a33] text-white">
      <motion.img
        src={images.hero}
        alt="Bright contemporary hotel room with a city view"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#031529]/35 via-[#031529]/10 to-[#031529]/95" />
      <div className="relative flex min-h-[800px] flex-col justify-end px-6 pb-11 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#74bcff]">
            <span className="h-px w-9 bg-[#74bcff]" />
            Welcome to
          </p>
          <h1 className="font-display text-[66px] font-semibold leading-[0.8] tracking-[-0.03em]">
            Hotel{" "}
            <span className="block italic text-[#7cc2ff]">Paras</span>
          </h1>
          <p className="mt-6 max-w-[330px] text-[16px] font-medium leading-6 text-white/82">
            Comfortable stay. Convenient location. Easy booking.
          </p>
          <a
            href={GOOGLE_HOTELS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/72"
          >
            <MapPin size={15} className="text-[#72baff]" />
            View location on Google
          </a>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Link to="/booking" className="button-primary">
              Book now
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="button-secondary">
              Contact us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Planner() {
  return (
    <section className="bg-white px-5 py-18">
      <SectionHeader
        eyebrow="Plan your visit"
        title="Your stay starts here."
        body="Choose your dates, then continue to your preferred booking platform."
      />
      <motion.div
        className="mt-8 border-y border-[#d9e4ef] py-5 lg:max-w-[560px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-3">
          <label className="planner-field">
            <span>Check-in</span>
            <CalendarDays size={17} />
            <input type="date" aria-label="Check-in date" />
          </label>
          <label className="planner-field">
            <span>Check-out</span>
            <CalendarDays size={17} />
            <input type="date" aria-label="Check-out date" />
          </label>
        </div>
        <Link to="/booking" className="button-dark mt-4 w-full">
          View booking options
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="bg-white pb-20">
      <motion.img
        src={images.lobby}
        alt="Modern hotel lobby interior"
        className="h-[470px] w-full object-cover"
        loading="lazy"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="px-5 pt-10">
        <SectionHeader
          eyebrow="About the hotel"
          title="Simple comfort, thoughtfully delivered."
          body="Hotel Paras combines comfortable rooms, convenient access and guest-focused service for a stay that feels easy from arrival to departure."
        />
        <Link to="/about" className="text-link mt-8">
          Explore Hotel Paras
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

export function RoomsTeaser() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#061a33] text-white">
      <img
        src={images.room}
        alt="Representative contemporary hotel room"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031529]/95 via-[#031529]/20 to-transparent" />
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6 pb-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow text-[#78c0ff]">Rooms</p>
        <h2 className="mt-3 font-display text-[47px] font-semibold leading-[0.95]">
          A calm place to switch off.
        </h2>
        <p className="mt-4 max-w-[335px] text-sm leading-6 text-white/70">
          Comfortable bedding, essential amenities and a clean, modern setting.
        </p>
        <Link
          to="/rooms"
          className="mt-7 inline-flex h-13 items-center gap-2 rounded-full bg-white px-6 text-xs font-extrabold uppercase tracking-[0.08em] text-[#071c36]"
        >
          Explore rooms
          <ArrowRight size={15} />
        </Link>
      </motion.div>
    </section>
  );
}

export function AmenitiesGrid({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`${full ? "min-h-screen pt-32" : "py-20"} bg-[#f5f8fc] px-5`}
    >
      <SectionHeader
        eyebrow="Hotel amenities"
        title={
          full ? "The essentials, ready when you are." : "Comfort built into every stay."
        }
        body="Useful facilities and attentive support for a smoother visit."
      />
      <div className="mt-10 grid grid-cols-2 border-l border-t border-[#d5e1ed] lg:grid-cols-4">
        {amenities.map(({ label, detail, icon: Icon }, i) => (
          <motion.div
            key={label}
            className="min-h-[145px] border-b border-r border-[#d5e1ed] p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.05 }}
          >
            <Icon size={24} strokeWidth={1.5} className="text-[#0b63ce]" />
            <p className="mt-6 text-[13px] font-extrabold text-[#071c36]">{label}</p>
            <p className="mt-1 text-[10px] text-[#75859a]">{detail}</p>
          </motion.div>
        ))}
      </div>
      {full && (
        <div className="mt-9 flex gap-3 border-l-2 border-[#2587f8] pl-4 text-xs leading-5 text-[#65758a]">
          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#0b63ce]" />
          Amenity availability may vary by room. Confirm any specific
          requirement before arrival.
        </div>
      )}
    </section>
  );
}

export function GalleryTeaser() {
  const shots = [
    { src: images.lounge, alt: "Modern hotel lounge" },
    { src: images.roomDetail, alt: "Minimal hotel bedroom" },
    { src: images.brightRoom, alt: "Bright contemporary bedroom" },
  ];
  return (
    <section className="bg-[#071c36] py-20 text-white">
      <div className="flex items-end justify-between px-5">
        <div>
          <p className="eyebrow text-[#6db5ff]">Gallery</p>
          <h2 className="mt-3 font-display text-[42px] font-semibold leading-none">
            Take a closer look.
          </h2>
        </div>
        <Link
          to="/gallery"
          aria-label="Open gallery"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0b63ce]"
        >
          <Images size={19} />
        </Link>
      </div>
      <div className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2">
        {shots.map((shot, i) => (
          <motion.figure
            key={shot.src}
            className="w-[82%] shrink-0 snap-center lg:w-[460px]"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="h-[410px] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.12em] text-white/42">
              0{i + 1} / Representative hotel imagery
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#0b63ce] px-6 py-20 text-white">
      <motion.div
        className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <p className="eyebrow text-[#c7e3ff]">Talk to the hotel</p>
      <h2 className="mt-4 max-w-[340px] font-display text-[46px] font-semibold leading-[0.95]">
        Need help with your stay?
      </h2>
      <p className="mt-5 text-sm leading-6 text-white/72">
        Our team can help with room and booking questions.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:max-w-[460px]">
        <a
          href={TEL_HREF}
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-white text-xs font-extrabold uppercase tracking-[0.08em] text-[#074b9b] shadow-sm transition-colors hover:bg-white/90"
        >
          <Phone size={17} />
          {PHONE_DISPLAY}
        </a>
        <a
          href={EMAIL_HREF}
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 text-xs font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <Mail size={17} />
          Email us
        </a>
      </div>
    </section>
  );
}

export function BookingSection() {
  return (
    <section className="bg-[#eaf4ff] px-5 py-20">
      <SectionHeader
        eyebrow="Book Hotel Paras"
        title="Pick the platform you trust."
        body="Choose a booking partner or call Hotel Paras directly. Verified listing links can be added without changing the design."
      />
      <PlatformList />
      <DirectCard />
    </section>
  );
}
