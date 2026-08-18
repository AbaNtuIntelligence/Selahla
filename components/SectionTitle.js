const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
        style={{
          background: "linear-gradient(135deg, #d4af37 0%, #f6e27a 50%, #d4af37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-light/60 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 gold-gradient mx-auto mt-4 rounded-full" />
    </div>
  )
}

export default SectionTitle