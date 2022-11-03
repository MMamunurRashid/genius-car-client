import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();
  const { _id, title, price } = service;

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    // if (phone.length > 10) {
    //   alert("Phone number should be 11 characters");
    // }
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="font-serif mb-5 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold">You're about to order: {title}</h2>
        <h4 className="text-xl font-bold">Price: ${price}</h4>
      </div>

      <form onSubmit={handlePlaceOrder} className="bg-slate-200 px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            name="firstName"
            type="text"
            placeholder="Type your First Name"
            className="input input-bordered w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Type your Last Name"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Type your phone number"
            className="input input-bordered w-full "
          />
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full h"
          placeholder="Type your message"
        ></textarea>
        <button className="btn btn-error w-full mt-5">Place Your Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
