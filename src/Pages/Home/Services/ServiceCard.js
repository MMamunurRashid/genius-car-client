import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
const ServiceCard = ({ service }) => {
  const { title, price, img, _id } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="service" className="rounded-xl h-52" />
        </figure>
        <div className="card-body items-center text-center pb-3">
          <h2 className="card-title font-serif font-bold ">{title}</h2>
        </div>
        <div className="flex justify-evenly items-center mb-3">
          <p className="text-orange-500 font-semibold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <HiOutlineArrowRightOnRectangle
              title="Get Service"
              className="w-6 h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
