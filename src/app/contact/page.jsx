import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact <span className="text-blue-500">Me</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Hər hansı layihə, əməkdaşlıq və ya sual üçün mənimlə əlaqə saxlaya
          bilərsən.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">pasaibrahimov27@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+994 55 701 15 45</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-400">Baku, Azerbaijan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
