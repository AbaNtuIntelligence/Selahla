import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import SocialStack from '../components/SocialStack'
import {
  FaCrown,
  FaHandshake,
  FaChartLine,
  FaFileInvoice,
  FaTrophy,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaShieldAlt,
  FaBriefcase,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #112240 0%, #020c1b 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/50 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 border border-accent/30 rounded-full text-xs font-medium tracking-widest text-accent uppercase bg-accent/5 backdrop-blur-sm">
            Est. 2021
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mt-6"
            data-aos="fade-up"
          >
            <span className="indigo-text">Empowering</span>
            <br />
            <span className="text-light">Entrepreneurs.</span>
          </h1>
          <p
            className="text-light/70 max-w-2xl mx-auto mt-6 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Building sustainable businesses through integrated consulting, training, and enterprise development.
          </p>
          <div
            className="mt-10 flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#services"
              className="px-8 py-3 gold-gradient text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent/50 text-accent font-bold rounded-full hover:bg-accent/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}

<section id="about" className="section-padding bg-secondary/30">
  <div className="container mx-auto">
    <SectionTitle
      title="About Selahla Investments &amp; Services Academy"
      subtitle="South African business consulting and entrepreneurship development company supporting entrepreneurs, start-ups, and SMMEs from idea to growth."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <p className="text-light/80 leading-relaxed">
          Established on 14 April 2021, Selahla Investments and Services Academy (Pty) Ltd is a 100% Black-owned, B-BBEE Level 1 contributor. We combine consulting, training, practical skills, and enterprise development to help entrepreneurs formalise, comply, plan, become funding-ready, access markets, and build sustainable enterprises.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-primary/50 p-4 rounded-lg border border-accent/10">
            <p className="text-accent text-2xl font-bold">100%</p>
            <p className="text-sm text-light/60">Black Owned</p>
          </div>
          <div className="bg-primary/50 p-4 rounded-lg border border-accent/10">
            <p className="text-accent text-2xl font-bold">Level 1</p>
            <p className="text-sm text-light/60">B-BBEE Contributor</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
        <div className="bg-secondary p-6 rounded-xl border border-accent/10 text-center">
          <FaCrown className="text-4xl text-accent mx-auto mb-2" />
          <h4 className="font-heading text-light">Vision</h4>
          <p className="text-xs text-light/60 mt-1">Leading entrepreneurship support organisation</p>
        </div>
        <div className="bg-secondary p-6 rounded-xl border border-accent/10 text-center">
          <FaRocket className="text-4xl text-accent mx-auto mb-2" />
          <h4 className="font-heading text-light">Mission</h4>
          <p className="text-xs text-light/60 mt-1">Accessible, practical, results-driven support</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Core Services"
            subtitle="Comprehensive solutions to formalise, comply, plan, and grow your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<FaFileInvoice />}
              title="Business Registration & Compliance"
              description="CIPC registration, annual returns, SARS compliance, B-BBEE guidance, CSD registration, and compliance assessments."
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="Funding Readiness"
              description="Funding assessments, business plans, budgets, financial forecasts, and application support to present your business professionally."
            />
            <ServiceCard
              icon={<FaBriefcase />}
              title="Business Plans & Profiles"
              description="Professional business plans, company profiles, capability statements, and presentations for funding and procurement."
            />
            <ServiceCard
              icon={<FaHandshake />}
              title="Tender, CSD & Supplier Readiness"
              description="CSD registration, compliance checklists, tender-ready profiles, and bid document guidance."
            />
            <ServiceCard
              icon={<FaGraduationCap />}
              title="Entrepreneurship Training"
              description="Fundamentals, business models, planning, financial literacy, marketing, customer service, and digital skills."
            />
            <ServiceCard
              icon={<FaUsers />}
              title="Enterprise Development"
              description="Recruitment, training, practical skills, mentorship, and business growth support for sustainable enterprises."
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Start-Up Journey"
            subtitle="A step-by-step roadmap from business idea to sustainable growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Business Idea', desc: 'Refine the opportunity' },
              { step: 2, title: 'Business Model', desc: 'Define customers and revenue' },
              { step: 3, title: 'Formalisation', desc: 'Registration and documentation' },
              { step: 4, title: 'Compliance', desc: 'Understand applicable requirements' },
              { step: 5, title: 'Business Plan', desc: 'Strategy and implementation' },
              { step: 6, title: 'Funding Readiness', desc: 'Prepare for opportunities' },
              { step: 7, title: 'Market Readiness', desc: 'Profile, marketing and sales' },
              { step: 8, title: 'Launch', desc: 'Begin trading' },
              { step: 9, title: 'Development', desc: 'Mentorship, improvement and growth' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-primary/50 p-6 rounded-xl border border-accent/10 card-hover flex items-start gap-4"
                data-aos="fade-up"
              >
                <div className="flex-shrink-0 w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-primary font-bold">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-light font-heading">{item.title}</h4>
                  <p className="text-light/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Value Proposition"
            subtitle="Connecting the stages of entrepreneurship – Register → Comply → Plan → Prepare → Market → Operate → Grow."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/40 p-8 rounded-xl border border-accent/10" data-aos="fade-right">
              <h3 className="text-2xl font-heading gold-text mb-4">Integrated Support</h3>
              <p className="text-light/70 leading-relaxed">
                We connect the stages of entrepreneurship rather than offering isolated training. Practical support designed to close the gap between entrepreneurship training and actual business implementation.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-3 text-light/80">
                  <span className="text-accent">✓</span> Turn business ideas into structured enterprises
                </li>
                <li className="flex items-center gap-3 text-light/80">
                  <span className="text-accent">✓</span> Compliance and funding readiness
                </li>
                <li className="flex items-center gap-3 text-light/80">
                  <span className="text-accent">✓</span> Sustainable income generation
                </li>
              </ul>
            </div>
            <div className="bg-secondary/40 p-8 rounded-xl border border-accent/10" data-aos="fade-left">
              <h3 className="text-2xl font-heading gold-text mb-4">Who We Serve</h3>
              <ul className="space-y-2 text-light/70">
                <li>• Aspiring entrepreneurs and start-ups</li>
                <li>• Existing SMMEs and informal businesses</li>
                <li>• Youth, women and community-based entrepreneurs</li>
                <li>• Cooperatives and community enterprises</li>
                <li>• Government, corporate and NPO programmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto text-center">
          <SectionTitle title="Our Credentials" />
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-primary/50 px-6 py-4 rounded-xl border border-accent/10 flex items-center gap-4">
              <FaTrophy className="text-4xl text-accent" />
              <div>
                <p className="text-light font-bold">B-BBEE Level 1</p>
                <p className="text-sm text-light/60">135% Procurement Recognition</p>
              </div>
            </div>
            <div className="bg-primary/50 px-6 py-4 rounded-xl border border-accent/10 flex items-center gap-4">
              <FaShieldAlt className="text-4xl text-accent" />
              <div>
                <p className="text-light font-bold">100% Black Owned</p>
                <p className="text-sm text-light/60">Registered Private Company</p>
              </div>
            </div>
            <div className="bg-primary/50 px-6 py-4 rounded-xl border border-accent/10 flex items-center gap-4">
              <FaAward className="text-4xl text-accent" />
              <div>
                <p className="text-light font-bold">Tax Compliant</p>
                <p className="text-sm text-light/60">TCS PIN for Good Standing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <SectionTitle title="Contact Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-heading gold-text mb-4">Get in Touch</h3>
              <p className="text-light/70 mb-6">
                We're here to help you build a sustainable business. Reach out to us for consulting, training, or enterprise development support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                  <div>
                    <p className="text-light/80 text-sm">118 High Street, Turffontein</p>
                    <p className="text-light/60 text-sm">Johannesburg, Gauteng, 2190</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-accent text-xl" />
                  <p className="text-light/80 text-sm">011 681 0465</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-accent text-xl" />
                  <p className="text-light/80 text-sm">071 629 9701</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-accent text-xl" />
                  <p className="text-light/80 text-sm">selahlainvestment@gmail.com</p>
                </div>
              </div>
            </div>
            <div
              className="bg-secondary/40 p-8 rounded-xl border border-accent/10"
              data-aos="fade-left"
            >
              <h4 className="text-xl font-heading text-light mb-4">Send a Message</h4>
              <form>
                <div className="mb-4">
                  <label className="block text-light/60 text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-primary/60 border border-accent/20 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-accent/50 transition"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-light/60 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-primary/60 border border-accent/20 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-accent/50 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-light/60 text-sm mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-primary/60 border border-accent/20 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-accent/50 transition"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 gold-gradient text-primary font-bold rounded-lg hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    <SocialStack />
      <Footer />
    </>
  )
}