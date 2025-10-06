import React from "react"
import { Plane, FileText, Building2, Hotel, MapPin, ShieldCheck } from "lucide-react"

export default function FormServices() {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-cyan-500" />,
      title: "Air Ticket Booking | এয়ার টিকিট বুকিং",
      description:
        "We provide hassle-free flight booking for all major airlines worldwide. আপনি দেশ ও বিদেশের যেকোনো গন্তব্যে সহজেই টিকিট বুক করতে পারেন আমাদের মাধ্যমে।",
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: "Visa Processing | ভিসা প্রসেসিং",
      description:
        "We assist you in all kinds of visa applications — tourist, student, or business. আমাদের বিশেষজ্ঞ টিম দ্রুত ও নির্ভরযোগ্য ভিসা সহায়তা প্রদান করে।",
    },
    {
      icon: <Building2 className="w-8 h-8 text-cyan-500" />,
      title: "Umrah & Hajj Packages | ওমরা ও হজ প্যাকেজ",
      description:
        "We organize complete Umrah and Hajj packages with comfortable travel and stay. আপনার ধর্মীয় যাত্রাকে সহজ ও প্রশান্তিময় করতে আমরা সর্বোচ্চ যত্ন নিই।",
    },
    {
      icon: <Hotel className="w-8 h-8 text-cyan-500" />,
      title: "Hotel Booking | হোটেল বুকিং",
      description:
        "Book quality hotels at the best rates around the world. আপনার বাজেট অনুযায়ী পছন্দের হোটেলটি বুক করতে পারবেন আমাদের মাধ্যমে।",
    },
    {
      icon: <MapPin className="w-8 h-8 text-cyan-500" />,
      title: "Tour Packages | ট্যুর প্যাকেজ",
      description:
        "We offer local and international tour packages for your dream destinations. পরিবার বা বন্ধুদের নিয়ে উপভোগ করুন আনন্দময় ভ্রমণ।",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
      title: "Travel Insurance | ট্রাভেল ইনসুরেন্স",
      description:
        "Stay safe during your journey with our trusted travel insurance services. যাত্রার সময় অপ্রত্যাশিত সমস্যার বিরুদ্ধে সুরক্ষা দিতে আমরা দিচ্ছি নির্ভরযোগ্য ট্রাভেল ইন্সুরেন্স সুবিধা।",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Our Services <span className="text-cyan-500">| আমাদের সেবা</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          We provide all kinds of travel and visa-related services with honesty, reliability, and care.  
          আমরা দেশ ও বিদেশে ভ্রমণ সংক্রান্ত সম্পূর্ণ সেবা প্রদান করি – আপনার যাত্রাকে করে তুলি আরামদায়ক ও নির্ভরযোগ্য।
        </p>

        {/* ✅ Grid Center Fix */}
        <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 text-center transition-transform bg-white shadow-md place-items-center rounded-2xl hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-100">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
