import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        INK STUDIO
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#styles">Styles</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="cta-button">
        Book Now
      </a>
    </nav>
  )
}

export default Navbar