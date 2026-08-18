import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark/90 text-light/70 border-t border-accent/10">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.jpeg"
                alt="Selahla Investments"
                className="h-12 w-auto object-contain border border-accent/20 rounded-full shadow-sm"
              />
              <span className="text-xl font-heading font-bold whitespace-nowrap">
                <span className="bg-gold indigo-text">SELAHLA</span>
                <span className="text-light text-xs ml-1">INVESTMENTS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mt-2">
              Empowering Entrepreneurs. Building Sustainable Businesses.
            </p>
            <p className="text-xs mt-1">Reg. No. 2021/545171/07</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-light font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                118 High Street, Turffontein, Johannesburg, 2190
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent" />
                011 681 0465
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-accent" />
                071 629 9701
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                selahlainvestment@gmail.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-light font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-accent transition">About</Link></li>
              <li><Link href="#services" className="hover:text-accent transition">Services</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/10 mt-8 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Selahla Investments and Services Academy (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer