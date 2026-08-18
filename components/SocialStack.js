import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

const SocialStack = () => {
  const socialLinks = [
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/company/selahla' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/selahla' },
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com/selahla' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/selahla' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/276299701' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@selahla' },
  ]

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 text-light/80 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
          aria-label={label}
        >
          <Icon className="text-lg" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-primary/90 backdrop-blur-sm text-xs font-medium text-light border border-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialStack