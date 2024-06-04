import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact_Us from "./contactUs/Contact_Us";
import About_Us from "./about/About_Us";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"


function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={
            authUser? <Courses /> : <Navigate to="/signup" />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactUs" element={<Contact_Us />} />
          <Route path="/aboutUs" element={<About_Us />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
