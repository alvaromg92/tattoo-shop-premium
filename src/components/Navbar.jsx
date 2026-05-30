import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        INK STUDIO
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Styles</li>
        <li>Gallery</li>
        <li>Artists</li>
        <li>Contact</li>
      </ul>

      <button className="cta-button">
        Book Now
      </button>
    </nav>
  )
}

export default Navbar