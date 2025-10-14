import { Link } from "react-router-dom";

export default function InternationalTourPackage() {
  // ==================== DATA ====================
  const tourPackages = [
    {
      id: 1,
      title: "Dubai Tour",
      price: "৳ 28,900.00",
      image: "/dubai.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। ভিসা",
        "২। থ্রি স্টার হোটেলে টুইন শেয়ার রুম",
        "৩। সকালের নাস্তা + রাতে ডিনার",
        "৪। এয়ারপোর্ট পিক এন্ড ড্রপ এবং লোকাল ট্রান্সপোর্ট",
        "৫। রিভার ক্রুজ ডিনার + ডেজার্ট সাফারি ট্যুর + সিটি ট্যুর",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, দুপুরের খাবার, অতিরিক্ত খরচ।",
        "💥শর্তঃ ৫০% অগ্রিম বুকিং, ভিসা অনুসারে ৩-৭ দিন পূর্বে বুকিং আবশ্যক।",
      ],
    },
    {
      id: 2,
      title: "Malaysia Tour",
      price: "৳ 19,900.00",
      image: "/malaysia.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। থ্রি স্টার হোটেলে টুইন শেয়ার রুম",
        "২। সকালের নাস্তা",
        "৩। এয়ারপোর্ট পিক এন্ড ড্রপ এবং লোকাল ট্রান্সপোর্ট",
        "৪। প্রতিটি লোকেশনে সাইটসীন",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, এম্বাসি ফি, দুপুর/রাতের খাবার।",
        "💥শর্তঃ ২৫% অগ্রিম বুকিং, ভিসা অনুসারে ৩–১৫ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 3,
      title: "Singapore & Malaysia & Thailand",
      price: "৳ 41,900.00",
      image: "/singaporemalaysia.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। থ্রি স্টার হোটেলে টুইন শেয়ার রুম",
        "২। সকালের নাস্তা",
        "৩। এয়ারপোর্ট পিক এন্ড ড্রপ এবং লোকাল ট্রান্সপোর্ট",
        "৪। সাইটসীন ট্যুর",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, এম্বাসি ফি, দুপুর ও রাতের খাবার।",
        "💥শর্তঃ ২৫% অগ্রিম বুকিং, ভিসা অনুযায়ী ৩–৪০ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 4,
      title: "Singapore & Malaysia",
      price: "৳ 29,500.00",
      image: "/singaporemalaysia.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "থ্রি স্টার হোটেল, সকালের নাস্তা, লোকাল ট্রান্সপোর্ট, সাইটসীন ট্যুর।",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট ও এম্বাসি ফি।",
      ],
    },
    {
      id: 5,
      title: "Bali Tour",
      price: "৳ 14,990.00",
      image: "/bali.jpg",
      description: [
        "💥বালি যেতে ভিসা লাগে না!",
        "১। চার তারকা হোটেলে টুইন শেয়ার রুম",
        "২। ব্রেকফাস্ট + লাঞ্চ + ডিনার",
        "৩। এয়ারপোর্ট পিক এন্ড ড্রপ",
        "৪। ফুল-ডে সাইটসীন",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, অতিরিক্ত খরচ।",
        "💥শর্তঃ ২৫% অগ্রিম, ৩ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 6,
      title: "Bangkok + Pattaya",
      price: "৳ 20,900.00",
      image: "/bankgkokpattaya.jpg",
      description: [
        "💥ব্যাংকক+পাটায়া ল্যান্ড প্যাকেজ (৪ রাত/৫ দিন)",
        "৩* হোটেল, ব্রেকফাস্ট সহ",
        "কোরাল আইল্যান্ড ট্যুর, ব্যাংকক সিটি ট্যুর, লোকাল ট্রান্সফার",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, এম্বাসি ফি",
        "💥শর্তঃ ২৫% অগ্রিম, ৩–৩০ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 7,
      title: "Canada Tour",
      price: "৳ 84,900.00",
      image: "/canada.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা:",
        "১। ভিসা প্রসেসিং",
        "২। থ্রি স্টার হোটেল, সকালের নাস্তা",
        "৩। এয়ারপোর্ট পিক এন্ড ড্রপ, সাইটসীন",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, এম্বাসি ফি, দুপুর/রাতের খাবার।",
        "💥শর্তঃ ২৫% অগ্রিম, ভিসা অনুযায়ী ১০–৪৫ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 8,
      title: "China & Vietnam Tour",
      price: "৳ 29,999.00",
      image: "/chinavietnam.jpg",
      description: [
        "💥থ্রি স্টার হোটেল, সকালের নাস্তা, সাইটসীন ট্যুর",
        "💥অন্তর্ভুক্ত নয়ঃ বিমান টিকেট, এম্বাসি ফি",
        "💥শর্তঃ ২৫% অগ্রিম, ৩–২০ দিন পূর্বে বুকিং।",
      ],
    },
    {
      id: 9,
      title: "Darjeeling Tour",
      price: "৳ 21,900.00",
      image: "/darjeeling.jpg",
      description: [
        "🎈৫ দিন/৪ রাত দার্জিলিং + গ্যাংটক ট্যুর",
        "💥ঢাকা – দার্জিলিং – গ্যাংটক – ঢাকা এসি বাস + জীপ",
        "💥৪ রাত হোটেল + ৩ বেলা খাবার + সাইটসীন",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ ট্রাভেল ট্যাক্স, বর্ডার খরচ, এন্ট্রি ফি।",
      ],
    },
  ];

  // ==================== CARD COMPONENT ====================
  const PackageCard = ({ pkg }) => (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
      <div>
        <div className="overflow-hidden rounded-[20px] h-72 mb-4 -mx-6 -mt-6">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {pkg.title}
        </h3>
        <p className="my-2 text-lg font-bold text-center text-orange-600">
          {pkg.price}
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
          {pkg.description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <Link
        to="/contact"
        className="inline-block px-5 py-3 mt-6 font-medium text-center text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.05]"
      >
        Book Now
      </Link>
    </div>
  );

  // ==================== RETURN ====================
  return (
    <section className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
          International Tour Packages
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tourPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}


