import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
  ChefHat,
  Hammer,
  PaintBucket,
  Grid3X3,
  Layers,
  Palette,
  Check,
  Instagram,
  Facebook,
  Clock,
  Award,
  Users,
  Heart
} from 'lucide-react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            HA <span>Kitchens</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:647-780-7017" className="btn btn-primary">Call Now</a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="tel:647-780-7017" className="btn btn-primary" style={{ marginTop: '20px' }}>Call Now</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-label">Welcome to HA Kitchens</span>
            <h1>
              Kitchens Built <span className="highlight">for You</span>
            </h1>
            <p>
              Experience the heart of your home reborn. We specialize in bringing
              beautiful, functional kitchens to life with meticulous attention to
              every detail.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-large">
                Get Free Quote
              </a>
              <a href="#services" className="btn btn-outline btn-large">
                Our Services
              </a>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Award size={22} />
                </div>
                <div className="hero-feature-text">
                  <h4>Quality First</h4>
                  <p>Premium materials</p>
                </div>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Heart size={22} />
                </div>
                <div className="hero-feature-text">
                  <h4>Family Owned</h4>
                  <p>Personal touch</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-container">
              <div className="hero-image-main">
                <ChefHat size={80} />
                <span>Your Dream Kitchen Awaits</span>
              </div>
              <motion.div
                className="hero-accent-box"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3>10+</h3>
                <p>Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-main">
              <span>Craftsmanship & Care</span>
            </div>
            <div className="about-image-accent"></div>
          </motion.div>
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Us</span>
            <h2>Crafting Kitchens with Love & Dedication</h2>
            <p>
              We take immense pride in crafting stunning kitchens that are built to last.
              Our dedicated team delivers superior craftsmanship from the first design
              consultation to the final installation.
            </p>
            <p className="highlight-text">
              &ldquo;Every kitchen we create is a reflection of our commitment to
              excellence and your vision for the perfect home.&rdquo;
            </p>
            <p>
              As a family-owned business in Mississauga, we understand the importance
              of your kitchen as the heart of your home. We treat every project as if
              it were our own, ensuring personalized service and attention to detail
              that larger companies simply can&apos;t match.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <Check size={18} />
                <span>Licensed & Insured</span>
              </div>
              <div className="about-feature">
                <Check size={18} />
                <span>Free Consultations</span>
              </div>
              <div className="about-feature">
                <Check size={18} />
                <span>Quality Materials</span>
              </div>
              <div className="about-feature">
                <Check size={18} />
                <span>Competitive Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Services</span>
            <h2>What We Offer</h2>
            <p>
              From complete kitchen remodels to specific installations,
              we provide comprehensive services tailored to your needs.
            </p>
          </motion.div>
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <Layers size={32} />
              </div>
              <h3>Cabinet Assembly</h3>
              <p>
                Expert assembly and installation of kitchen cabinets,
                ensuring perfect alignment and lasting durability.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <Grid3X3 size={32} />
              </div>
              <h3>Countertop Installation</h3>
              <p>
                Professional installation of granite, quartz, marble,
                and other premium countertop materials.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <Hammer size={32} />
              </div>
              <h3>Kitchen Flooring</h3>
              <p>
                Beautiful and durable flooring solutions including
                tile, hardwood, and luxury vinyl installations.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <ChefHat size={32} />
              </div>
              <h3>Kitchen Remodeling</h3>
              <p>
                Complete kitchen transformations from design to
                completion, bringing your dream kitchen to life.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <Palette size={32} />
              </div>
              <h3>Tile Backsplash</h3>
              <p>
                Stunning backsplash installations and remodeling
                to add character and style to your kitchen.
              </p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-icon">
                <PaintBucket size={32} />
              </div>
              <h3>Wall Painting & Finishing</h3>
              <p>
                Professional painting and wall finishing services
                to complete your kitchen&apos;s perfect look.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us" id="why-us">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2>The HA Kitchens Difference</h2>
            <p>
              We&apos;re not just contractors—we&apos;re craftspeople who care
              about creating the kitchen you&apos;ve always dreamed of.
            </p>
          </motion.div>
          <motion.div
            className="why-us-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="why-us-item" variants={fadeInUp}>
              <div className="why-us-number">10+</div>
              <h3>Years Experience</h3>
              <p>Trusted expertise in kitchen installations</p>
            </motion.div>
            <motion.div className="why-us-item" variants={fadeInUp}>
              <div className="why-us-number">100%</div>
              <h3>Satisfaction</h3>
              <p>We don&apos;t rest until you&apos;re happy</p>
            </motion.div>
            <motion.div className="why-us-item" variants={fadeInUp}>
              <div className="why-us-number">24h</div>
              <h3>Response Time</h3>
              <p>Quick quotes and communication</p>
            </motion.div>
            <motion.div className="why-us-item" variants={fadeInUp}>
              <div className="why-us-number">Fair</div>
              <h3>Pricing</h3>
              <p>Quality work at honest prices</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Kitchen?</h2>
            <p>
              Let&apos;s discuss your project. We offer free consultations and
              competitive quotes. Your dream kitchen is just a phone call away.
            </p>
            <a href="tel:647-780-7017" className="btn btn-primary btn-large">
              Call 647-780-7017
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Contact Us</span>
            <h2>Let&apos;s Build Your Dream Kitchen</h2>
            <p>
              Ready to get started? Reach out today for a free consultation.
              We&apos;d love to hear about your project and help bring your
              vision to life.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Phone</h4>
                  <p><a href="tel:647-780-7017">647-780-7017</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>977 Sonoma Court, Mississauga, ON</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Hours</h4>
                  <p>Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Request a Free Quote</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(647) 000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" placeholder="I'm looking to renovate my kitchen..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                HA <span>Kitchens</span>
              </a>
              <p>
                Your trusted partner for kitchen installations and remodeling
                in Mississauga and the Greater Toronto Area. Quality craftsmanship,
                honest pricing, and a personal touch.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Cabinet Assembly</a></li>
                <li><a href="#services">Countertops</a></li>
                <li><a href="#services">Kitchen Flooring</a></li>
                <li><a href="#services">Remodeling</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:647-780-7017">647-780-7017</a></li>
                <li><a href="#contact">Mississauga, ON</a></li>
                <li><a href="#contact">Free Quotes</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 HA Kitchens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
