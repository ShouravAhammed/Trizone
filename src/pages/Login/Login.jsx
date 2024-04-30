import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { MdLogin, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const {signIn, googleAuth, githubAuth} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ setSignInError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();



  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);

    setEmailError('')
    setPasswordError('')

    if(/[A-Z]/.test(email)){
      setEmailError('Your email is upperCase please should have lowercase character !!')
      return;
  }else if(password.length < 6){
      setPasswordError('Password should be at least 6 characters or longer !!')
      return;
  }else if (!/[A-Z]/.test(password)){
      setPasswordError('Your password should have at least one uppercase characters.')
      return;
  }

    signIn(email, password)
    .then(result => {
      const userResult = result.user;
      console.log(userResult);

      const userContent = {
        email,
        lastLoggedTime : userResult.metadata.lastSignInTime
      }

      // fetch data

      fetch('http://localhost:5000/users', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userContent)


      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          toast.success('Successfully Log In')

          // Navigate
        navigate(location?.state ? location.state : '/')

        }
      })

    }).catch(error => {
      const userError = error.message
      console.log(userError);
      setSignInError(userError && toast.error('Dont Match your Email and Password'))
    })    
  }

  const handleGoogle = () => {
    googleAuth(
      // Navigate
      navigate(location?.state ? location.state : '/')
    );
  }
  const handleGithub = () => {
    githubAuth();
  }


  return (
    <div>
      <div className='bg-[url("https://i.ibb.co/yqGfgzK/bear-box.jpg")] h-[80vh] bg-cover bg-top relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">
          <Navbar></Navbar>

          {/* login banner */}
          <div className="flex justify-center items-center lg:w-1/5 md:w-2/3 w-2/3 mx-auto h-full">
            <div className="p-6 rounded-md text-center space-y-2 border-2 border-green-500">
              <h3 className="text-4xl font-bold uppercase text-green-500">
                Login
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
                  <p className="text-xl font-medium text-white">Login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login */}

      <div className="container mx-auto px-4 my-28">
        <div className="md:w-2/5 p-6 w-full mx-auto border-2 border-green-500 rounded-md space-y-3">
          <div className="">
            <h3 className="text-3xl font-bold text-green-500 mb-7">
              Login Now
            </h3>
            <p className="text-xl text-green-500 font-medium">Login With</p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-5 text-center pb-8">
            <button onClick={handleGoogle} className=" relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-white transition duration-300 ease-out  rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease text-xl">
                GOOGLE
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full text-3xl ease">
                <FcGoogle />
              </span>
              <span className="relative invisible">
                <FcGoogle />
              </span>
            </button>

            <button onClick={handleGithub} className="relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-white transition duration-300 ease-out  rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease text-xl">
                GITHUB
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-gray-600 transition-all duration-300 transform group-hover:translate-x-full text-3xl ease">
                <FaGithubSquare />
              </span>
              <span className="relative invisible">
                <FaGithubSquare />
              </span>
            </button>
          </div>

          {/* login form */}
          <form onSubmit={handleSignIn} className="py-8 border-y border-green-300 w-full space-y-4">
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
              {
                emailError && <p className="text-sm font-bold mt-1 text-red-600">{emailError}</p>
              }
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

            <button className="relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
              <MdLogin />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
              LOGIN
              </span>
              <span className="relative invisible">
              LOGIN
              </span>
            </button>
          </form>



          <div>
            <h3 className="text-base font-medium text-gray-600">Don`t Have An Account ? <Link to={'/register'} className="text-green-500 font-bold hover:border-b-2 hover:border-green-500">Register</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

