import React, { useState } from "react";
import { RegisterAPI } from "../../api/AuthAPI";
import { postUserData } from "../../api/FirestoreAPI";
import { useNavigate } from "react-router-dom";
import { getUniqueId } from "../../helpers/getUniqueId";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueId(),
        name: credentials.name,
        email: credentials.email,
        imageLink:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      });
      navigate("/");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Create an Account</h1>
        <p className="text-gray-600 mb-6">Join us in coordinating rescue agencies</p>

        <div className="space-y-4">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Account
        </button>
      </div>
      <hr className="my-8 w-16 border-t border-gray-300" />
      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
            login
          </span>
        </p>
      </div>
    </div>
  );
}
