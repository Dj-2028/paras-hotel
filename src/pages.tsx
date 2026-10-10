import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  GOOGLE_HOTELS_URL,
  PHONE_DISPLAY,
  TEL_HREF,
  WHATSAPP_URL,
  images,
} from "./lib/config";
import { SectionHeader, SubHero } from "./components/chrome";
import { DirectCard, PlatformList } from "./components/booking";
import {
  AboutTeaser,
  AmenitiesGrid,
  BookingSection,
  CtaBand,
  GalleryTeaser,
  Hero,
  Planner,
  RoomsTeaser,
} from "./components/home";

export function Home() {
  return (
    <main>
      <Hero />
      <Planner />
      <AboutTeaser />
      <RoomsTeaser />
      <BookingSection />
      <AmenitiesGrid />
      <GalleryTeaser />
      <CtaBand />
    </main>
  );
}

export function About() {
  const points = [
    "Comfortable rooms",
    "Clean and welcoming setting",
    "Convenient access",
    "Guest-focused service",
  ];
  return (
    <main>
      <SubHero
        eyebrow="About Hotel Paras"
        title="Hospitality that keeps things easy."
        image={images.lobby}
      />
      <section className="bg-white px-5 py-20">
        <SectionHeader
          eyebrow="Our approach"
          title="Care you can feel from the moment you arrive."
          body="Hotel Paras is built around the essentials of a good stay: comfort, cleanliness, accessibility and a team ready to help."
        />
        <p className="mt-6 text-sm leading-7 text-[#607086]">
          Whether you are travelling for work, family or a short stopover, our
          focus is a straightforward stay and responsive booking support.
        </p>
        <div className="mt-9 border-t border-[#d8e3ee]">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 border-b border-[#d8e3ee] py-4 text-sm font-bold text-[#1d3047]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e7f2ff] text-[#0b63ce]">
                <Check size={14} />
              </span>
              {point}
            </div>
          ))}
        </div>
      </section>
      <GalleryTeaser />
      <CtaBand />
    </main>
  );
}

export function Rooms() {
  const features = [
    "Comfortable bed",
    "Free Wi-Fi",
    "Air conditioning",
    "Modern interiors",
    "Room service",
  ];
  return (
    <main>
      <SubHero eyebrow="Rooms" title="Settle in and slow down." image={images.room} />
      <section className="bg-white px-5 py-20">
        <SectionHeader
          eyebrow="Deluxe room"
          title="A comfortable base for every kind of visit."
          body="Clean design, restful bedding and practical essentials for a smooth stay."
        />
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-[#d8e3ee] py-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#44566b]"
            >
              <Check size={14} className="mt-0.5 shrink-0 text-[#0b63ce]" />
              {feature}
            </div>
          ))}
        </div>
        <Link to="/booking" className="button-primary mt-8 w-full lg:max-w-[360px]">
          Check availability
          <ArrowRight size={16} />
        </Link>
        <p className="mt-6 border-l-2 border-[#2587f8] pl-4 text-[11px] leading-5 text-[#6c7d91]">
          Room imagery and listed features are representative. Confirm exact
          room details through your selected booking channel.
        </p>
      </section>
      <section className="bg-[#eaf4ff] pb-20">
        <img
          src={images.roomDetail}
          alt="Representative modern guest room"
          className="h-[390px] w-full object-cover"
          loading="lazy"
        />
        <div className="px-5 pt-10">
          <SectionHeader
            eyebrow="Booking help"
            title="Have a room question?"
            body="Call Hotel Paras to discuss availability, arrival timing or a specific requirement."
          />
          <a href={TEL_HREF} className="button-dark mt-8 w-full lg:max-w-[360px]">
            <Phone size={16} />
            Call the hotel
          </a>
        </div>
      </section>
    </main>
  );
}

export function Amenities() {
  return (
    <main>
      <AmenitiesGrid full />
      <section className="bg-[#071c36] px-5 py-20 text-white">
        <SectionHeader
          light
          eyebrow="Need something specific?"
          title="Ask before you arrive."
          body="Our team can help confirm the facilities available for your selected room."
        />
        <a href={TEL_HREF} className="button-primary mt-8 w-full lg:max-w-[360px]">
          <Phone size={16} />
          Call Hotel Paras
        </a>
      </section>
    </main>
  );
}

