import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center font-serif">
        <p className="text-lg font-bold text-orange-500">Services</p>
        <h2 className="text-3xl ">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-7 text-center">
        <button className="btn btn-outline btn-error ">More Services</button>
      </div>
    </div>
  );
};

export default Services;