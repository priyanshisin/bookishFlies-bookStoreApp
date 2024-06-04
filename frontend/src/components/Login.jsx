import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }
    // calling backend api
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=> {
      console.log(res.data)
      if(res.data) {
        toast.success("Logged-in Succesfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }, 2000);
      }
    }).catch((err)=> {
      if(err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(()=> {},2000)
      }
    })
  };

 
  return (
    <>
      <div>
       <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
         <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>
                ✕
              </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
                <span>email</span> <br/>
                <input 
                {...register("email", { required: true })} 
                type="email" 
                name="email" 
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"/>
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
                className="w-80 px-3 py-1 border rounded-md outline-none"/>
                <br/>
                {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration:300 cursor:pointer">Login</button>
                <p>Not registered?{" "}
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                    signup
                  </Link>
                </p>{" "}
            </div>
         </form>
        </div>
       </dialog>
      </div>
    </>
  );
}

export default Login;
