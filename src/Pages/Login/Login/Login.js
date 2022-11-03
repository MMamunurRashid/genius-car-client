import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("GeniusToken", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="hero w-full my-32 ">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-row-reverse md:flex-row">
          <div className="text-center lg:text-left ">
            <img className="w-3/4 h-full" src={loginImg} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center pb-2">
              New to Genius Car?{" "}
              <Link to="/signup" className="text-orange-500 font-bold">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
