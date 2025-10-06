import React from "react"

export default function Location() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Our Location <span className="text-cyan-500">| আমাদের অবস্থান</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600">
          Visit our office to get travel and visa assistance in person.  
          আমাদের অফিসে সরাসরি এসে আপনার ভ্রমণ ও ভিসা সংক্রান্ত সকল সহায়তা নিতে পারেন।
        </p>

        <div className="w-full overflow-hidden border shadow-lg h-96 rounded-2xl">
          <iframe
            title="Fly Easy Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.845376026734!2d90.0438052!3d23.7836475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754350048d69c6d%3A0x701c0a5aebade0d9!2sFly%20Easy%20Travels!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
