const testimonials = [
  {
    name: 'Michael R.',
    review: 'Best tattoo experience I have ever had.'
  },
  {
    name: 'Sarah L.',
    review: 'Amazing artists and incredible attention to detail.'
  },
  {
    name: 'Daniel K.',
    review: 'The studio atmosphere felt premium and professional.'
  }
]

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials