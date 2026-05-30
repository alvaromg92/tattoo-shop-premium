import '../styles/hero.css'
import heroImage from '../assets/tattoo-hero.jpg'
function Hero() {
  return (
    <section
  className="hero"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.65),
        rgba(0,0,0,0.65)
      ),
      url(${heroImage})
    `
    }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">
          PREMIUM TATTOO EXPERIENCE
        </p>

        <h1>
          INK THAT TELLS
          <br />
          YOUR STORY
        </h1>

        <p className="hero-description">
          Premium tattoos crafted with precision and style.
        </p>

        <div className="hero-buttons">
          <a href="#contact">
            <button className="primary-btn">
              Book Appointment
            </button>
          </a>
          <a
            href="#gallery"
            className="secondary-btn"
       >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero