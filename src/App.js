import './App.css';
import TestimonialCard from './TestimonialCard';

import { testimonials } from './Content';

function App() {
  let key = 0;

  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={key++} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default App;
