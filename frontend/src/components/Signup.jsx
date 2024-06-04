import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Signup() {

  const location = useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // on submit data will be saved in database using backend api
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    // calling backend api
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=> {
      console.log(res.data)
      if(res.data) {
        toast.success("Signup Succesfully");
        navigate(from, {replace: true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=> {
      if(err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    })
  };

  return (<>
    <div className='flex h-screen justify-center items-center bg-pink-50'>
    <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
                <span>name</span> <br/>
                <input 
                {...register("fullname", { required: true })} 
                type="text" 
                name="fullname"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none" />
                <br/>
                {errors.fullname && <span className="text-sm text-red-500 ">This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
                <span>email</span> <br/>
                <input 
                {...register("email", { required: true })} 
                type="email" 
                name="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none" />
                <br/>
                {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
                
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
                <span>password</span> <br/>
                <input 
                {...register("password", { required: true })} 
                type="password" 
                name="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none" />
                <br/>
                {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}
                
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
                <button type='submit' className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration:300 cursor:pointer">Signup</button>
                <p className='text-md'>Have account? {" "}
                  <Link to="/" className="underline text-blue-500 cursor-pointer"
                      onClick={()=> {
                      document.getElementById("my_modal_3").showModal()
                      }}> 
                      Login 
                  </Link>{" "}
                  <Login/>
                </p>
            </div>
            </form>
          </div>
        </div>
    </div>
    
    </>)
}

export default Signup