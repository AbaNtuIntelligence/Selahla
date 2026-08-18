const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="bg-secondary/30 backdrop-blur-sm p-6 rounded-xl border border-accent/10 card-hover"
      data-aos="fade-up"
    >
      <div className="text-4xl text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-heading text-light mb-2">{title}</h3>
      <p className="text-light/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default ServiceCard