export function Gallery() {
  const shots = [
    images.room,
    images.lobby,
    images.lounge,
    images.roomDetail,
    images.brightRoom,
    images.hero,
  ];
  return (
    <main className="bg-[#061a33] pb-20 pt-[72px] text-white">
      <section className="px-5 pb-10 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-[#6db5ff]">Hotel gallery</p>
          <h1 className="mt-3 font-display text-[53px] font-semibold leading-[0.9]">
            A look inside the stay.
          </h1>
          <p className="mt-5 text-sm leading-6 text-white/62">
            Representative photography showing the comfort and atmosphere of the
            hotel experience.
          </p>
        </motion.div>
      </section>
      <section className="grid grid-cols-2 gap-2 px-2">
        {shots.map((src, i) => (
          <motion.figure
            key={src}
            className={i % 3 === 0 ? "col-span-2" : "col-span-1"}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Representative hotel view ${i + 1}`}
              className={`w-full object-cover ${i % 3 === 0 ? "h-[360px]" : "h-[240px]"}`}
              loading="lazy"
            />
          </motion.figure>
        ))}
      </section>
      <div className="px-5">
        <Link to="/booking" className="button-primary mt-10 w-full lg:max-w-[360px]">
          Book your stay
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}

export function Booking() {
  return (
    <main className="bg-[#eaf4ff] pt-[72px]">
      <section className="bg-[#071c36] px-5 pb-14 pt-14 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-[#6db5ff]">Book Hotel Paras</p>
          <h1 className="mt-3 font-display text-[52px] font-semibold leading-[0.9]">
            Choose your booking platform.
          </h1>
          <p className="mt-5 text-sm leading-6 text-white/62">
            Continue with a trusted travel partner or contact the hotel
            directly.
          </p>
        </motion.div>
      </section>
      <section className="px-5 py-14">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#52667d]">
          <ShieldCheck size={15} className="text-[#0b63ce]" />
          External links open in a new tab
        </div>
        <PlatformList />
        <DirectCard />
      </section>
      <section className="bg-white px-5 py-20">
        <SectionHeader
          eyebrow="Booking support"
          title="Not sure where to book?"
          body="Call Hotel Paras and our team will help you with the next step."
        />
        <a href={TEL_HREF} className="button-dark mt-8 w-full lg:max-w-[360px]">
          <Phone size={16} />
          Call now
        </a>
      </section>
    </main>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-[#f5f8fc] pt-[72px]">
      <section className="bg-[#071c36] px-5 pb-14 pt-14 text-white">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-[#6db5ff]">Contact Hotel Paras</p>
          <h1 className="mt-3 font-display text-[53px] font-semibold leading-[0.9]">
            How can we help?
          </h1>
          <p className="mt-5 text-sm leading-6 text-white/64">
            For rooms, arrival details or booking support, reach the hotel
            directly.
          </p>
        </motion.div>
        <div className="mt-8 space-y-3 lg:max-w-[560px]">
          <a
            href={TEL_HREF}
            className="flex items-center justify-between border-y border-white/12 py-5 transition-colors hover:bg-white/[0.03]"
          >
            <span>
              <small className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#72baff]">
                Call reservations
              </small>
              <strong className="mt-1 block text-2xl">{PHONE_DISPLAY}</strong>
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#2587f8]">
              <Phone size={18} />
            </span>
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center justify-between border-b border-white/12 pb-5 transition-colors hover:bg-white/[0.03]"
          >
            <span>
              <small className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#72baff]">
                Email inquiries
              </small>
              <strong className="mt-1 block text-lg font-bold sm:text-2xl break-all">
                {EMAIL_DISPLAY}
              </strong>
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#2587f8]">
              <Mail size={18} />
            </span>
          </a>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:max-w-[560px]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full border border-white/22 text-xs font-extrabold uppercase tracking-[0.08em] hover:bg-white/10 transition-colors"
          >
            <MessageCircle size={17} />
            Contact on WhatsApp
          </a>
          <a
            href={EMAIL_HREF}
            className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full border border-white/22 text-xs font-extrabold uppercase tracking-[0.08em] hover:bg-white/10 transition-colors"
          >
            <Mail size={17} />
            Send Email
          </a>
        </div>
      </section>
      <section className="px-5 py-16">
        <SectionHeader
          eyebrow="Location"
          title="Find Hotel Paras."
          body="Open the provided Google Travel reference for location details and directions."
        />
        <a
          href={GOOGLE_HOTELS_URL}
          target="_blank"
          rel="noreferrer"
          className="button-secondary-dark mt-7 w-full lg:max-w-[360px]"
        >
          <MapPin size={16} />
          View on Google
        </a>
      </section>
      <section className="bg-white px-5 py-16">
        <SectionHeader
          eyebrow="Send an enquiry"
          title="Tell us what you need."
          body="This frontend preview displays a confirmation without transmitting your details."
        />
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              className="mt-8 rounded-[26px] bg-[#eaf4ff] px-6 py-10 text-center lg:max-w-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0b63ce] text-white">
                <Check size={23} />
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[#071c36]">
                Enquiry ready
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#607086]">
                No message was sent in this frontend preview. Please call{" "}
                <a href={TEL_HREF} className="font-semibold text-[#0b63ce] hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                or email{" "}
                <a href={EMAIL_HREF} className="font-semibold text-[#0b63ce] hover:underline">
                  {EMAIL_DISPLAY}
                </a>{" "}
                for immediate assistance.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-extrabold uppercase tracking-[0.1em] text-[#0b63ce]"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="mt-8 lg:max-w-[560px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="field-label" htmlFor="name">
                Name
              </label>
              <input
                className="field-input"
                id="name"
                name="name"
                required
                placeholder="Your full name"
              />
              <label className="field-label" htmlFor="phone">
                Phone number
              </label>
              <input
                className="field-input"
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your contact number"
              />
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input
                className="field-input"
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <label className="field-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="field-input min-h-32 resize-none py-4"
                id="message"
                name="message"
                required
                placeholder="Dates, guests, or questions"
              />
              <button type="submit" className="button-primary mt-5 w-full">
                <Mail size={16} />
                Send enquiry
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
