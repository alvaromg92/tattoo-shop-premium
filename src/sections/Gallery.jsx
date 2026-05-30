const tattooImages = [
  'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542727365-19732a80dcfd',
  'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28',
  'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d'
]

function Gallery() {
  return (
  <section id="gallery" className="gallery">
    <h2>Featured Work</h2>

    <div className="gallery-grid">
      {tattooImages.map((image, index) => (
        <div className="gallery-card" key={index}>
          <img
            src={image}
            alt="Tattoo work"
          />
        </div>
      ))}
    </div>
  </section>
)
}

export default Gallery