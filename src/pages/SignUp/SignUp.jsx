import { useState } from "react";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [step, setStep] = useState("EMAIL");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendOTP = () => {
    if (name && email) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      toast.success("OTP Sent: " + generatedOtp);
      setStep("OTP");
    } else {
      toast.warning("Please enter Name and Email");
    }
  };

  const verifyOTP = () => {
    if (enteredOtp === otp) {
      setStep("FINAL");
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Signup complete:
    Name: ${name}
    Email: ${email}
    Mobile: ${mobile}`);
    navigate('/');
  };

  return (
    <div className="w-full h-[100vh] bg-gray-100 absolute top-0 z-50 flex justify-center items-center">
      <div className="w-[90vw] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {(step === "EMAIL" || step === "OTP" || step === "FINAL") && (
              <>
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            {/*Send OTP button */}
            {step === "EMAIL" && (
              <div>
                <button
                  type="button"
                  onClick={sendOTP}
                  className="bg-[#f62302] text-white py-2 px-4 rounded-xl hover:bg-[#e30000]"
                >
                  Send OTP
                </button>
                <div className="py-2 text-lg flex">
                  <p>Already Signup ? , </p>
                  <NavLink to='/login' className=" mx-2 text-blue-400">Login</NavLink>
                </div>
              </div>
            )}

            {/* Enter OTP functionality*/}
            {step === "OTP" && (
              <>
                <div>
                  <label className="block text-sm font-medium">Enter OTP</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={verifyOTP}
                  className=" bg-[#f63302] text-white py-2 px-4 rounded-xl hover:bg-[#e30000]"
                >
                  Verify OTP
                </button>
              </>
            )}

            {/* Password & Mobile after OTP */}
            {step === "FINAL" && (
              <>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-[#f61e02] text-white py-2 px-4 rounded-xl hover:bg-[#e30000]"
                >
                  Complete Signup
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
