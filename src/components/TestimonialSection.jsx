import React from "react";

const TestimonialSection = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et convallis lectus. Pellentesque in placerat lorem, id venenatis orci. Nunc lacinia vestibulum ipsum, id aliquam mi tempor non. Proin maximus, libero vitae interdum pulvinar, turpis sem volutpat enim, a posuere risus tortor vel lectus.",
      imageSrc: "john-doe.png", // Replace with the image source for John Doe
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Integer finibus faucibus quam, ac aliquet odio blandit eget. Curabitur et felis non arcu aliquam congue ac ut neque. Aliquam dapibus odio et augue bibendum, sit amet tincidunt ante cursus. Sed imperdiet justo ut arcu volutpat, eget varius sem pulvinar.",
      imageSrc: "jane-smith.png", // Replace with the image source for Jane Smith
    },
    // Add more testimonials as needed
  ];
  console.log(testimonials.length);

  return (
    <section className="p-4">
      <div className="testimonial-container carousel w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id={testimonial.id}
            className="testimonial carousel-item w-full flex flex-col justify-center items-center"
          >
            <div className="testimonial-image">
              <img src={testimonial.imageSrc} alt={testimonial.name} />
            </div>
            <div className="testimonial-content text-center">
              <p>{testimonial.testimonial}</p>
              <div className="testimonial-author text-center">
                {testimonial.name}
              </div>
            </div>
            <div>
              <a
                href={`#` + (testimonial.id - 1 == 0 ? 1 : testimonial.id - 1)}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={
                  `#` +
                  (testimonial.id + 1 == testimonials.length + 1
                    ? 2
                    : testimonial.id + 1)
                }
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
