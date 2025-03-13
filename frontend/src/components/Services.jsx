import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/corporate.jpg",
      title: "Corporate Events",
    },
    {
      id: 2,
      url: "/weddings.jpeg",
      title: "Weddings & Engagements",
    },
    {
      id: 3,
      url: "/bir.jpg",
      title: "Birthday Planning",
    },
    {
      id: 4,
      url: "/par.jpg",
      title: "Private Parties",
    },
    {
      id: 5,
      url: "/dest.jpg",
      title: "Luxury & Destination Events",
    },
    {
      id: 6,
      url: "/com.jpg",
      title: "Social & Community Events",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR EXPERTISE</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;