import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("Ayush@gmail.com");
  const [password, setPassword] = useState("Ayush@1234");

  const handleLogin = async () => {
    
    const user = await axios.post(
      "http://localhost:3737/login",
      {
        emailId,
        password
      },
      {withCredentials:true}
    );

    console.log(user);
  };

  return (
    <div className="w-full h-full flex  justify-center pt-7">
      <fieldset className=" fieldset bg-base-300 border-base-300 rounded-box  w-1/4 h-1/2 border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
