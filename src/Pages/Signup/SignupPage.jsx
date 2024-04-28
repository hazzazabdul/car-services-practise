import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignupPage = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className=" card-body card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                autoComplete="on"
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                autoComplete="on"
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Signup" />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-center text-orange-500 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
