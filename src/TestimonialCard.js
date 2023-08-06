import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const img = `/images/image-${testimonial.name
    .split(' ')[0]
    .toLowerCase()}.jpg`;

  return (
    <div className={`card ${testimonial.class}`}>
      <div className="header">
        <img src={img} alt="profile" className="profile-photo" />
        <div className="text-pair">
          <h3 className="name">{testimonial.name}</h3>
          <p className="status">{testimonial.status}</p>
        </div>
      </div>
      <p className="hightlight">{testimonial.highlight}</p>
      <p className="review">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;
