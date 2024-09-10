import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Cards from "./TestimonialCard";
import "../../css/Card.css";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, ExampleCorp",
      testimonial:
        "This is the best service I have ever used. Highly recommend!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWA2z-DUILJYCHkCqV9TNTHlOaqYiyuGHQw&s",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "CTO, TechSolutions",
      testimonial:
        "Amazing experience, the team was very supportive.",
      image:
        "https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      role: "Marketing Manager, MarketPro",
      testimonial:
        "Our sales have increased thanks to their incredible platform.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJeVB25KiWzcmJ9GIrxDKQUotWsBTsp5T5g&s",
      rating: 5,
    },
    {
      name: "Bob Brown",
      role: "Founder, StartupHub",
      testimonial:
        "A game changer for our startup, couldn't be happier.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWA2z-DUILJYCHkCqV9TNTHlOaqYiyuGHQw&s",
      rating: 4,
    },
    {
      name: "Charlie Davis",
      role: "Product Lead, InnovateX",
      testimonial:
        "Their support and product quality are top-notch.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VycHJpc2UlMjBmYWNlfGVufDB8fDB8fHww",
      rating: 5,
    },
    {
      name: "Dana Lee",
      role: "HR Manager, PeopleFirst",
      testimonial:
        "Streamlined our processes and improved efficiency.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJeVB25KiWzcmJ9GIrxDKQUotWsBTsp5T5g&s",
      rating: 4,
    },
  ];

  const groupTestimonials = (data, groupSize) => {
    const groups = [];
    for (
      let i = 0;
      i < data.length;
      i += groupSize
    ) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const testimonialGroups = groupTestimonials(
    testimonials,
    2
  );

  return (
    <>
      <div className="card-heading-service">
        <h2 className="heading-underline-service">
          Testimonials
        </h2>
      </div>
      <Carousel data-bs-theme="dark">
        {testimonialGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-items-center">
              {group.map((testimonial, idx) => (
                <div key={idx} className="mx-2">
                  <Cards
                    name={testimonial.name}
                    role={testimonial.role}
                    testimonial={
                      testimonial.testimonial
                    }
                    image={testimonial.image}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Testimonials;
