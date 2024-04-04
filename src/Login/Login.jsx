import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProviders/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn, facebookSignIn } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginError("");
    setLoginSuccess("");
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      return setLoginError("Add @gmail.com at the end of the Gmail.");
    } else if (password.length < 6) {
      return setLoginError("Password must be 6 characters");
    }
    signIn(email, password)
      .then(() => {
        e.target.reset();
        setLoginSuccess("Logged in successfully");
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoggedIn(false);
        setLoginError(error.message.split("auth/")[1]);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => setLoggedIn(true))
      .catch((error) => setLoginError(error.message));
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(() => setLoggedIn(true))
      .catch((error) => setLoginError(error.message));
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then(() => setLoggedIn(true))
      .catch((error) => setLoginError(error.message));
  };
  if (loggedIn) {
    return <Navigate to={"/"}></Navigate>;
  }
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className=" flex flex-col items-center mt-5">
      <div className=" w-1/3 ">
        <div className=" shadow-2xl bg-base-100 rounded-lg">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <p
                  onClick={handleShowPass}
                  className="absolute right-0 bottom-1/4 mr-2"
                >
                  {showPass ? (
                    <IoEyeOff className="text-xl" />
                  ) : (
                    <IoEye className="text-xl" />
                  )}
                </p>
              </div>
            </div>
            <div className="form-control mt-4 ">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-2">
              <p>
                If you do not have an account yet, please{" "}
                <Link to={"/register"} className="text-blue-600 font-semibold">
                  Register
                </Link>
                .
              </p>
            </div>
            <div>
              {loginError && <p className="text-red-600 mt-2">{loginError}</p>}
              {loginSuccess && (
                <p className="text-green-600 mt-2">{loginSuccess}</p>
              )}
            </div>
            <div className="mt-5">
              <p className="text-center font-semibold">Login with</p>
              <div className="flex justify-center mt-3">
                <FcGoogle
                  onClick={handleGoogleSignIn}
                  className="text-3xl mr-2"
                />
                <FaGithub
                  onClick={handleGithubLogin}
                  className="text-3xl mr-2"
                />
                <FaFacebook
                  onClick={handleFacebookSignIn}
                  className="text-3xl mr-2 text-blue-600"
                />
                <FaXTwitter className="text-3xl mr-2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
