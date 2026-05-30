import '../styles/styles.css'

const tattooStyles = [
  {
    title: 'Blackwork',
    description: 'Bold black ink with timeless style.'
  },
  {
    title: 'Realism',
    description: 'Highly detailed and lifelike designs.'
  },
  {
    title: 'Fine Line',
    description: 'Minimal, elegant and precise tattoos.'
  },
  {
    title: 'Custom Design',
    description: 'Unique artwork made for your story.'
  },
  
]

function Styles() {
  return (
  <section className="styles">
    <h2>Our Tattoo Styles</h2>

    <div className="styles-container">
      {tattooStyles.map((style, index) => (
        <div className="style-card" key={index}>
          <h3>{style.title}</h3>
          <p>{style.description}</p>
        </div>
      ))}
    </div>
  </section>
)
}

export default Styles