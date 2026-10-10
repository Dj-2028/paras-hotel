import {
  AirVent,
  BedDouble,
  BrushCleaning,
  CarFront,
  Headphones,
  MapPin,
  MessageSquareText,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const PHONE_DISPLAY = "85169 55555";
export const PHONE_TEL = "8516955555";
export const TEL_HREF = `tel:${PHONE_TEL}`;
export const EMAIL_DISPLAY = "Info@hotelparasjbp.in";
export const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`;
export const WHATSAPP_URL = "https://wa.me/918516955555";
export const GOOGLE_HOTELS_URL =
  "https://www.google.com/travel/hotels/s/5wof6X4N49iJ3apD9";

/* ─── Booking platform listing URLs — central configuration ───────────────
   Every platform card and booking CTA reads from `bookingPlatforms` below.
   Paste a verified Hotel Paras listing URL into any value to activate it.
   Empty values keep the existing "Link pending" notice with a call CTA.  */
export const AGODA_URL =
  "https://www.agoda.com/hotel-paras-by-twc-hotels/hotel/jabalpur-in.html";
export const CLEARTRIP_URL =
  "https://www.cleartrip.com/hotels/details/hotel-paras-2881464";
export const BOOKING_COM_URL =
  "https://www.booking.com/hotel/in/paras-jabalpur2.html";
export const MYTRAVALY_URL = ""; // paste the Hotel Paras MyTravaly listing URL here
export const MAKEMYTRIP_URL = ""; // paste the Hotel Paras MakeMyTrip listing URL here

export interface BookingPlatform {
  name: string;
  domain: string;
  url: string;
  color: string;
}

export const bookingPlatforms: BookingPlatform[] = [
  { name: "Agoda", domain: "agoda.com", url: AGODA_URL, color: "#d81b60" },
  { name: "Cleartrip", domain: "cleartrip.com", url: CLEARTRIP_URL, color: "#ff5a1f" },
  { name: "Booking.com", domain: "booking.com", url: BOOKING_COM_URL, color: "#003b95" },
  { name: "MyTravaly", domain: "mytravaly.com", url: MYTRAVALY_URL, color: "#5b4ce1" },
  { name: "MakeMyTrip", domain: "makemytrip.com", url: MAKEMYTRIP_URL, color: "#e2262d" },
];

export const images = {
  hero: "https://images.pexels.com/photos/36767624/pexels-photo-36767624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
  room: "https://images.pexels.com/photos/33636637/pexels-photo-33636637.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1200",
  roomDetail:
    "https://images.pexels.com/photos/8089074/pexels-photo-8089074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1200",
  lobby:
    "https://images.pexels.com/photos/29870245/pexels-photo-29870245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  lounge:
    "https://images.pexels.com/photos/37252543/pexels-photo-37252543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  brightRoom:
    "https://images.pexels.com/photos/27626182/pexels-photo-27626182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1200",
};

export const navLinks: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Rooms", "/rooms"],
  ["Amenities", "/amenities"],
  ["Gallery", "/gallery"],
  ["Booking", "/booking"],
  ["Contact", "/contact"],
];

export const amenities: { label: string; detail: string; icon: LucideIcon }[] = [
  { label: "Free Wi-Fi", detail: "Stay connected", icon: Wifi },
  { label: "Comfortable rooms", detail: "Rest with ease", icon: BedDouble },
  { label: "Air conditioning", detail: "Your ideal climate", icon: AirVent },
  { label: "Room service", detail: "Help when needed", icon: MessageSquareText },
  { label: "Parking", detail: "Convenient access", icon: CarFront },
  { label: "24/7 support", detail: "Always available", icon: Headphones },
  { label: "Housekeeping", detail: "Fresh and cared for", icon: BrushCleaning },
  { label: "Easy location", detail: "Simple to reach", icon: MapPin },
];
