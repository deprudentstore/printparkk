export default function TrustBar() {
  const payments = ["Visa", "Mastercard", "Amex", "PayPal", "Stripe"];
  return (
    <section className="bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["men/12", "women/22", "men/45"].map((p) => (
              <img key={p} src={`https://randomuser.me/api/portraits/${p}.jpg`} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Customer" />
            ))}
          </div>
          <div>
            <p className="font-semibold text-dark">Trusted by 1,000+</p>
            <p className="text-black/50 text-xs">Happy Customers</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-dark">Secure Payments</p>
          <p className="text-black/50 text-xs">Your payment is 100% safe</p>
        </div>
        <div className="flex items-center gap-3 text-black/60 font-semibold text-xs">
          {payments.map((p) => (
            <span key={p} className="border border-black/10 rounded px-2.5 py-1">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
