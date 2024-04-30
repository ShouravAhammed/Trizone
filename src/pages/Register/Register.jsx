import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { MdLogin, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
    console.log(location)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const accepted = form.terms.checked;
    const userInfo = { name, photoURL, email, password };
    console.log(userInfo);



    setRegisterSuccess("");
    setRegisterError("");
    setEmailError("");
    setPasswordError("");

    if (/[A-Z]/.test(email)) {
      setEmailError(
        "Your email is upperCase please should have lowercase character !!"
      );
      return;
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters or longer !!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError(
        "Your password should have at least one uppercase characters."
      );
      return;
    } else if (!accepted) {
      setTermsError("Please accepted terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const userResult = result.user;
        console.log(userResult);

        updateProfile(userResult, {
          displayName: name,
          photoURL: photoURL,
      }).then(() => {
        console.log('profile Updated');
        // Navigate
        navigate(location?.state ? location.state : '/')
      })
        
        const creationTime = userResult?.metadata?.creationTime;
        const userContent = {email, creationTime} 

        // fetch start
        fetch('https://assignment-10-tmw-southeast-asia-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userContent)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);

          // inserted done and condition starts
          if(data.insertedId){
            toast.success('Registration Successfully')

            
          }
        })
        // fetch end
        
      })
      .catch((error) => {
        const userError = error.message;
        console.log(userError);
        setRegisterError(userError && toast.error('You Already Registered'));
      });
  };


  return (
    <div>
      <div className='bg-[url("https://i.ibb.co/K0DVVsy/parachute.jpg")] h-[80vh] bg-cover bg-top relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">
          <Navbar></Navbar>

          {/* login banner */}
          <div className="flex justify-center items-center lg:w-1/5 md:w-2/3 w-2/3 mx-auto h-full">
            <div className="p-6 rounded-md text-center space-y-2 border-2 border-green-500">
              <h3 className="text-4xl font-bold uppercase text-green-500">
                Sign Up
              </h3>
              <div className="flex justify-center items-center gap-2">
                <Link
                  to={"/"}
                  className="text-xl font-medium text-white hover:text-green-500 duration-300"
                >
                  Home
                </Link>
                <div className="flex justify-center items-center gap-1">
                  <span className="text-white text-xl font-medium">
                    <MdOutlineKeyboardDoubleArrowRight />
                  </span>
                  <p className="text-xl font-medium text-white">Sign Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sign Up*/}

      <div className="container mx-auto px-4 my-28">
        <div className="md:w-2/5 p-6 w-full mx-auto border-2 border-green-500 rounded-md space-y-3">
          <div className="">
            <h3 className="text-3xl font-bold text-green-500 mb-7">Sign Up</h3>
            <p className="text-xl text-green-500 font-medium">Sign Up With</p>
          </div>

          {/* sign up form */}
          <form
            onSubmit={handleRegister}
            className="py-8 border-y border-green-300 w-full space-y-4"
          >
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Enter name" required
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Photo URL
              </label>
              <input
                type="photo"
                name="photo"
                id="photo"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Photo URL" required
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Enter email" required
              />

              {emailError && (
                <p className="text-sm font-bold mt-1 text-red-600">
                  {emailError}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Password
              </label>
              <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="p-3 bg-transparent w-full duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Password" required
              />
              <span className="absolute right-4 top-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <IoIosEyeOff className="text-2xl" />  : <IoIosEye className="text-2xl" /> 
            }
            </span>
              {passwordError && (
                <p className="text-sm font-bold mt-1 text-red-600">
                  {passwordError}
                </p>
              )}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1 w-full">
              <input
                className="text-2xl"
                type="checkbox"
                name="terms"
                id="checked"
              />
              <label className="label text-sm mt-0.5 font-medium" htmlFor="terms">
                Accept Term & Conditions
              </label>
            </div>
            {termsError && (
              <p className="text-sm font-bold mt-1 text-red-600 mb-2">
                {termsError}
              </p>
            )}

            <button className="relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
                <MdLogin />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
                Sign Up
              </span>
              <span className="relative invisible">LOGIN</span>
            </button>
          </form>

          <div>
            <h3 className="text-base font-medium">
              Don`t Have An Account ?{" "}
              <Link
                to={"/login"}
                className="text-green-500 font-bold hover:border-b-2 hover:border-green-500"
              >
                Login
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
