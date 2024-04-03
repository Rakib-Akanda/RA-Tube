import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
const Register = () => {
  const authInfo = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { createUser, setUser } = authInfo;
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const telNumber = e.target.PhoneNumber.value;

    setRegisterSuccess("");
    setRegisterError("");

    // validation
    if (!/^[0-9]+$/.test(telNumber)) {
      return setRegisterError("Please submit a valid number!");
    } else if (telNumber.length < 11) {
      return setRegisterError("Phone number must be 11 digit");
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      return setRegisterError("Add @gmail.com at the end of the Gmail.");
    } else if (password.length < 6) {
      return setRegisterError("Password must be 6 characters");
    }
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        setUser(result.user);
        updateProfile(result.user, {
          displayName: name,
          phoneNumber: `${parseInt(telNumber)}`,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        }).then(console.log("Update profile name successfully"));
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Send verification email successfully");
        });
        setRegisterSuccess("Register Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className=" flex flex-col items-center mt-5">
      <div className=" w-1/3 ">
        <div className=" shadow-2xl bg-base-100 rounded-lg">
          <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="017155xxxxx"
                name="PhoneNumber"
                className="input input-bordered"
                // style={{
                //   WebkitAppearance: "textfield",
                //   MozAppearance: "textfield",
                // }}
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="mt-2">
              <p>
                If you have a previous account, please{" "}
                <Link to={"/login"} className="text-blue-600 font-semibold">
                  Login
                </Link>
                .
              </p>
            </div>
            <div>
              {registerError && (
                <p className="text-red-600 mt-2">{registerError}</p>
              )}
              {registerSuccess && (
                <p className="text-green-600 mt-2">{registerSuccess}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
