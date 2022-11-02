import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-1/2">
            <img
              src={person}
              alt=""
              className="h-full w-4/5 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              alt=""
              className="absolute right-5 w-1/2 border-8 top-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className=" w-1/2">
            <p className="text-red-500 font-bold text-lg">About Us</p>
            <h1 className="text-5xl font-serif font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </p>
            <p className="py-6">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error active:btn-warning">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
