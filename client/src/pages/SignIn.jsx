import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white p-5">
          <h1 className="text-5xl font-bold text-center text-black">Login</h1>

          <form
            onSubmit={handleSubmit}
            className="card-body flex flex-col gap-4"
          >
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="input input-bordered border p-3 rounded-lg bg-white text-black"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="input input-bordered border p-3 rounded-lg bg-white text-black"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
            <OAuth />
          </form>
          <div className="flex gap-2  mx-auto">
            <p>Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
    </div>

    
  );
}
