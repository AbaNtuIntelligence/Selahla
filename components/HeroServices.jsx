const services = [
  'Investment Education', 'Financial Literacy', 'Wealth Building',
  'Entrepreneurship', 'Business Development', 'Financial Planning',
  'Procurement', 'Training', 'Development', 'Supply Services',
]

export default function HeroServices() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-10" aria-label="Our service areas">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">Our Service Areas</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 list-none p-0 m-0">
        {services.map((service) => (
          <li key={service} className="hero-service-label flex min-h-[56px] items-center justify-center rounded-lg border border-accent/30 bg-secondary/60 px-3 py-3 text-center text-xs sm:text-sm font-medium text-light shadow-sm select-none">
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}
