import React from 'react';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <Service name="Truck" description="Description of Service 1." />
      <Service name="Open Truck" description="Description of Service 2." />
      <Service name="Mini Truck" description="Description of Service 3." />
      <Service name="Containers" description="Description of Service 4." />
    </section>
  );
}

function Service({ name, description }) {
  return (
    <div className="service">
      {/* Add your service content here */}
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Services;
