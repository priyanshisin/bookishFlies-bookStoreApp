import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"


function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // on submit data will be saved in database using backend api
  const onSubmit = async (data) => {
    const userMsg = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    // calling backend api
    await axios.post("http://localhost:4001/msg/contactUs",userMsg)
    .then((res)=> {
      console.log(res.data)
      if(res.data) {
        toast.success("Message Submitted Succesfully");
      }
    }).catch((err)=> {
      if(err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    })
  };
    return (
    <>
      <div className="flex h-screen justify-center items-center bg-pink-50">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg text-center">
                Get in touch with us
              </h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span> <br />
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span> <br />
                
                  <textarea name="post query" rows={4} cols={40}
                  {...register("message", { required: true })}
                  placeholder="Write your message or query:" 
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration:300 cursor:pointer"
                >
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
