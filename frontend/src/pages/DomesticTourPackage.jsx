import { Link } from "react-router-dom";

export default function DomesticTourPackage() {
  // ==================== DATA ====================
  const tourPackages = [
    {
      id: 1,
      title: "Sundarbans Tour",
      price: "৳ 8,500.00",
      image: "/sundarban.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। রাউন্ড ট্রিপ বাস সার্ভিস",
        "২। হোটেল বা রিসোর্টে থাকার ব্যবস্থা",
        "৩। নৌকা ভ্রমণ",
        "৪। গাইডেড সাফারি",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ খাবার ও ব্যক্তিগত খরচ।",
      ],
    },
    {
      id: 2,
      title: "Cox's Bazar Beach Tour",
      price: "৳ 6,999.00",
      image: "/coxbazar.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। বাস বা ট্রেনের টিকিট",
        "২। হোটেল বা রিসোর্টে থাকার ব্যবস্থা",
        "৩। সকালের নাস্তা",
        "৪। সী-ব্রিজ ও স্থানীয় দর্শনীয় স্থান ভ্রমণ",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ অতিরিক্ত খাবার ও খরচ।",
      ],
    },
    {
      id: 3,
      title: "Srimangal Tea Garden Tour",
      price: "৳ 5,500.00",
      image: "/srimangal.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। বাস সার্ভিস এবং হোটেল",
        "২। চা বাগান ভ্রমণ",
        "৩। স্থানীয় হ্যান্ডিক্রাফট মার্কেট ভ্রমণ",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ খাবার ও ব্যক্তিগত খরচ।",
      ],
    },
    {
      id: 4,
      title: "Sajek Valley Tour",
      price: "৳ 7,200.00",
      image: "/sajek.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। বাস সার্ভিস এবং হোটেল বা রিসোর্ট",
        "২। পাহাড়ি ভিউ পয়েন্ট ভ্রমণ",
        "৩। স্থানীয় বাজার ভ্রমণ",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ খাবার ও ব্যক্তিগত খরচ।",
      ],
    },
    {
      id: 5,
      title: "Rangamati Lake Tour",
      price: "৳ 6,800.00",
      image: "/rangamati.jpg",
      description: [
        "💥প্যাকেজের অন্তর্ভুক্ত সেবা সমূহ:",
        "১। বাস সার্ভিস",
        "২। হোটেল বা রিসোর্টে থাকার ব্যবস্থা",
        "৩। লেক ভ্রমণ নৌকা",
        "৪। স্থানীয় দর্শনীয় স্থান ভ্রমণ",
        "",
        "💥অন্তর্ভুক্ত নয়ঃ খাবার ও ব্যক্তিগত খরচ।",
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
          Domestic Tour Packages
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
