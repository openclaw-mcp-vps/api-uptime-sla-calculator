export default function Page() {
  const faqs = [
    {
      q: 'How does SLA credit calculation work?',
      a: 'You define your SLA terms (e.g. 99.9% uptime) and monthly contract value. When downtime is detected, the app calculates the exact credit amount owed based on your agreement.'
    },
    {
      q: 'Which APIs can I monitor?',
      a: 'Any HTTP/HTTPS endpoint. Add the URL, set your check interval, and the app starts tracking uptime and latency automatically.'
    },
    {
      q: 'Can I export downtime reports?',
      a: 'Yes. Generate PDF or CSV reports per API with incident timelines and calculated SLA credits — ready to send to your vendor.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate SLA Credits from{' '}
          <span className="text-[#58a6ff]">API Downtime</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your third-party APIs, track every outage, and automatically calculate the SLA credits your vendors owe you — no spreadsheets needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📡', title: 'Scheduled Checks', desc: 'Automated HTTP checks every minute' },
          { icon: '📊', title: 'SLA Thresholds', desc: 'Configurable uptime targets per API' },
          { icon: '💰', title: 'Credit Calculator', desc: 'Instant credit amounts from downtime' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited API endpoints',
              'Minute-level uptime checks',
              'Configurable SLA terms',
              'Automatic credit calculations',
              'PDF & CSV downtime reports',
              'Email incident alerts'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Monitoring
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        © {new Date().getFullYear()} API Uptime SLA Calculator. All rights reserved.
      </footer>
    </main>
  )
}
