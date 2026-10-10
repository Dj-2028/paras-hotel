import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookingProvider } from "./components/booking";
import { BottomBar, Footer, Navbar, ScrollToTop } from "./components/chrome";
import {
  About,
  Amenities,
  Booking,
  Contact,
  Gallery,
  Home,
  Rooms,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-clip bg-white shadow-[0_0_80px_rgba(3,21,41,0.2)] lg:max-w-[1180px]">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BottomBar />
        </div>
      </BookingProvider>
    </BrowserRouter>
  );
}
