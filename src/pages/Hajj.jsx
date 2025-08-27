

import { Link } from 'react-router-dom'

export default function Hajj() {

    return(
        <>
            <section
                className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl"
                // style={{ backgroundImage: "url('/travel-website/hajj-makka-img.webp')" }}
            >
                {/* Umrah Packages */}
                <div className="mb-12 text-center">
                    <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg backdrop-blur-sm border-[3px] border-blue-500 sm:text-4xl">Holy Umrah Packages</h1>
                    {/* <p className="mt-3 font-bold text-black"> Umrah journey.</p> */}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Umrah Basic */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Basic Umrah Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900">Basic</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 1,60,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 1,29,999</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-center gap-2 text-left">✅ ১৫ দিনের সফর (আসা-যাওয়া সহ)</li>
                                <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ -৬০০মিঃ এবং মদিনা শরীফ -৭০০মিঃ</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (বিমান বাংলাদেশ/ইউএস বাংলা/সৌদি এয়ারলাইন্স)</li>
                                <li className="flex items-center gap-2 text-left">✅ ৩ বেলা মানসম্মত খাবার</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ এক সফরে একাধিক ওমরা করার সুযোগ</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা, মক্কার ও মদিনার ঐতিহাসিক স্থান ভ্রমণ</li>
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Umrah Standard */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Standard Umrah Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900">Standard</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 2,00,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 1,49,999,</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-center gap-2 text-left">✅ ১৫ দিনের সফর (আসা-যাওয়া সহ)</li>
                                <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ -৩৫০মিঃ এবং মদিনা শরীফ -৪০০মিঃ</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (সৌদি এয়ারলাইন্স الخطوط السعودية)</li>
                                <li className="flex items-center gap-2 text-left">✅ ৩ বেলা মানসম্মত খাবার</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ এক সফরে একাধিক ওমরা করার সুযোগ</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা, মক্কার ও মদিনার ঐতিহাসিক স্থান ভ্রমণ</li>
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Umrah Premium */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Premium Umrah Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900">Premium</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 2,50,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 1,85,000</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-center gap-2 text-left">✅ ১৫ দিনের সফর (আসা-যাওয়া সহ)</li>
                                <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ -০মিঃ এবং মদিনা শরীফ -০মিঃ</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (সৌদি এয়ারলাইন্স الخطوط السعودية)</li>
                                <li className="flex items-center gap-2 text-left">✅ ৩ বেলা মানসম্মত খাবার</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ এক সফরে একাধিক ওমরা করার সুযোগ</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা, মক্কার ও মদিনার ঐতিহাসিক স্থান ভ্রমণ</li>
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                {/* Hajj Packages */}
                <div className="mt-16 mb-12 text-center">
                    <h2 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg backdrop-blur-sm border-[3px] border-blue-500 sm:text-4xl">Holy Hajj Packages</h2>
                    {/* <p className="mt-3 text-gray-300">Choose the plan that fits your Hajj.</p> */}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Hajj Basic */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Basic Hajj Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900"> Basic</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 6,30,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 6,00,000</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ ৫০০মিঃ/১০০০মিঃ ও মদিনা শরীফ ৮০০ মিটার</li>
                                <li className="flex items-center gap-2 text-left">✅ সম্পূর্ণ এয়ারকন্ডিশন (এসি) সম্বলিত উন্নতমানের আবাসন ব্যবস্থা</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (সৌদি এয়ারলাইন্স الخطوط السعودية)</li>
                                <li className="flex items-center gap-2 text-left">✅ রুচিসম্মত (দুই বেলা) দেশীয় খাবার।</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ ‌ প্রতি রুমে ৪/৬ জন আলাদা ওয়াশরুমের সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা</li> 
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Hajj Standard */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Standard Hajj Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900"> Standard</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 7,50,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 6,99,999</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ ৫০০মিঃ/১০০০মিঃ ও মদিনা শরীফ ৪০০মিঃ</li>
                                <li className="flex items-center gap-2 text-left">✅ সম্পূর্ণ এয়ারকন্ডিশন (এসি) সম্বলিত উন্নতমানের আবাসন ব্যবস্থা</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (সৌদি এয়ারলাইন্স الخطوط السعودية)</li>
                                <li className="flex items-center gap-2 text-left">✅ রুচিসম্মত (তিন বেলা) দেশীয় খাবার।</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ ‌ প্রতি রুমে ৪/৬ জন আলাদা ওয়াশরুমের সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা</li> 
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Hajj Premium */}
                    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
                        <div>
                            <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
                                <img src="/travel-website/hajj-img.jpg" alt="Premium Hajj Package" className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-900"> Premium</h3>
                            <div className="mt-4">
                                <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">BDT 8,80,000</span>
                                <span className="ml-3 text-[2rem] font-extrabold text-orange-600">BDT 8,10,000</span>
                            </div>
                            <ul className="mt-6 space-y-2 text-gray-700">
                            <li className="flex items-center gap-2 text-left">✅ হোটেল দূরত্ব: মক্কা শরীফ ০মিঃ ও মদিনা শরীফ ০মিঃ</li>
                                <li className="flex items-center gap-2 text-left">✅ সম্পূর্ণ এয়ারকন্ডিশন (এসি) সম্বলিত উন্নতমানের আবাসন ব্যবস্থা</li>
                                <li className="flex items-center gap-2 text-left">✅ সরাসরি ফ্লাইট (সৌদি এয়ারলাইন্স الخطوط السعودية)</li>
                                <li className="flex items-center gap-2 text-left">✅ নিজস্ব চাহিদা অনুসারে নিজস্ব বাবুর্চি দ্বারা রুচিসম্মত দেশীয় খাবার।</li>
                                <li className="flex items-center gap-2 text-left">✅ ২৪ ঘণ্টা চিকিৎসা সেবা সুবিধা</li>
                                <li className="flex items-center gap-2 text-left">✅ ‌‌ নিজস্ব চাহিদা অনুসারে যাবতীয় সেবা প্রদান করা হবে।</li>
                                <li className="flex items-center gap-2 text-left">✅ অভিজ্ঞ মোয়াল্লেম দ্বারা পরিচালনা</li> 
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-1000 ease-[ease] rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.1] focus:scale-[1.1]"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>
<div className="flex items-center justify-center w-full max-w-4xl mx-auto my-12 overflow-hidden bg-white shadow-2xl h-80 rounded-xl">
  <div className="w-full h-full overflow-hidden">
    <img
      src="/travel-website/agency-info.jpg"
      alt="Agency Info"
      className="w-full mr-3 h-full bg-cover transition-transform duration-700 ease-in-out transform cursor-pointer hover:scale-[1.05]"
    />
  </div>
</div>

        </>
    )

}
