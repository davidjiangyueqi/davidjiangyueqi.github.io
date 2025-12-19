import { HeroHeader } from "../components/HeroHeader";

export function ContactPage() {
  return (
    <div className="space-y-8">
      <HeroHeader
        title="Contact"
        subtitle="For performance inquiries, collaborations, or editorial work, use the form below."
      />

      <section className="glass-panel max-w-xl rounded-3xl p-6 sm:p-8">
        <form
          action="https://formspree.io/f/your-endpoint"
          method="POST"
          className="space-y-4 text-sm"
        >
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-brand-500"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-brand-500"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-brand-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Send
          </button>
        </form>
        <p className="mt-3 text-[0.7rem] text-slate-400">
          Replace the form endpoint with your preferred email or form service.
        </p>
      </section>
    </div>
  );
}


