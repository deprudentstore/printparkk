import { Icon } from "./Icons";

export default function CTAContact() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-dark text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
            <Icon name="phone" className="w-6 h-6 text-brand" />
          </span>
          <div>
            <p className="font-bold text-lg">Have a Question or Need a Custom Offer?</p>
            <p className="text-white/50 text-sm">Call now or send a message. We're here to help.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+12345678900" className="font-semibold text-brand">+1 (234) 567-8900</a>
          <a href="/contact" className="bg-brand text-dark font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
