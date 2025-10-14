import { Link } from "react-router-dom";

export default function Hajj() {
  // ==================== DATA ====================
  const umrahPackages = [
    {
      id: 1,
      title: "Basic",
      oldPrice: "BDT 1,60,000",
      newPrice: "BDT 1,29,999",
      image: "/umrah-basic.jpg",
      features: [
        "✅ ১৫ দিনের সফর (আসা-যাওয়া সহ)",
        "✅ হোটেল দূরত্ব: মক্কা ৬০০মিঃ / মদিনা ৭০০মিঃ",
        "✅ সরাসরি ফ্লাইট (বিমান/সৌদি এয়ারলাইন্স)",
        "✅ ৩ বেলা মানসম্মত খাবার",
        "✅ ২৪ ঘণ্টা চিকিৎসা সেবা",
        "✅ এক সফরে একাধিক ওমরা",
        "✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা",
      ],
    },
    {
      id: 2,
      title: "Standard",
      oldPrice: "BDT 2,00,000",
      newPrice: "BDT 1,49,999",
      image: "/umrah-standard.jpg",
      features: [
        "✅ ১৫ দিনের সফর",
        "✅ হোটেল দূরত্ব: মক্কা ৩৫০মিঃ / মদিনা ৪০০মিঃ",
        "✅ সৌদি এয়ারলাইন্স ফ্লাইট",
        "✅ ৩ বেলা খাবার",
        "✅ ২৪ ঘণ্টা চিকিৎসা সেবা",
        "✅ একাধিক ওমরা সুযোগ",
        "✅ ঐতিহাসিক স্থান ভ্রমণ",
      ],
    },
    {
      id: 3,
      title: "Premium",
      oldPrice: "BDT 2,50,000",
      newPrice: "BDT 1,85,000",
      image: "/umrah-premium.jpg",
      features: [
        "✅ ১৫ দিনের সফর",
        "✅ হোটেল দূরত্ব: মক্কা ০মিঃ / মদিনা ০মিঃ",
        "✅ সৌদি এয়ারলাইন্স ফ্লাইট",
        "✅ ৩ বেলা খাবার",
        "✅ ২৪ ঘণ্টা চিকিৎসা সেবা",
        "✅ একাধিক ওমরা সুযোগ",
        "✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা",
      ],
    },
  ];

  const hajjPackages = [
    {
      id: 1,
      title: "Basic",
      oldPrice: "BDT 6,30,000",
      newPrice: "BDT 6,00,000",
      image: "/hajj-basic.jpg",
      features: [
        "✅ মক্কা ৫০০মিঃ / মদিনা ৮০০মিঃ",
        "✅ উন্নতমানের এসি আবাসন",
        "✅ সরাসরি ফ্লাইট",
        "✅ দুই বেলা দেশীয় খাবার",
        "✅ ২৪ ঘণ্টা চিকিৎসা সেবা",
        "✅ প্রতি রুমে ৪/৬ জন",
        "✅ অভিজ্ঞ মোয়াল্লেম পরিচালনা",
      ],
    },
    {
      id: 2,
      title: "Standard",
      oldPrice: "BDT 7,50,000",
      newPrice: "BDT 6,99,999",
      image: "/hajj-standard.jpg",
      features: [
        "✅ মক্কা ৫০০মিঃ / মদিনা ৪০০মিঃ",
        "✅ এসি আবাসন",
        "✅ সরাসরি ফ্লাইট",
        "✅ তিন বেলা দেশীয় খাবার",
        "✅ চিকিৎসা সেবা",
        "✅ প্রতি রুমে ৪/৬ জন",
        "✅ অভিজ্ঞ মোয়াল্লেম পরিচালনা",
      ],
    },
    {
      id: 3,
      title: "Premium",
      oldPrice: "BDT 8,80,000",
      newPrice: "BDT 8,10,000",
      image: "/hajj-premium.jpg",
      features: [
        "✅ মক্কা ০মিঃ / মদিনা ০মিঃ",
        "✅ এসি আবাসন",
        "✅ সৌদি এয়ারলাইন্স ফ্লাইট",
        "✅ নিজস্ব বাবুর্চি দ্বারা খাবার",
        "✅ চিকিৎসা সেবা",
        "✅ নিজস্ব চাহিদা অনুযায়ী সেবা",
        "✅ অভিজ্ঞ মোয়াল্লেম পরিচালনা",
      ],
    },
  ];

  // ==================== CARD COMPONENT ====================
  const PackageCard = ({ pkg }) => (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
      <div>
        <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {pkg.title}
        </h3>
        <div className="mt-4">
          <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">
            {pkg.oldPrice}
          </span>
          <span className="ml-3 text-[2rem] font-extrabold text-orange-600">
            {pkg.newPrice}
          </span>
        </div>
        <ul className="mt-6 space-y-2 text-gray-700">
          {pkg.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      <Link
        to="/contact"
        className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.05]"
      >
        Book Now
      </Link>
    </div>
  );

  // ==================== RETURN ====================
  return (
    <>
      <section className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl">
        {/* Umrah Section */}
        <div className="mb-12 text-center">
          <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Umrah Packages
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Hajj Section */}
        <div className="mt-16 mb-12 text-center">
          <h2 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Hajj Packages
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hajjPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Agency Info */}
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto my-12 overflow-hidden bg-white shadow-2xl h-80 rounded-xl">
        <img
          src="/agency-info.jpg"
          alt="Agency Info"
          className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-[1.05]"
        />
      </div>
    </>
  );
}
