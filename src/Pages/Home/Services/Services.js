import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState(" ");

  const searchRef = useRef();

  useEffect(() => {
    fetch(
      `https://genius-car-server-khaki-mu.vercel.app/services?search=${search}&order=${
        isAsc ? "desc" : "asc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      <div className="text-center font-serif">
        <p className="text-lg font-bold text-orange-500">Services</p>
        <h2 className="text-3xl ">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>

        <div className="text-center flex justify-center">
          <></>
          <div className="form-control ">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "asc" : "desc"}
        </button>
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
